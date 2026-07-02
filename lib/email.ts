type BrevoPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function sendContactEmail({ name, email, subject, message }: BrevoPayload) {
  const apiKey = process.env.BREVO_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    throw new Error(
      "Email is not configured. Set BREVO_API_KEY, CONTACT_TO_EMAIL, and CONTACT_FROM_EMAIL in .env.local"
    );
  }

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "api-key": apiKey
    },
    body: JSON.stringify({
      sender: { name: "Portfolio Contact Form", email: fromEmail },
      to: [{ email: toEmail }],
      replyTo: { email, name },
      subject: `[Portfolio] ${subject}`,
      htmlContent: `
        <div style="font-family: sans-serif; line-height:1.6;">
          <h2>New portfolio message</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
        </div>
      `
    })
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Brevo API error: ${res.status} ${body}`);
  }

  return res.json();
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
