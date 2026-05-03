"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { links } from "../_data/portfolio";

export default function Contact() {
  const [typed, setTyped] = useState("");
  const target = "DM with a paragraph or two on what you're working on.";

  useEffect(() => {
    let i = 0;
    let raf = 0;
    const tick = () => {
      i = Math.min(target.length, i + 1);
      setTyped(target.slice(0, i));
      if (i < target.length) raf = window.setTimeout(tick, 28) as unknown as number;
    };
    const start = setTimeout(() => tick(), 400);
    return () => {
      clearTimeout(start);
      clearTimeout(raf);
    };
  }, []);

  return (
    <section
      id="contact"
      className="relative py-24 md:py-36 bg-ink text-bone overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #F4EDE0 1px, transparent 1px), linear-gradient(to bottom, #F4EDE0 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div
        aria-hidden
        className="absolute -left-40 -top-40 w-[640px] h-[640px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(181,80,46,0.22), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-x-8 gap-y-12">
          <div className="col-span-12 md:col-span-7">
            <span className="label text-ochre">Get In Touch</span>
            <h2
              className="mt-4 font-display leading-[1] tracking-[-0.035em]"
              style={{ fontSize: "clamp(2.6rem, 7.2vw, 6.8rem)" }}
            >
              <span className="font-extralight text-bone/85">If you&apos;re building</span>
              <span className="block">
                <span className="font-black">something</span>{" "}
                <span className="italic font-extralight">at the edge</span>
              </span>
              <span className="block font-extralight text-bone/85">
                of AI and production,
              </span>
              <span className="block font-black text-sienna">let&apos;s talk.</span>
            </h2>

            <div className="mt-12 max-w-[640px] bg-cacao border border-bone/10">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-bone/10">
                <span className="w-2.5 h-2.5 rounded-full bg-sienna" />
                <span className="w-2.5 h-2.5 rounded-full bg-ochre" />
                <span className="w-2.5 h-2.5 rounded-full bg-bone/30" />
                <span className="ml-3 label text-bone/50">
                  ~/sokaina · zsh
                </span>
              </div>
              <div className="p-5 font-mono text-[13px] leading-[1.7] text-bone/85">
                <div>
                  <span className="text-ochre">$</span>{" "}
                  <span className="text-bone/55">cat</span> reach-me.txt
                </div>
                <div className="mt-3 caret">{typed}</div>
                <div className="mt-4 text-bone/45">
                  # The best way to reach me is a DM, not a form.
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-12 md:col-span-5 md:pl-10 md:border-l border-bone/10 flex flex-col gap-6"
          >
            <div>
              <span className="label text-bone/50 mb-2 block">Direct</span>
              <a
                href={`mailto:${links.email}`}
                className="font-display text-2xl md:text-[28px] leading-tight tracking-tight hover:text-sienna transition-colors"
              >
                {links.email} ↗
              </a>
            </div>

            <div className="border-t border-bone/10 pt-6">
              <span className="label text-bone/50 mb-3 block">
                Channels (in order of preference)
              </span>
              <ul className="space-y-2">
                {[
                  { name: "LinkedIn", url: links.linkedin, handle: "in/sokainakanwal" },
                  { name: "Upwork", url: links.upwork, handle: "freelancers/sokainak" },
                ].map((c) => (
                  <li key={c.name} className="flex items-baseline justify-between border-b border-bone/10 py-2.5">
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-baseline gap-3"
                    >
                      <span className="font-display text-[18px] font-medium">
                        {c.name}
                      </span>
                      <span className="font-mono text-[12px] text-bone/55 group-hover:text-sienna transition-colors">
                        /{c.handle}
                      </span>
                    </a>
                    <span className="font-mono text-[12px] text-bone/45">↗</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-bone/10 pt-6">
              <span className="label text-bone/50 mb-2 block">What to send</span>
              <p className="text-[14.5px] leading-[1.6] text-bone/75 max-w-[40ch]">
                A paragraph on what you&apos;re building, where it&apos;s
                breaking, and what would make the next 30 days easier. I read
                everything and reply within two business days.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
