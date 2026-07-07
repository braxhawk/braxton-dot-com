"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Subtle parallax on scroll for the background rule lines
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const y = window.scrollY * 0.15;
      el.style.transform = `translateY(${y}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-svh bg-black overflow-hidden grid-lines flex flex-col"
      aria-label="Hero"
    >
      {/* Grain overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" aria-hidden />

      {/* Subtle horizontal rule lines — background structure */}
      <div
        ref={scrollRef}
        className="absolute inset-x-0 top-0 h-[200%] pointer-events-none"
        aria-hidden
      >
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full border-t border-smoke/[0.04]"
            style={{ top: `${8.33 * i}%` }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-between max-w-[1440px] mx-auto w-full px-6 md:px-10 pt-32 pb-12">

        {/* Top row — archive label */}
        <motion.div
          className="flex items-center justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="label-mono text-smoke/30">[ BH — ARCHIVE // VOL. I ]</span>
          <span className="label-mono text-smoke/25">2026</span>
        </motion.div>

        {/* Center — display name */}
        <motion.div
          className="my-auto"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <div className="overflow-hidden mb-2">
            <motion.h1
              className="font-display text-display-2xl text-smoke leading-none tracking-tight"
              variants={fadeUp}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              BRAXTON
            </motion.h1>
          </div>
          <div className="overflow-hidden flex items-baseline gap-6 md:gap-10">
            <motion.span
              className="font-display text-display-2xl text-smoke leading-none tracking-tight"
              variants={fadeUp}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              HAWKINS
            </motion.span>
            <motion.span
              className="sys-label text-smoke hidden sm:inline-block mb-2"
              variants={fadeUp}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              ENG // DJ
            </motion.span>
          </div>

          {/* Divider */}
          <motion.hr
            className="border-t border-smoke/15 mt-8 mb-8 md:w-3/4"
            variants={fadeUp}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          />

          {/* Descriptor row */}
          <motion.div
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-6"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div>
              <p className="text-ui-lg text-smoke/70 font-light">
                Software Engineer
              </p>
              <p className="text-ui-lg text-smoke/70 font-light">
                DJ · Curator
              </p>
            </div>

            <div className="text-right">
              <p className="font-display text-display-md text-smoke/40 italic">
                Systems &amp; Sound
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom row — scroll cue */}
        <motion.div
          className="flex items-center justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="label-mono text-smoke/25">
            [ CODE · CURATION · ARCHITECTURE · GROOVE ]
          </span>
          <ScrollCue />
        </motion.div>
      </div>
    </section>
  );
}

function ScrollCue() {
  return (
    <a
      href="#about"
      className="flex flex-col items-center gap-2 group"
      aria-label="Scroll to About"
    >
      <span className="label-mono text-smoke/25 group-hover:text-smoke/50 transition-colors duration-400">
        SCROLL
      </span>
      <span className="block w-px h-8 bg-smoke/20 group-hover:bg-smoke/40 transition-colors duration-400" />
    </a>
  );
}
