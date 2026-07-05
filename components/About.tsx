"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { profile } from "@/lib/data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v))
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-4xl font-semibold text-gradient sm:text-5xl">
      {display}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-14 max-w-xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-indigo-light">About</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Full stack, end to end.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div className="space-y-5">
            {profile.aboutParagraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-base leading-relaxed text-muted sm:text-[17px]"
              >
                {p}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-2 pt-2"
            >
              {["React.js", "Next.js", "JavaScript", "TypeScript", "Redux Toolkit (RTK)", "Redux-Saga", "Formik", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Stripe", "JWT Authentication", "Git & GitHub", "Postman", "VS Code", "Cron Jobs","HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Material UI", "Responsive Design"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-surface/60 px-3 py-1 font-mono text-xs text-muted"
                  >
                    {tag}
                  </span>
                )
              )}
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {profile.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass flex flex-col justify-between rounded-2xl p-5 transition-shadow hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.4)]"
              >
                <Counter value={stat.value} suffix={stat.suffix} />
                <span className="mt-2 text-sm text-muted">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
