"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, MapPin, FolderGit2 } from "lucide-react";
import { profile } from "@/lib/data";

function useTypedRoles(roles: string[]) {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex % roles.length];
    const speed = deleting ? 35 : 55;
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setRoleIndex((i) => i + 1);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex, roles]);

  return text;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
};
const item = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function Hero() {
  const typed = useTypedRoles(profile.roles);

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0 mesh" />
      <div className="pointer-events-none absolute inset-0 bg-grid-fade grid-overlay opacity-60" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 font-mono text-xs text-muted backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
            </span>
            {profile.availability}
          </motion.div>

          <motion.p variants={item} className="mb-3 font-mono text-sm text-indigo-light">
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.div variants={item} className="mt-4 h-9 font-display text-xl font-medium text-gradient sm:text-2xl">
            {typed}
            <span className="animate-blink text-indigo-light">|</span>
          </motion.div>

          <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.summary}
          </motion.p>

          <motion.div variants={item} className="mt-4 flex items-center gap-1.5 font-mono text-xs text-muted">
            <MapPin size={13} /> {profile.location}
          </motion.div>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={profile.resume}
              download
              target="_blank"
              rel="noreferrer"
              className="focus-ring group relative overflow-hidden rounded-full bg-gradient-to-r from-indigo via-blue to-violet px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_-8px_rgba(99,102,241,0.6)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="focus-ring rounded-full border border-border px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-indigo/60 hover:text-indigo-light"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="focus-ring flex items-center gap-1.5 rounded-full px-4 py-3 text-sm font-semibold text-muted transition-colors hover:text-ink"
            >
              Hire Me <ArrowRight size={15} />
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-4">
            {[
              { icon: Github, href: profile.github, label: "GitHub" },
              { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${profile.email}`, label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                whileHover={{ y: -3, scale: 1.08 }}
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-indigo/60 hover:text-indigo-light"
              >
                <Icon size={17} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Signature element: deploy-style status card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-sm animate-float"
        >
          <div className="glass rounded-2xl p-5 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-live/70" />
              </div>
              <span className="font-mono text-[11px] text-muted">deploy_status.log</span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between rounded-lg border border-border bg-surface-2/60 px-3 py-2">
                <span className="text-muted">branch</span>
                <span className="text-indigo-light">main</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-border bg-surface-2/60 px-3 py-2">
                <span className="text-muted">build</span>
                <span className="flex items-center gap-1.5 text-live">
                  <span className="h-1.5 w-1.5 rounded-full bg-live" /> passing
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-border bg-surface-2/60 px-3 py-2">
                <span className="text-muted">stack</span>
                <span className="text-ink">Next.js · TS</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-border bg-surface-2/60 px-3 py-2">
                <span className="text-muted">experience</span>
                <span className="text-ink">3.5+ years</span>
              </div>
              <div className="rounded-lg border border-indigo/30 bg-indigo/10 px-3 py-2.5 text-[11px] leading-relaxed text-muted">
                <FolderGit2 className="mb-1 text-indigo-light" size={14} />
                4 production projects shipped — from church streaming platforms to multilingual service portals.
              </div>
            </div>
          </div>

          <div className="absolute -right-6 -top-6 -z-10 h-40 w-40 rounded-full bg-violet/30 blur-3xl" />
          <div className="absolute -bottom-8 -left-8 -z-10 h-40 w-40 rounded-full bg-blue/30 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
