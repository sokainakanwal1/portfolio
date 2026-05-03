"use client";

import { motion } from "motion/react";
import { experience } from "../_data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 border-b border-hairline"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-x-8 gap-y-8 mb-12">
          <div className="col-span-12 md:col-span-4">
            <span className="label text-sienna">Background</span>
            <h2
              className="mt-3 font-display leading-[1.05] tracking-[-0.025em]"
              style={{ fontSize: "clamp(1.9rem, 4vw, 3.2rem)" }}
            >
              <span className="font-extralight">A short</span>{" "}
              <span className="font-black">trajectory.</span>
            </h2>
            <p className="mt-5 text-[15px] leading-[1.6] text-ink/70 max-w-[40ch]">
              Full-stack engineering at NexTek, then AI work at OptimaGeeks,
              now an independent AI engineer shipping production systems for
              SaaS, finance, and professional-services teams.
            </p>
            <p className="mt-3 label text-ink/35">BSCS · Riphah International University · 2020–2024</p>
          </div>

          <div className="col-span-12 md:col-span-8">
            <ol className="border-t border-hairline">
              {experience.map((e, i) => (
                <motion.li
                  key={`${e.org}-${e.role}`}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="grid grid-cols-12 gap-x-6 gap-y-3 py-7 border-b border-hairline"
                >
                  <div className="col-span-12 md:col-span-3">
                    <span className="label text-ink/55">{e.period}</span>
                  </div>
                  <div className="col-span-12 md:col-span-9">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-display text-[22px] md:text-[26px] leading-tight font-medium tracking-tight">
                        {e.org}
                      </h3>
                      <span className="label text-sienna">{e.role}</span>
                    </div>
                    <p className="mt-2 text-[15px] leading-[1.6] text-ink/75 max-w-[60ch]">
                      {e.note}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
