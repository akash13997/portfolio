"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-14 max-w-xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-indigo-light">Projects</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Selected work.</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.1 }}
              whileHover={{ y: -6 }}
              className="group glass flex flex-col overflow-hidden rounded-2xl transition-shadow hover:shadow-[0_0_40px_-12px_rgba(99,102,241,0.45)]"
            >
              <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                <div className="absolute inset-0 mesh opacity-40 transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 flex items-end p-5">
                  <h3 className="font-display text-2xl font-semibold text-white drop-shadow">{project.title}</h3>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="mb-4 text-sm leading-relaxed text-muted">{project.overview}</p>

                <div className="mb-5 flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-surface-2/70 px-2.5 py-1 font-mono text-[11px] text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-4 pt-2">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="focus-ring flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-indigo-light"
                    >
                      Live Demo <ExternalLink size={14} />
                    </a>
                  )}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="focus-ring flex items-center gap-1.5 text-sm font-semibold text-indigo-light transition-colors hover:text-violet-light"
                  >
                    Case Study <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
