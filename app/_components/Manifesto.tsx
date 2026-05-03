"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const axioms = [
  "First principles before patterns.",
  "Fewer moving parts, not clever ones.",
  "Decisions written down. Always.",
  "Working systems, not demos.",
];

export default function Manifesto() {
  return (
    <section className="relative py-24 md:py-32 border-b border-hairline">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-x-8 gap-y-10 items-end">
          <div className="col-span-12 md:col-span-3">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease }}
              className="label text-sienna"
            >
              How I think
            </motion.span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease }}
            className="col-span-12 md:col-span-9 font-display leading-[1] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2.2rem, 5.4vw, 4.6rem)" }}
          >
            <span className="font-extralight">Most teams&apos; AI problem</span>
            <span className="block font-extralight italic text-ink/70">
              isn&apos;t the model.
            </span>
            <span className="block font-black">
              It&apos;s the <span className="text-sienna">system around it.</span>
            </span>
          </motion.h2>
        </div>

        {/* Axioms — 4 one-liners, no labels, no body text */}
        <ul className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-0 border-t border-hairline">
          {axioms.map((line, i) => (
            <motion.li
              key={line}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.07, ease }}
              className="group flex items-baseline gap-5 py-6 border-b border-hairline"
            >
              <span className="font-mono text-[11px] tracking-[0.22em] text-sienna tabular-nums shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className="font-display tracking-[-0.02em] leading-[1.15] transition-colors group-hover:text-sienna"
                style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)" }}
              >
                <span className={i % 2 === 0 ? "font-medium" : "font-extralight italic"}>
                  {line}
                </span>
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
