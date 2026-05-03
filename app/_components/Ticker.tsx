"use client";

const items = [
  "Open to remote roles · full-time or contract",
  "Production AI · RAG · Agents · Cost Audits",
  "Currently engineering at OptimaGeeks",
  "Based in Lahore · ready to relocate or stay remote",
  "5★ Upwork · 'Above and beyond expectations'",
  "AI Engineer · Software Engineer",
];

export default function Ticker() {
  return (
    <div className="relative bg-cacao text-bone overflow-hidden border-y border-hairline">
      <div className="flex whitespace-nowrap py-3 animate-ticker">
        {[...items, ...items, ...items].map((s, i) => (
          <span
            key={i}
            className="label text-bone/85 mx-8 inline-flex items-center"
          >
            <span className="mr-8 inline-block w-1.5 h-1.5 rounded-full bg-sienna" />
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
