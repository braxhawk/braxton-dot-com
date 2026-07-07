"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, fadeInUp, viewportConfig } from "@/lib/motion";
import { posts } from "@/data/posts";

const categoryLabel: Record<string, string> = {
  Engineering: "ENG",
  Music:       "DJ",
  Process:     "PROCESS",
  Culture:     "CULTURE",
};

const categoryColor: Record<string, string> = {
  Engineering: "text-slate",
  Music:       "text-olive",
  Process:     "text-taupe",
  Culture:     "text-berry",
};

export default function Writing() {
  const publishedPosts = posts.filter((p) => p.published);

  return (
    <section
      id="writing"
      className="bg-paper text-ink py-24 md:py-40"
      aria-label="Writing"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">

        {/* Section header */}
        <motion.div
          className="flex items-baseline gap-4 mb-16 md:mb-20"
          {...fadeInUp}
          viewport={viewportConfig}
        >
          <span className="section-index text-slate">05</span>
          <hr className="flex-1 border-t border-ink/10" />
          <span className="label-mono text-ink/30">[ <span className="text-blue">ENG</span> // <span className="text-olive">DJ</span> ] — WRITING</span>
        </motion.div>

        {/* 8 / 4 split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Left — description (4 cols) */}
          <motion.div
            className="lg:col-span-4"
            {...fadeInUp}
            viewport={viewportConfig}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="font-display text-display-md text-ink leading-snug italic mb-6">
              An archive of thoughts at the intersection of systems and sound.
            </p>
            <p className="text-ui-sm text-ink/55 font-light leading-relaxed mb-8">
              Not a blog. A collection of observations on engineering, curation,
              process, and the places where disciplines blur.
            </p>
            <Link
              href="/blog"
              className="label-mono text-ink/50 hover:text-ink link-underline transition-colors duration-400"
            >
              Full Archive →
            </Link>
          </motion.div>

          {/* Right — post list or coming soon (8 cols) */}
          <motion.div
            className="lg:col-span-7 lg:col-start-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
          >
            {publishedPosts.length > 0 ? (
              <>
                {publishedPosts.map((post) => (
                  <motion.article
                    key={post.id}
                    variants={staggerItem}
                    className="group"
                  >
                    <Link href={`/blog/${post.slug}`} className="block -mx-4 px-4 py-7 border-t border-ink/10 hover:bg-ink/[0.02] transition-colors duration-400">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex items-center gap-3">
                          <span className={`label-mono ${categoryColor[post.category]}`}>
                            [ {categoryLabel[post.category]} ]
                          </span>
                        </div>
                        <div className="flex items-center gap-4 shrink-0">
                          <span className="label-mono text-ink/25">{post.readTime}</span>
                          <span className="label-mono text-ink/25">{post.date}</span>
                        </div>
                      </div>

                      <h3 className="text-ui-xl text-ink font-medium tracking-tight mb-1 group-hover:text-ink/80 transition-colors duration-400">
                        {post.title}
                      </h3>
                      {post.subtitle && (
                        <p className="text-ui-sm text-ink/40 font-light mb-3">
                          {post.subtitle}
                        </p>
                      )}
                      <p className="text-ui-sm text-ink/55 font-light leading-relaxed max-w-lg">
                        {post.excerpt}
                      </p>

                      <div className="mt-4">
                        <span className="label-mono text-ink/30 group-hover:text-ink/60 transition-colors duration-400">
                          Read →
                        </span>
                      </div>
                    </Link>
                  </motion.article>
                ))}
                <div className="border-t border-ink/10" />
              </>
            ) : (
              <motion.div variants={staggerItem}>
                <div className="border-t border-ink/10 py-10">
                  <div className="flex items-start justify-between gap-4 mb-8">
                    <span className="label-mono text-ink/25">[ ARCHIVE ]</span>
                    <span className="label-mono text-ink/20">VOL. 01</span>
                  </div>
                  <p className="font-display text-display-sm text-ink/80 leading-snug italic mb-4">
                    Volume 01 — initializing.
                  </p>
                  <p className="text-ui-sm text-ink/40 font-light leading-relaxed max-w-sm mb-10">
                    Thoughts are forming. Writing is in progress. The archive opens soon.
                  </p>
                  <div className="flex items-center gap-6">
                    <div className="h-px flex-1 bg-ink/8" />
                    <span className="label-mono text-ink/20">EST. 2026</span>
                  </div>
                </div>
                <div className="border-t border-ink/10" />
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
