"use client";

import { motion } from "motion/react";
import { capabilities, services } from "../_data/portfolio";

export default function Capabilities() {
  return (
    <section
      id="approach"
      className="relative py-24 md:py-32 border-b border-hairline bg-clay/40"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-x-8 gap-y-10">
          <div className="col-span-12 md:col-span-4">
            <span className="label text-sienna">Capabilities</span>
            <h2
              className="mt-3 font-display leading-[1.05] tracking-[-0.025em]"
              style={{ fontSize: "clamp(1.9rem, 4vw, 3.2rem)" }}
            >
              <span className="font-extralight">Where I get</span>{" "}
              <span className="font-black">hired.</span>
            </h2>
            <p className="mt-5 text-[15.5px] leading-[1.6] text-ink/70 max-w-[40ch]">
              Six engagement shapes. Each maps to a project type a technical
              founder or CTO usually has on their roadmap and quietly cannot
              staff. Audit, scope, ship, document, leave clean.
            </p>

            <div className="mt-8 hidden md:block bg-bone border border-hairline">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-hairline">
                <span className="w-2 h-2 rounded-full bg-sienna" />
                <span className="label text-ink/55">engagement formats</span>
              </div>
              <ul>
                {services.map((s, i) => (
                  <li
                    key={s.name}
                    className={`px-4 py-3.5 ${i < services.length - 1 ? "border-b border-hairline" : ""}`}
                  >
                    <div className="flex items-baseline justify-between gap-3 mb-1">
                      <span className="font-display text-[16px] font-medium tracking-tight">
                        {s.name}
                      </span>
                      <span className="font-mono text-[11px] text-sienna whitespace-nowrap">
                        {s.price}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[13px] leading-[1.5] text-ink/65 max-w-[36ch]">
                        {s.body}
                      </p>
                      <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink/45 whitespace-nowrap">
                        {s.duration}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-span-12 md:col-span-8">
            <ul className="border-t border-hairline">
              {capabilities.map((c, i) => (
                <motion.li
                  key={c.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group grid grid-cols-12 gap-x-6 py-7 border-b border-hairline hover:bg-bone/50 transition-colors"
                >
                  <div className="col-span-2 md:col-span-1">
                    <span className="label text-sienna">{c.label}</span>
                  </div>
                  <div className="col-span-10 md:col-span-4">
                    <h3 className="font-display text-[22px] md:text-[26px] leading-[1.2] tracking-tight font-medium">
                      {c.title}
                    </h3>
                  </div>
                  <p className="col-span-12 md:col-span-7 text-[15px] leading-[1.6] text-ink/75">
                    {c.body}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
