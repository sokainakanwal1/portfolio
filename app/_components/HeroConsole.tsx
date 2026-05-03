"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

/* ----------------------------- Data ----------------------------- */

type Node = {
  id: string;
  label: string;
  x: number;
  y: number;
  w: number;
  h: number;
  ghost?: boolean;
  detail: {
    title: string;
    sub: string;
    stats: { k: string; v: string }[];
  };
};

const W = 600;
const H = 320;

const nodes: Node[] = [
  {
    id: "user",
    label: "USER",
    x: 24,
    y: 142,
    w: 96,
    h: 44,
    detail: {
      title: "User request",
      sub: "Where every workflow begins. Stream in, structured out.",
      stats: [
        { k: "p99", v: "312ms" },
        { k: "stream", v: "on" },
      ],
    },
  },
  {
    id: "retriever",
    label: "RETRIEVER",
    x: 160,
    y: 76,
    w: 130,
    h: 50,
    detail: {
      title: "Retriever",
      sub: "pgvector + reranker. k=6, returns the chunks the model actually needs.",
      stats: [
        { k: "k", v: "6" },
        { k: "lookup", v: "38ms" },
      ],
    },
  },
  {
    id: "cache",
    label: "CACHE",
    x: 160,
    y: 200,
    w: 130,
    h: 50,
    ghost: true,
    detail: {
      title: "Semantic cache",
      sub: "Skips the model on near-identical requests. Quietly cuts the bill.",
      stats: [
        { k: "hit", v: "87%" },
        { k: "save", v: "$0.31/hr" },
      ],
    },
  },
  {
    id: "llm",
    label: "LLM",
    x: 320,
    y: 142,
    w: 116,
    h: 44,
    detail: {
      title: "LLM",
      sub: "gpt-4o or claude. Right tier per call. Retry budget bounded.",
      stats: [
        { k: "tier", v: "1" },
        { k: "retry", v: "2/3" },
      ],
    },
  },
  {
    id: "logger",
    label: "LOGGER",
    x: 466,
    y: 142,
    w: 110,
    h: 44,
    detail: {
      title: "Cost logger",
      sub: "Per-workflow cost, not just total. Tells you which feature is expensive.",
      stats: [
        { k: "cost", v: "$0.0042" },
        { k: "trace", v: "A91" },
      ],
    },
  },
];

type Edge = { from: string; to: string; d: string; delay: number };

const edges: Edge[] = [
  { from: "user", to: "retriever", d: "M 120 164 C 142 156, 145 110, 160 102", delay: 0 },
  { from: "user", to: "cache", d: "M 120 164 C 142 174, 145 222, 160 226", delay: 0.4 },
  { from: "retriever", to: "llm", d: "M 290 102 C 308 112, 318 138, 320 160", delay: 0.8 },
  { from: "cache", to: "llm", d: "M 290 226 C 308 218, 318 188, 320 168", delay: 1.0 },
  { from: "llm", to: "logger", d: "M 436 164 C 450 164, 456 164, 466 164", delay: 1.3 },
];

/* --------------------------- Components --------------------------- */

function FlowingDot({ d, delay, dim }: { d: string; delay: number; dim: boolean }) {
  return (
    <circle r={3} fill={dim ? "rgba(28,25,23,0.25)" : "#B5502E"}>
      <animateMotion dur="3.4s" repeatCount="indefinite" begin={`${delay}s`} path={d} />
      <animate
        attributeName="opacity"
        values="0;1;1;0"
        dur="3.4s"
        repeatCount="indefinite"
        begin={`${delay}s`}
      />
    </circle>
  );
}

function NodeBox({
  n,
  active,
  onEnter,
  onClick,
}: {
  n: Node;
  active: boolean;
  onEnter: () => void;
  onClick: () => void;
}) {
  return (
    <motion.g
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.18 + nodes.indexOf(n) * 0.05 }}
      onMouseEnter={onEnter}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <rect
        x={n.x}
        y={n.y}
        width={n.w}
        height={n.h}
        rx={3}
        fill="#F4EDE0"
        stroke={active ? "#B5502E" : "rgba(28,25,23,0.32)"}
        strokeWidth={active ? 1.6 : 1}
        strokeDasharray={n.ghost ? "3 3" : undefined}
      />
      {/* Pulse halo when active */}
      {active && (
        <rect
          x={n.x - 4}
          y={n.y - 4}
          width={n.w + 8}
          height={n.h + 8}
          rx={5}
          fill="none"
          stroke="#B5502E"
          strokeWidth={0.8}
          opacity={0.35}
        >
          <animate
            attributeName="opacity"
            values="0.35;0.05;0.35"
            dur="2.4s"
            repeatCount="indefinite"
          />
        </rect>
      )}
      <circle
        cx={n.x + 10}
        cy={n.y + n.h / 2}
        r={2.6}
        fill={active ? "#B5502E" : "rgba(28,25,23,0.45)"}
      />
      <text
        x={n.x + 22}
        y={n.y + n.h / 2 + 4}
        fontSize={10.5}
        fontFamily="JetBrains Mono, ui-monospace, monospace"
        letterSpacing={1.6}
        fill={active ? "#1C1917" : "rgba(28,25,23,0.7)"}
      >
        {n.label}
      </text>
    </motion.g>
  );
}

/* ------------------------------- Main ------------------------------- */

export default function HeroConsole() {
  const [hover, setHover] = useState<string | null>(null);
  const [pinned, setPinned] = useState<string>("retriever");
  const activeId = hover ?? pinned;
  const active = nodes.find((n) => n.id === activeId)!;

  // Idle auto-cycle (only when nothing pinned/hovered manually for a while)
  useEffect(() => {
    if (hover) return; // pause while user is hovering
    const order = ["retriever", "cache", "llm", "logger"];
    let i = order.indexOf(pinned);
    if (i === -1) i = 0;
    const id = setInterval(() => {
      i = (i + 1) % order.length;
      setPinned(order[i]);
    }, 3200);
    return () => clearInterval(id);
  }, [hover, pinned]);

  // edges connected to the active node
  const connectedEdges = new Set(
    edges
      .map((e, idx) => (e.from === activeId || e.to === activeId ? idx : -1))
      .filter((i) => i >= 0),
  );

  return (
    <div className="relative w-full">
      <div className="bg-bone-soft border border-hairline shadow-[0_30px_80px_-50px_rgba(28,25,23,0.45)] overflow-hidden">
        {/* Window chrome */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-hairline">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-sienna" />
            <span className="w-2.5 h-2.5 rounded-full bg-ochre" />
            <span className="w-2.5 h-2.5 rounded-full bg-ink/15" />
            <span className="ml-3 font-mono text-[10px] tracking-[0.16em] uppercase text-ink/55">
              call-graph.live
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/55">
            <span className="w-1.5 h-1.5 rounded-full bg-sienna animate-pulse" />
            live
          </span>
        </div>

        {/* Body — both columns locked to a stable height so hovering doesn't reflow */}
        <div className="grid grid-cols-12 items-stretch">
          {/* Graph */}
          <div
            className="col-span-12 md:col-span-8 relative bg-bone p-4 md:p-5 select-none"
            onMouseLeave={() => setHover(null)}
          >
            <div
              className="relative w-full"
              style={{ aspectRatio: `${W} / ${H}` }}
            >
              <div className="absolute inset-0 pointer-events-none opacity-50 dotgrid" />
              <svg
                viewBox={`0 0 ${W} ${H}`}
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMidYMid meet"
                role="img"
                aria-label="AI call graph"
              >
              {/* Edges */}
              {edges.map((e, idx) => {
                const lit = connectedEdges.has(idx);
                return (
                  <g key={idx}>
                    <motion.path
                      d={e.d}
                      fill="none"
                      stroke={lit ? "rgba(181,80,46,0.7)" : "rgba(28,25,23,0.22)"}
                      strokeWidth={lit ? 1.4 : 1}
                      strokeDasharray={lit ? undefined : "3 3"}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{
                        duration: 0.9,
                        delay: 0.2 + e.delay * 0.12,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                    <FlowingDot d={e.d} delay={e.delay} dim={!lit} />
                  </g>
                );
              })}

              {/* Nodes */}
              {nodes.map((n) => (
                <NodeBox
                  key={n.id}
                  n={n}
                  active={activeId === n.id}
                  onEnter={() => setHover(n.id)}
                  onClick={() => {
                    setPinned(n.id);
                    setHover(null);
                  }}
                />
              ))}
              </svg>
            </div>
          </div>

          {/* Detail panel — locked min-height so swapping nodes doesn't change row size */}
          <div className="col-span-12 md:col-span-4 border-t md:border-t-0 md:border-l border-hairline p-5 flex flex-col min-h-[260px]">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink/45">
                node
              </span>
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-sienna">
                {hover ? "hover" : "pinned"}
              </span>
            </div>

            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col"
            >
              <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink/55 mb-1">
                {active.label}
              </div>
              <div
                className="font-display font-black tracking-[-0.025em] leading-[1] text-ink truncate"
                style={{ fontSize: "clamp(1.3rem, 2.4vw, 1.75rem)" }}
              >
                {active.detail.title}
              </div>
              <p className="mt-3 text-[13px] leading-[1.5] text-ink/70 line-clamp-3 min-h-[58px]">
                {active.detail.sub}
              </p>

              <div className="mt-auto pt-5 grid grid-cols-2 gap-3">
                {active.detail.stats.map((s) => (
                  <div key={s.k} className="border-t border-hairline pt-2">
                    <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink/45">
                      {s.k}
                    </div>
                    <div className="font-display font-black text-[20px] tabular-nums tracking-tight leading-none mt-1">
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Status row, single line, minimal */}
        <div className="flex items-center justify-between px-4 py-2 border-t border-hairline bg-bone-soft">
          <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-ink/45">
            hover to inspect · click to pin
          </span>
          <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-ink/45">
            5 nodes · 5 edges
          </span>
        </div>
      </div>
    </div>
  );
}
