"use client";

import { motion } from "motion/react";
import { principles } from "../_data/portfolio";

const steps = [
  {
    n: "01",
    label: "Sit with the problem",
    body: "Architecture, failure modes, the assumptions baked into the current approach. Constraints, time, budget, team, existing code. Before any solution.",
  },
  {
    n: "02",
    label: "Draw the call graph",
    body: "On paper. Not the diagram the team has, the real one. A workflow they think is 3 calls almost always turns out to be 11.",
  },
  {
    n: "03",
    label: "Scope the smallest version",
    body: "That actually solves the problem in production. Not a feature flag. Not a v2. The thing that ships and survives.",
  },
  {
    n: "04",
    label: "Ship + document the tradeoffs",
    body: "Working code in your repo, an architecture doc explaining the decisions, and enough context for your team to maintain it after I leave.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative py-24 md:py-32 border-b border-hairline bg-cacao text-bone overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #F4EDE0 1px, transparent 1px), linear-gradient(to bottom, #F4EDE0 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-x-8 gap-y-10">
          <div className="col-span-12 md:col-span-4">
            <span className="label text-ochre">How I Work</span>
            <h2
              className="mt-3 font-display leading-[1.05] tracking-[-0.025em]"
              style={{ fontSize: "clamp(1.9rem, 4vw, 3.2rem)" }}
            >
              <span className="font-extralight text-bone/85">
                Systems thinking,
              </span>
              <span className="block font-black">executed in code.</span>
            </h2>
            <p className="mt-5 text-[15.5px] leading-[1.6] text-bone/75 max-w-[40ch]">
              Four mental models I run almost everything through. They&apos;re
              quiet, but they keep the work from drifting into clever-for-its-own-sake
              territory.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3">
              {principles.map((p) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="border border-bone/15 p-4"
                >
                  <div className="font-display text-[18px] leading-tight font-medium text-bone">
                    {p.name}
                  </div>
                  <div className="mt-2 text-[12.5px] leading-[1.5] text-bone/65">
                    {p.body}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="col-span-12 md:col-span-8">
            <ol className="space-y-0 border-l border-bone/15 ml-4 md:ml-10">
              {steps.map((s, i) => (
                <motion.li
                  key={s.n}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.55,
                    delay: i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative pl-8 md:pl-12 py-8 md:py-10 border-b border-bone/10"
                >
                  <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12 md:col-span-3">
                      <span className="label text-ochre">{s.n}</span>
                    </div>
                    <div className="col-span-12 md:col-span-9">
                      <h3 className="font-display text-[26px] md:text-[34px] leading-[1.1] font-medium tracking-tight text-bone">
                        {s.label}
                      </h3>
                      <p className="mt-3 text-[15.5px] leading-[1.6] text-bone/75 max-w-[60ch]">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ol>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-10 ml-4 md:ml-10 pl-8 md:pl-12 border-l border-bone/15"
            >
              <p className="font-display text-[20px] md:text-[24px] italic leading-snug text-bone/85 max-w-[60ch]">
                &ldquo;A team that picks the wrong model and builds the system
                well will outperform a team that picks the right model and
                skips the system.&rdquo;
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
