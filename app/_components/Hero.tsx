"use client";

import { motion } from "motion/react";
import HeroConsole from "./HeroConsole";

const ease = [0.22, 1, 0.36, 1] as const;

const chips = [
  { k: "01", v: "Production AI" },
  { k: "02", v: "RAG · Agents" },
  { k: "03", v: "Cost Audits" },
  { k: "04", v: "Full-Stack" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-20 md:pt-24 pb-14 md:pb-20 border-b border-hairline overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 linegrid opacity-50 pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -right-40 top-10 w-[640px] h-[640px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(181,80,46,0.15), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -left-32 bottom-0 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(200,146,61,0.12), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-x-8 gap-y-12 items-center">
          {/* LEFT: minimal headline */}
          <div className="col-span-12 lg:col-span-6 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-sienna animate-pulse" />
              <span className="label text-ink/60">
                AI Engineer · Software Engineer
              </span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.07 } },
              }}
              className="font-display text-ink leading-[0.98] tracking-[-0.035em]"
              style={{ fontSize: "clamp(2.6rem, 6.4vw, 5.6rem)" }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, ease },
                  },
                }}
                className="font-light"
              >
                I ship AI systems
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, ease },
                  },
                }}
                className="font-extralight italic text-ink/70"
              >
                that
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, ease },
                  },
                }}
                className="flex items-baseline gap-3 md:gap-5 flex-wrap"
              >
                <span className="font-black text-sienna">survive</span>
                <span className="font-extralight italic">real users.</span>
              </motion.div>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease }}
              className="mt-8 flex items-center flex-wrap gap-3"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-ink text-bone px-5 py-3 hover:bg-cacao transition-colors"
              >
                <span className="font-mono text-xs">→</span>
                <span className="font-medium text-sm tracking-tight">
                  Start a conversation
                </span>
              </a>
              <a
                href="#work"
                className="text-sm font-medium underline decoration-sienna decoration-2 underline-offset-[5px] hover:text-sienna transition-colors"
              >
                See the work
              </a>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-[560px]"
            >
              {chips.map((c) => (
                <li
                  key={c.k}
                  className="border-t-2 border-ink pt-2 flex flex-col"
                >
                  <span className="label text-sienna">{c.k}</span>
                  <span className="font-display font-medium text-[15px] tracking-tight mt-0.5">
                    {c.v}
                  </span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* RIGHT: live system console */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="col-span-12 lg:col-span-6 order-1 lg:order-2 relative"
          >
            <HeroConsole />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
