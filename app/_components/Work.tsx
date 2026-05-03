"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState, useCallback } from "react";
import { projects } from "../_data/portfolio";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Work() {
  const [active, setActive] = useState(0);
  const [opened, setOpened] = useState(false);

  const next = useCallback(
    () => setActive((i) => (i + 1) % projects.length),
    [],
  );
  const prev = useCallback(
    () => setActive((i) => (i - 1 + projects.length) % projects.length),
    [],
  );

  useEffect(() => {
    if (!opened) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") setOpened(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [opened, next, prev]);

  const project = projects[active];

  return (
    <section
      id="work"
      className="relative py-24 md:py-32 border-b border-hairline overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-x-8 gap-y-8 mb-12">
          <div className="col-span-12 md:col-span-3">
            <span className="label text-sienna">Selected Work</span>
            <span className="block label text-ink/35 mt-1.5">
              8 projects · 2026
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="col-span-12 md:col-span-9"
          >
            <h2
              className="font-display leading-[1.05] tracking-[-0.025em]"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.6rem)" }}
            >
              <span className="font-extralight">Production systems.</span>
              <span className="block">
                <span className="font-black">Real users.</span>{" "}
                <span className="italic font-extralight">
                  Receipts to back it up.
                </span>
              </span>
            </h2>
          </motion.div>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          {!opened ? (
            /* CLOSED — compact archive folder card */
            <motion.div
              key="closed"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.55, ease }}
            >
              <button
                type="button"
                onClick={() => setOpened(true)}
                className="group relative w-full text-left block"
                aria-label="Open project archive"
              >
                <div className="relative bg-bone-soft border border-hairline overflow-hidden">
                  {/* sienna ribbon */}
                  <span
                    aria-hidden
                    className="absolute left-0 top-0 bottom-0 w-[6px] bg-sienna group-hover:w-2 transition-[width] duration-500"
                  />

                  {/* TOP META BAR */}
                  <div className="flex items-center justify-between border-b border-hairline px-6 md:px-8 py-3.5">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink/55">
                        archive · vol. 01
                      </span>
                      <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-ink/25" />
                      <span className="hidden sm:inline font-mono text-[10px] tracking-[0.18em] uppercase text-ink/55">
                        2024 — 2026
                      </span>
                    </div>
                    <span className="hidden md:inline-flex font-mono text-[10px] tracking-[0.18em] uppercase text-ink/35">
                      keys: ← → · esc
                    </span>
                  </div>

                  {/* MAIN ROW */}
                  <div className="grid grid-cols-12 gap-y-10 gap-x-6 px-6 md:px-10 py-10 md:py-14 items-center">
                    {/* LEFT: huge count */}
                    <div className="col-span-12 md:col-span-3">
                      <div className="flex items-baseline gap-3">
                        <span
                          className="font-display font-black leading-none tracking-[-0.04em] text-ink"
                          style={{ fontSize: "clamp(4.5rem, 9vw, 8rem)" }}
                        >
                          08
                        </span>
                        <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink/55 whitespace-nowrap pb-2">
                          / projects
                        </span>
                      </div>
                    </div>

                    {/* CENTER: title + tease */}
                    <div className="col-span-12 md:col-span-6">
                      <h3
                        className="font-display leading-[1] tracking-[-0.025em]"
                        style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)" }}
                      >
                        <span className="font-extralight">The</span>{" "}
                        <span className="font-black">Archive</span>
                      </h3>
                      <p className="mt-3 text-[14.5px] leading-[1.55] text-ink/65 max-w-[44ch]">
                        Production AI SaaS, multi-tenant systems, fintech, automation
                        builds, and architecture engagements. Open to read each one in
                        full.
                      </p>

                      {/* tiny project list with accent dots */}
                      <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-1.5">
                        {projects.map((p) => (
                          <li
                            key={p.slug}
                            className="flex items-center gap-2 font-mono text-[11px] text-ink/55"
                          >
                            <span
                              className="inline-block w-1.5 h-1.5 rounded-full"
                              style={{ background: p.accent }}
                            />
                            <span className="truncate">{p.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* RIGHT: CTA + accent stack */}
                    <div className="col-span-12 md:col-span-3 flex flex-col gap-4 md:items-end">
                      {/* color accent stack — preview of all 8 accents */}
                      <div className="flex flex-col w-full md:w-[120px] border border-hairline">
                        {projects.map((p, i) => (
                          <span
                            key={p.slug}
                            className="block group-hover:translate-x-1 transition-transform"
                            style={{
                              background: p.accent,
                              height: "8px",
                              transitionDelay: `${i * 30}ms`,
                            }}
                          />
                        ))}
                      </div>

                      <span className="inline-flex items-center gap-2 bg-ink text-bone px-5 py-3 group-hover:bg-cacao transition-colors w-full md:w-auto justify-center">
                        <span className="font-mono text-xs">▶</span>
                        <span className="font-medium text-sm tracking-tight">
                          Open archive
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            </motion.div>
          ) : (
            /* OPENED — viewer with rail + editorial project card */
            <motion.div
              key="open"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease }}
              className="relative grid grid-cols-12 gap-x-6 md:gap-x-8 gap-y-6"
            >
              {/* LEFT rail */}
              <div className="col-span-12 md:col-span-3">
                <div className="flex items-center justify-between md:block mb-4">
                  <button
                    type="button"
                    onClick={() => setOpened(false)}
                    className="label text-ink/55 hover:text-sienna transition-colors inline-flex items-center gap-2"
                  >
                    <span className="font-mono">×</span> Close archive
                  </button>
                </div>
                <ul className="space-y-0">
                  {projects.map((p, i) => {
                    const isActive = i === active;
                    return (
                      <li key={p.slug}>
                        <button
                          type="button"
                          onClick={() => setActive(i)}
                          className={`group w-full text-left grid grid-cols-[40px_1fr_8px] items-baseline gap-3 py-3 border-b border-hairline transition-colors ${
                            isActive ? "text-ink" : "text-ink/55 hover:text-ink"
                          }`}
                        >
                          <span
                            className="font-mono text-[12px] tracking-[0.18em]"
                            style={{ color: isActive ? p.accent : undefined }}
                          >
                            {p.index}
                          </span>
                          <span className="font-display text-[17px] md:text-[19px] leading-tight font-medium tracking-tight">
                            {p.name}
                          </span>
                          <span
                            className="block w-1.5 h-1.5 rounded-full transition-colors"
                            style={{
                              background: isActive ? p.accent : "transparent",
                            }}
                          />
                        </button>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-6 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous project"
                    className="flex items-center justify-center w-9 h-9 border border-ink hover:bg-ink hover:text-bone transition-colors"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next project"
                    className="flex items-center justify-center w-9 h-9 border border-ink hover:bg-ink hover:text-bone transition-colors"
                  >
                    →
                  </button>
                  <span className="ml-2 label text-ink/45 tabular-nums">
                    {String(active + 1).padStart(2, "0")} /{" "}
                    {String(projects.length).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* CENTER: active project, editorial style */}
              <div className="col-span-12 md:col-span-9">
                <AnimatePresence mode="wait">
                  <motion.article
                    key={project.slug}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.4, ease }}
                    className="border border-hairline bg-bone overflow-hidden"
                  >
                    {/* Accent strip */}
                    <span
                      aria-hidden
                      className="block h-[3px] w-full"
                      style={{ background: project.accent }}
                    />

                    {/* TOP META */}
                    <div className="flex items-center justify-between px-6 md:px-9 py-3.5 border-b border-hairline">
                      <div className="flex items-center gap-3">
                        <span className="label text-ink/55">
                          {project.index}
                        </span>
                        <span
                          className="inline-block w-1.5 h-1.5 rounded-full"
                          style={{ background: project.accent }}
                        />
                        <span className="label text-ink/65">
                          {project.category}
                        </span>
                      </div>
                      <span className="label text-ink/35">
                        {project.published}
                      </span>
                    </div>

                    {/* EDITORIAL HEADER (replaces dark mockup) */}
                    <div className="relative px-6 md:px-9 pt-9 md:pt-12 pb-7 md:pb-10 border-b border-hairline">
                      {/* soft accent wash */}
                      <div
                        aria-hidden
                        className="absolute right-0 top-0 bottom-0 w-2/3 pointer-events-none opacity-[0.18]"
                        style={{
                          background: `radial-gradient(60% 80% at 100% 50%, ${project.accent}, transparent 70%)`,
                        }}
                      />

                      <div className="relative flex items-baseline gap-3 mb-3">
                        <span
                          className="font-mono text-[11px] tracking-[0.2em] uppercase"
                          style={{ color: project.accent }}
                        >
                          {project.accentLabel}
                        </span>
                        <span className="hidden md:inline-block flex-1 h-px bg-hairline" />
                        <span className="hidden md:inline font-mono text-[11px] text-ink/45">
                          {project.url ?? "client confidential"}
                        </span>
                      </div>

                      <h3
                        className="relative font-display font-black leading-[0.95] tracking-[-0.04em] text-ink"
                        style={{ fontSize: "clamp(2.2rem, 5.4vw, 4.6rem)" }}
                      >
                        {project.name}
                      </h3>

                      <p className="relative mt-3 font-display text-[20px] md:text-[24px] leading-tight tracking-tight italic font-extralight text-ink/75 max-w-[58ch]">
                        {project.tagline}
                      </p>
                    </div>

                    {/* BODY */}
                    <div className="grid grid-cols-12 gap-x-6 gap-y-6 px-6 md:px-9 py-8 md:py-10">
                      <div className="col-span-12 md:col-span-7">
                        <span className="label text-ink/55 mb-2 block">
                          The Problem
                        </span>
                        <p className="text-ink/80 text-[15.5px] leading-[1.6] max-w-[60ch]">
                          {project.problem}
                        </p>

                        <span className="label text-ink/55 mt-7 mb-3 block">
                          What I Built
                        </span>
                        <ul className="space-y-2 text-[14.5px] leading-[1.55] text-ink/80">
                          {project.highlights.slice(0, 5).map((h) => (
                            <li key={h} className="flex gap-3">
                              <span
                                className="font-mono text-[11px] mt-[5px]"
                                style={{ color: project.accent }}
                              >
                                →
                              </span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="col-span-12 md:col-span-5 md:pl-7 md:border-l border-hairline flex flex-col gap-6">
                        <div>
                          <span className="label text-ink/55 mb-2 block">
                            Role
                          </span>
                          <p className="text-[14.5px] leading-[1.5] text-ink/85 font-display italic font-light">
                            {project.role}
                          </p>
                        </div>

                        <div>
                          <span className="label text-ink/55 mb-2 block">
                            Stack
                          </span>
                          <div className="flex flex-wrap gap-x-2 gap-y-1">
                            {project.stack.slice(0, 10).map((s) => (
                              <span
                                key={s}
                                className="font-mono text-[11px] text-ink/65"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <span className="label text-ink/55 mb-2 block">
                            Results
                          </span>
                          <ul className="space-y-1.5 text-[13.5px] text-ink/80">
                            {project.results.slice(0, 4).map((r) => (
                              <li key={r} className="flex gap-2">
                                <span
                                  className="mt-[6px] inline-block w-1 h-1 rounded-full shrink-0"
                                  style={{ background: project.accent }}
                                />
                                <span>{r}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {project.url ? (
                          <a
                            href={`https://${project.url}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 self-start mt-1 label border border-ink px-3 py-1.5 hover:bg-ink hover:text-bone transition-colors"
                          >
                            Visit live <span aria-hidden>↗</span>
                          </a>
                        ) : (
                          <span className="label text-ink/45">
                            Client confidential · case study on request
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.article>
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
