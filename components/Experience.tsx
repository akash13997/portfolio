"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-14 max-w-xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-indigo-light">Experience</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Where I&apos;ve worked.</h2>
        </div>

        <div className="relative">
          <div className="absolute left-[15px] top-2 h-[calc(100%-16px)] w-px bg-gradient-to-b from-indigo via-violet/60 to-transparent sm:left-[19px]" />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <motion.div
                key={job.company + job.duration}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="relative pl-11 sm:pl-14"
              >
                <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-indigo/40 bg-surface text-indigo-light sm:h-10 sm:w-10">
                  <Briefcase size={15} />
                </span>

                <div className="glass rounded-2xl p-6 transition-shadow hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.35)]">
                  <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-ink">{job.role}</h3>
                    <span className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted">
                      {job.duration}
                    </span>
                  </div>
                  <p className="mb-4 text-sm font-medium text-indigo-light">{job.company}</p>
                  <ul className="space-y-2">
                    {job.points.map((point, idx) => (
                      <li key={idx} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-violet" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
