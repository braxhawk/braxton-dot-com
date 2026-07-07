"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, viewportConfig } from "@/lib/motion";

const links = [
  { label: "Email",    href: "mailto:hello@braxtonhawkins.com", display: "hello@braxtonhawkins.com" },
  { label: "GitHub",   href: "https://github.com/braxhawk", display: "github.com/braxhawk" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/braxton-hawkins-084367171/", display: "linkedin.com/in/braxtonhawkins" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-paper text-ink py-24 md:py-40 border-t border-ink/10"
      aria-label="Contact"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">

        {/* Section header */}
        <motion.div
          className="flex items-baseline gap-4 mb-16 md:mb-24"
          {...fadeInUp}
          viewport={viewportConfig}
        >
          <span className="section-index text-ink">06</span>
          <hr className="flex-1 border-t border-ink/10" />
          <span className="label-mono text-ink/30">CONTACT</span>
        </motion.div>

        {/* 8 / 4 grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">

          {/* Left — heading + note */}
          <motion.div
            className="lg:col-span-7"
            {...fadeInUp}
            viewport={viewportConfig}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="font-display text-display-xl text-ink leading-tight mb-8">
              Let&apos;s build something<br />
              <span className="italic text-ink/50">worth keeping.</span>
            </h2>

            <p className="text-ui-base text-ink/60 font-light leading-relaxed max-w-md mb-10">
              Open to interesting engineering work, creative collaborations,
              and conversations about software, sound, or anything at the edges.
            </p>

            <a
              href="mailto:hello@braxtonhawkins.com"
              className="inline-block label-mono text-ink border border-ink/20 px-6 py-3 hover:bg-ink hover:text-smoke transition-all duration-400"
            >
              GET IN TOUCH →
            </a>
          </motion.div>

          {/* Right — links */}
          <motion.div
            className="lg:col-span-4 lg:col-start-9"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
          >
            <p className="label-mono text-ink/35 mb-6">Find me at</p>
            <div className="space-y-0">
              {links.map(({ label, href, display }) => (
                <motion.div
                  key={label}
                  variants={staggerItem}
                  className="border-t border-ink/10 py-5 flex items-baseline justify-between group"
                >
                  <span className="label-mono text-ink/30">{label}</span>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-ui-sm text-ink/60 font-light hover:text-ink link-underline transition-colors duration-400"
                  >
                    {display}
                  </a>
                </motion.div>
              ))}
              <div className="border-t border-ink/10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
