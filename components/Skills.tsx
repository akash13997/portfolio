"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-14 max-w-xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-indigo-light">Skills</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">What I work with.</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass group rounded-2xl p-6 transition-shadow hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.4)]"
            >
              <h3 className="mb-4 font-display text-lg font-semibold text-ink">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-surface-2/70 px-3 py-1.5 text-xs font-medium text-muted transition-colors group-hover:border-indigo/30 hover:!border-indigo/60 hover:!text-indigo-light"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
