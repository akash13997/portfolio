"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Loader2, CheckCircle2, Send } from "lucide-react";
import { profile } from "@/lib/data";

const schema = z.object({
  name: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email"),
  subject: z.string().min(3, "Subject is too short"),
  message: z.string().min(10, "Message should be at least 10 characters")
});

type FormValues = z.infer<typeof schema>;

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-14 max-w-xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-indigo-light">Contact</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Let&apos;s build something.</h2>
          <p className="mt-3 text-muted">
            Have a role, project, or idea in mind? I usually reply within a day.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
              { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
              { icon: MapPin, label: "Location", value: profile.location, href: undefined }
            ].map(({ icon: Icon, label, value, href }) => {
              const content = (
                <div className="glass flex items-center gap-4 rounded-2xl p-4 transition-colors hover:border-indigo/40">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo/20 to-violet/20 text-indigo-light">
                    <Icon size={16} />
                  </span>
                  <div>
                    <p className="text-xs text-muted">{label}</p>
                    <p className="text-sm font-medium text-ink">{value}</p>
                  </div>
                </div>
              );
              return href ? (
                <a key={label} href={href} className="focus-ring block">
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              );
            })}
          </div>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="glass relative overflow-hidden rounded-2xl p-6 sm:p-8"
            noValidate
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Name" error={errors.name?.message}>
                <input
                  {...register("name")}
                  className="focus-ring w-full rounded-xl border border-border bg-surface-2/60 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-indigo/60"
                  placeholder="Your name"
                />
              </Field>
              <Field label="Email" error={errors.email?.message}>
                <input
                  {...register("email")}
                  className="focus-ring w-full rounded-xl border border-border bg-surface-2/60 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-indigo/60"
                  placeholder="you@email.com"
                />
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Subject" error={errors.subject?.message}>
                <input
                  {...register("subject")}
                  className="focus-ring w-full rounded-xl border border-border bg-surface-2/60 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-indigo/60"
                  placeholder="What's this about?"
                />
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Message" error={errors.message?.message}>
                <textarea
                  {...register("message")}
                  rows={5}
                  className="focus-ring w-full resize-none rounded-xl border border-border bg-surface-2/60 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-indigo/60"
                  placeholder="Tell me a bit about the opportunity or project..."
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="focus-ring mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo via-blue to-violet px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_-10px_rgba(99,102,241,0.6)] transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 sm:w-auto sm:px-10"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  Send Message <Send size={15} />
                </>
              )}
            </button>

            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 flex items-center gap-2 rounded-xl border border-live/30 bg-live/10 px-4 py-3 text-sm text-live"
                >
                  <CheckCircle2 size={16} /> Message sent — thanks for reaching out! I&apos;ll get back to you soon.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-400"
                >
                  Something went wrong. Please try again or email me directly.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-muted">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-400">{error}</span>}
    </label>
  );
}
