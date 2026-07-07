"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/motion";

const skills = [
  { label: "Languages",    items: ["Java", "TypeScript", "Rust", "Python", "SQL"] },
  { label: "Frontend",     items: ["React", "Next.js", "Vue", "Framer Motion", "Tailwind"] },
  { label: "Backend",      items: ["Node.js", "PostgreSQL", "Redis", "REST / GraphQL"] },
  { label: "Tooling",      items: ["Docker", "CI/CD", "Vercel", "MongoDB"] },
];

const facts = [
  { label: "Status",    value: "Available for select work" },
  { label: "Base",      value: "Raleigh, NC" },
  { label: "Domain",    value: "[ ENG // DJ ]" },
  { label: "Vol.",      value: "I — Ongoing" },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-paper text-ink py-24 md:py-40"
      aria-label="About"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">

        {/* Section header */}
        <motion.div
          className="flex items-baseline gap-4 mb-16 md:mb-24"
          {...fadeInUp}
          viewport={viewportConfig}
        >
          <span className="section-index text-ink">01</span>
          <hr className="flex-1 border-t border-ink/10" />
          <span className="label-mono text-ink/30">ABOUT</span>
        </motion.div>

        {/* 8 / 4 asymmetric grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">

          {/* Left — bio (8 cols) */}
          <motion.div
            className="lg:col-span-7"
            {...fadeInUp}
            viewport={viewportConfig}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="font-display text-display-md text-ink leading-snug mb-8 text-balance">
              I build software for clarity, and I DJ for feeling — two practices
              that share more than it seems.
            </p>

            <div className="space-y-5 text-ui-base text-ink/70 font-light leading-relaxed max-w-prose">
              <p>
                By day I engineer systems — designing APIs, wrestling data pipelines,
                building tools that reduce friction and surface meaning. I care about
                systems that are simple at the edges and honest about their complexity
                in the middle.
              </p>
              <p>
                By night I build crates. I&apos;ve been DJing long enough that it stopped
                being a hobby and started being a lens. The same instincts I bring to
                software — restraint, structure, knowing when to add and when to
                subtract — show up behind the decks.
              </p>
              <p>
                I write about both. Not as separate threads but as a single ongoing
                inquiry into what it means to make things that feel inevitable.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-8">
              {skills.map(({ label, items }) => (
                <div key={label}>
                  <p className="label-mono text-ink/35 mb-3">{label}</p>
                  <ul className="space-y-1">
                    {items.map((item) => (
                      <li key={item} className="text-ui-sm text-ink/60 font-light">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — facts / status (4 cols) */}
          <motion.div
            className="lg:col-span-5 lg:col-start-9"
            {...fadeInUp}
            viewport={viewportConfig}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Quick facts */}
            <div className="border-t border-ink/10 pt-8">
              {facts.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex justify-between items-baseline py-4 border-b border-ink/10"
                >
                  <span className="label-mono text-ink/35">{label}</span>
                  <span className="text-ui-sm text-ink/70 font-mono text-right max-w-[60%]">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* Currently reading / listening */}
            <div className="mt-12">
              <p className="label-mono text-ink/35 mb-6">Currently</p>
              <div className="space-y-6">
                <div>
                  <p className="label-mono text-ink/25 mb-1">[ BUILDING ]</p>
                  <p className="text-ui-sm text-ink/70 font-light">
                    Archival — a DJs personal toolkit
                  </p>
                </div>
                <div>
                  <p className="label-mono text-ink/25 mb-1">[ LISTENING ]</p>
                  <p className="text-ui-sm text-ink/70 font-light">
                    Cole Knight · Brunello · Derrick Carter
                  </p>
                </div>
                <div>
                  <p className="label-mono text-ink/25 mb-1">[ READING ]</p>
                  <p className="text-ui-sm text-ink/70 font-light">
                    &ldquo;SPEAK&rdquo; — Tunde Oyeneyin
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
