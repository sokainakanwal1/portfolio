"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const sections = [
  { id: "work", label: "Work" },
  { id: "approach", label: "Approach" },
  { id: "process", label: "Process" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const indicatorWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const h = d.getUTCHours().toString().padStart(2, "0");
      const m = d.getUTCMinutes().toString().padStart(2, "0");
      setTime(`${h}:${m} UTC`);
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-bone/85 backdrop-blur-md border-b border-hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-14 flex items-center justify-between">
          <a
            href="#top"
            className="flex items-center gap-3 group"
          >
            <span className="relative flex items-center justify-center w-7 h-7 border border-ink/80">
              <span className="font-display font-black text-[15px] leading-none">
                S
              </span>
              <span className="absolute -right-[5px] -bottom-[5px] w-[8px] h-[8px] bg-sienna" />
            </span>
            <span className="hidden md:flex flex-col leading-none">
              <span className="font-display font-medium text-[15px]">
                Sokaina Kanwal
              </span>
              <span className="label text-ink/55 mt-[3px]">
                AI Engineer · Software Engineer
              </span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="label text-ink/65 hover:text-sienna transition-colors"
              >
                <span className="text-ink/30 mr-1">/</span>
                {s.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline label text-ink/55 tabular-nums">
              {time || ","}
            </span>
            <a
              href="#contact"
              className="group relative label px-3 py-1.5 border border-ink text-ink hover:bg-ink hover:text-bone transition-colors"
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-sienna mr-2 align-middle group-hover:bg-bone" />
              Open to remote roles
            </a>
          </div>
        </div>
        <motion.div
          aria-hidden
          style={{ width: indicatorWidth }}
          className="h-[2px] bg-sienna"
        />
      </div>
    </header>
  );
}
