import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <a href="#hero" className="focus-ring flex items-center gap-2 font-display text-lg font-semibold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo to-violet text-sm text-white">
                AS
              </span>
              Akash Singh
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">{profile.summary}</p>
          </div>

          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">Quick Links</p>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="focus-ring text-sm text-muted transition-colors hover:text-indigo-light">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="/resume.pdf" download className="focus-ring text-sm text-muted transition-colors hover:text-indigo-light">
                  Download Resume
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">Connect</p>
            <div className="flex items-center gap-3">
              {[
                { icon: Github, href: profile.github, label: "GitHub" },
                { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
                { icon: Mail, href: `mailto:${profile.email}`, label: "Email" }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-indigo/60 hover:text-indigo-light"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted">{profile.email}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted">© {new Date().getFullYear()} Akash Singh. All rights reserved.</p>
          <a
            href="#hero"
            className="focus-ring flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-indigo-light"
          >
            Back to top <ArrowUp size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}
