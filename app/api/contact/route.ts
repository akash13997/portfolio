import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { connectDB } from "@/lib/mongodb";
import Message from "@/lib/models/Message";
import { sendContactEmail } from "@/lib/email";
import { rateLimit } from "@/lib/rateLimit";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(200),
  subject: z.string().min(3).max(200),
  message: z.string().min(10).max(5000)
});

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") ?? req.headers.get("x-real-ip") ?? "unknown";

  const { allowed } = rateLimit(ip);
  if (!allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a minute." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed.", issues: parsed.error.flatten() },
      { status: 422 }
    );
  }

  const { name, email, subject, message } = parsed.data;

  // Persist to MongoDB if configured; the form should still work (email-only)
  // for anyone who hasn't set up MONGODB_URI yet.
  if (process.env.MONGODB_URI) {
    try {
      await connectDB();
      await Message.create({ name, email, subject, message, ip });
    } catch (err) {
      console.error("Failed to store contact message:", err);
    }
  }

  // Send notification email via Brevo if configured.
  if (process.env.BREVO_API_KEY) {
    try {
      await sendContactEmail({ name, email, subject, message });
    } catch (err) {
      console.error("Failed to send contact email:", err);
      return NextResponse.json(
        { error: "Message saved but email notification failed to send." },
        { status: 502 }
      );
    }
  }

  return NextResponse.json({ ok: true });
}
