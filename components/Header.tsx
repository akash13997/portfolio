"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { profile } from "@/lib/data";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV.map((n) => document.querySelector(n.href)).filter(Boolean) as Element[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "glass shadow-[0_1px_0_0_hsl(var(--border))]" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#hero" className="focus-ring flex items-center gap-2 font-display text-lg font-semibold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo to-violet text-sm text-white">
            AS
          </span>
          <span className="hidden sm:inline">Akash Singh</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "focus-ring group relative px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-ink",
                active === item.href && "text-ink"
              )}
            >
              {item.label}
              <span
                className={cn(
                  "absolute bottom-0 left-3 right-3 h-[2px] scale-x-0 bg-gradient-to-r from-indigo to-violet transition-transform duration-300 origin-left",
                  active === item.href && "scale-x-100"
                )}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.resume}
            download
            target="_blank"
            rel="noreferrer"
            className="focus-ring hidden items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-sm font-medium text-ink transition-colors hover:border-indigo/60 hover:text-indigo-light sm:flex"
          >
            <Download size={14} /> Resume
          </a>
          <ThemeToggle />
          <button
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-border md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="glass overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 pb-4">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="focus-ring rounded-lg px-3 py-2.5 text-sm font-medium text-muted hover:bg-surface-2 hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={profile.resume}
                download
                target="_blank"
                rel="noreferrer"
                className="focus-ring mt-1 flex items-center gap-1.5 rounded-lg border border-border px-3 py-2.5 text-sm font-medium text-ink"
              >
                <Download size={14} /> Download Resume
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
