"use client";

import { motion } from "motion/react";

const calls = [
  { tier: "GPT-4o", count: 4, color: "#B5502E" },
  { tier: "GPT-4o-mini", count: 6, color: "#C8923D" },
  { tier: "Claude · Sonnet", count: 1, color: "#3D2817" },
];

export default function Interlude() {
  return (
    <section className="relative py-20 md:py-28 border-b border-hairline bg-bone-soft">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-x-8 gap-y-10 items-start">
          <div className="col-span-12 md:col-span-5">
            <span className="label text-sienna">Interlude · Field log</span>
            <p
              className="mt-5 font-display leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(1.6rem, 3.4vw, 2.8rem)" }}
            >
              <span className="font-extralight">A workflow a founder thinks</span>{" "}
              <span className="font-black">is 3 model calls</span>{" "}
              <span className="italic font-extralight">usually turns out to be</span>{" "}
              <span className="font-black text-sienna">11.</span>
            </p>
            <p className="mt-5 text-[15px] leading-[1.65] text-ink/70 max-w-[44ch]">
              Validation calls. Logging summarization. Retry layers at every
              level. Agent fan-out. Each one was reasonable when it was added.
              No one has looked at the whole graph since.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="col-span-12 md:col-span-7 bg-bone border border-hairline p-6 md:p-8"
          >
            <div className="flex items-center justify-between pb-4 border-b border-hairline">
              <span className="label text-ink/55">call-graph.audit</span>
              <span className="label text-ink/35">2026-Q1</span>
            </div>

            <div className="mt-6 space-y-4">
              {calls.map((c) => (
                <div key={c.tier}>
                  <div className="flex items-baseline justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span
                        className="inline-block w-2.5 h-2.5 rounded-full"
                        style={{ background: c.color }}
                      />
                      <span className="font-mono text-[13px] text-ink/80">
                        {c.tier}
                      </span>
                    </div>
                    <span className="font-mono text-[13px] text-ink/55">
                      {c.count} calls / action
                    </span>
                  </div>
                  <div className="relative h-2 bg-clay/60">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(c.count / 11) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-y-0 left-0"
                      style={{ background: c.color }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 pt-5 border-t border-hairline grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="font-display font-black text-3xl tracking-tight">
                  11
                </div>
                <div className="label text-ink/55 mt-1">calls / action</div>
              </div>
              <div>
                <div className="font-display font-black text-3xl tracking-tight text-sienna">
                  4
                </div>
                <div className="label text-ink/55 mt-1">after audit</div>
              </div>
              <div>
                <div className="font-display font-black text-3xl tracking-tight">
                  64%
                </div>
                <div className="label text-ink/55 mt-1">cost reduction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
