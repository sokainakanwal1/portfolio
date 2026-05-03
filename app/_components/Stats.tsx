"use client";

import { motion } from "motion/react";
import { stats } from "../_data/portfolio";

export default function Stats() {
  return (
    <section className="relative py-20 md:py-28 border-b border-hairline">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-x-8 gap-y-8 mb-12">
          <div className="col-span-12 md:col-span-4">
            <span className="label text-sienna">Receipts</span>
            <h2
              className="mt-3 font-display leading-[1.05] tracking-[-0.025em]"
              style={{ fontSize: "clamp(1.9rem, 4vw, 3.2rem)" }}
            >
              <span className="font-extralight">Numbers that</span>{" "}
              <span className="font-black">show up</span>{" "}
              <span className="italic font-extralight">in production.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8 md:pl-10 flex items-end">
            <p className="text-[15.5px] leading-[1.6] text-ink/75 max-w-[58ch]">
              Reaction counts and follower growth do not matter. Pipeline matters.
              Calls matter. Closed clients matter. These are the four numbers I
              actually track.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="col-span-6 md:col-span-3 border-t-2 border-ink pt-5"
            >
              <div
                className="font-display font-black tracking-[-0.04em] leading-none text-ink"
                style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.4rem)" }}
              >
                {s.number}
              </div>
              <div className="mt-3 text-[13.5px] leading-[1.4] text-ink/70 max-w-[28ch]">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
