import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sokaina Kanwal · AI Engineer & Software Engineer",
  description:
    "I design and ship production AI systems for SaaS products. RAG, LLM integrations, agent workflows. The system around the model is more important than the model.",
  metadataBase: new URL("https://sokaina.dev"),
  openGraph: {
    title: "Sokaina Kanwal · AI Engineer & Software Engineer",
    description:
      "Production AI systems for SaaS. RAG, LLM integrations, agent workflows. Built for users, not demos.",
    type: "website",
  },
  authors: [{ name: "Sokaina Kanwal" }],
  keywords: [
    "AI Engineer",
    "LLM Integration",
    "RAG",
    "AI SaaS",
    "OpenAI",
    "Claude",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bone text-ink">
        {children}
      </body>
    </html>
  );
}
