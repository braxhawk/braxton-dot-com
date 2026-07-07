"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, fadeInUp, viewportConfig } from "@/lib/motion";
import { projects, type ProjectStatus } from "@/data/projects";

const statusColor: Record<ProjectStatus, string> = {
  "Active":       "text-olive",
  "In Progress":  "text-slate",
  "Complete":     "text-smoke/40",
  "Archived":     "text-smoke/25",
  "Coming Soon":  "text-taupe",
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-black text-smoke py-24 md:py-40 overflow-hidden grid-lines"
      aria-label="Selected Work"
    >
      {/* Grain */}
      <div className="absolute inset-0 opacity-[0.025] mix-blend-overlay pointer-events-none" aria-hidden />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10">

        {/* Section header */}
        <motion.div
          className="flex items-baseline gap-4 mb-16 md:mb-20"
          {...fadeInUp}
          viewport={viewportConfig}
        >
          <span className="section-index text-slate">03</span>
          <hr className="flex-1 border-t border-smoke/10" />
          <span className="label-mono text-smoke/30">[ <span className="text-blue">ENG</span> ] — SELECTED WORK</span>
        </motion.div>

        {/* Project list */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={staggerItem}
              className="group border-t border-smoke/10 py-10 md:py-12 hover:bg-smoke/[0.02] transition-colors duration-600 -mx-4 px-4"
            >
              {/* Top row — meta */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <span className="label-mono text-smoke/25">{project.id}</span>
                  <span className="label-mono text-smoke/20">·</span>
                  <span className="label-mono text-smoke/25">{project.year}</span>
                </div>
                <span className={`label-mono ${statusColor[project.status]}`}>
                  [ {project.status.toUpperCase()} ]
                </span>
              </div>

              {/* Content grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

                {/* Title + description (8 cols) */}
                <div className="lg:col-span-8">
                  <h3 className="font-display text-display-lg text-smoke mb-4 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-ui-base text-smoke/55 font-light leading-relaxed max-w-xl">
                    {project.description}
                  </p>
                </div>

                {/* Stack + links (4 cols) */}
                <div className="lg:col-span-4 lg:col-start-9 flex flex-col justify-between">
                  <div>
                    <p className="label-mono text-smoke/25 mb-3">Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="label-mono text-smoke/45 border border-smoke/15 px-2.5 py-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-6">
                    <span className="label-mono text-smoke/25">{project.role}</span>
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="label-mono text-smoke/50 hover:text-smoke link-underline transition-colors duration-400"
                      >
                        REPO →
                      </a>
                    )}
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="label-mono text-smoke/50 hover:text-smoke link-underline transition-colors duration-400"
                      >
                        LIVE →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}

          {/* Closing rule */}
          <div className="border-t border-smoke/10" />
        </motion.div>

        {/* Footer note */}
        <motion.p
          className="mt-12 label-mono text-smoke/20"
          {...fadeInUp}
          viewport={viewportConfig}
        >
          [ More on GitHub ]
          <a
            href="https://github.com/braxhawk"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 text-smoke/40 hover:text-smoke/70 link-underline transition-colors duration-400"
          >
            github.com/braxhawk →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
