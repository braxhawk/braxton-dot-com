"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, viewportConfig } from "@/lib/motion";

interface Role {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
}

const experience: Role[] = [
  {
    id: "EX-001",
    company: "IBM",
    role: "Full-stack Developer",
    period: "2021 — Present",
    location: "Durham, NC",
    type: "Full-time",
    description:
      "Developing and maintaining a portfolio of 20+ containerized applications supporting 500K+ internal and external users across systems that drive $7B in annual revenue. Working across modern and legacy stacks with a focus on modernization, reliability, and zero-downtime delivery.",
    highlights: [
      "Migrated authentication and authorization from SOAP to REST APIs using Java Spring Boot as part of a large-scale modernization effort",
      "Subject matter expert on auth and audit for IBM's quoting system — regularly involved in architectural decisions and code reviews",
      "Rewrote Jenkins deployment pipelines to migrate from Artifactory to IBM Cloud Container Registry using Docker and Kubernetes",
      "Documented end-to-end customer sign-up testing process; maintained zero revenue loss SLA under IBM's production incident standards",
      "Continuously building expertise in AI and Agentic AI systems",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="work"
      className="bg-paper text-ink py-24 md:py-40 border-t border-ink/10"
      aria-label="Experience"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">

        {/* Section header */}
        <motion.div
          className="flex items-baseline gap-4 mb-16 md:mb-20"
          {...fadeInUp}
          viewport={viewportConfig}
        >
          <span className="section-index text-slate">02</span>
          <hr className="flex-1 border-t border-ink/10" />
          <span className="label-mono text-ink/30">[ <span className="text-blue">ENG</span> ] — EXPERIENCE</span>
        </motion.div>

        {/* Experience list */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          className="space-y-0"
        >
          {experience.map((role, i) => (
            <motion.article
              key={role.id}
              variants={staggerItem}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 py-10 border-b border-ink/10 hover:bg-ink/[0.02] transition-colors duration-400 -mx-4 px-4"
            >
              {/* Left metadata (3 cols) */}
              <div className="lg:col-span-3">
                <p className="label-mono text-ink/30 mb-1">{role.id}</p>
                <p className="label-mono text-ink/50">{role.period}</p>
                <p className="label-mono text-ink/30 mt-1">{role.location}</p>
              </div>

              {/* Center content (6 cols) */}
              <div className="lg:col-span-6">
                <div className="mb-1">
                  <span className="label-mono text-ink/30 mr-3">{role.type.toUpperCase()}</span>
                </div>
                <h3 className="text-ui-lg text-ink font-medium mb-0.5">{role.role}</h3>
                <p className="text-ui-base text-blue/70 font-light mb-4">{role.company}</p>
                <p className="text-ui-sm text-ink/60 font-light leading-relaxed mb-4">
                  {role.description}
                </p>
                {role.highlights.length > 0 && (
                  <ul className="space-y-1.5">
                    {role.highlights.map((h, j) => (
                      <li key={j} className="text-ui-sm text-ink/50 font-light flex gap-3">
                        <span className="text-ink/25 mt-0.5 shrink-0">—</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Right — index (remaining cols) */}
              <div className="hidden lg:flex lg:col-span-3 justify-end items-start">
                <span className="section-index text-ink opacity-20 group-hover:opacity-40 transition-opacity duration-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
