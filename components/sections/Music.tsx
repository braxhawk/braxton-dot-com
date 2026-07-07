"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, staggerItem, fadeInUp, viewportConfig } from "@/lib/motion";
import { mixes, weeklyNotes, playlists } from "@/data/music";
import SoundCloudPlayer from "@/components/SoundCloudPlayer";

export default function Music() {
  const latestNote = weeklyNotes[0];
  const [openMix, setOpenMix] = useState<string | null>(null);

  return (
    <section
      id="music"
      className="relative bg-black text-smoke py-24 md:py-40 overflow-hidden"
      aria-label="Music"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 39px,
            rgba(242,244,243,0.15) 39px,
            rgba(242,244,243,0.15) 40px
          )`,
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10">

        {/* Section header */}
        <motion.div
          className="flex items-baseline gap-4 mb-16 md:mb-20"
          {...fadeInUp}
          viewport={viewportConfig}
        >
          <span className="section-index text-slate">04</span>
          <hr className="flex-1 border-t border-smoke/10" />
          <span className="label-mono text-smoke/30">[ <span className="text-olive">DJ</span> ] — SOUNDS &amp; SETS</span>
        </motion.div>

        {/* 8 / 4 split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">

          {/* Left — Mixes (8 cols) */}
          <div className="lg:col-span-8">
            <motion.p
              className="label-mono text-smoke/30 mb-8"
              {...fadeInUp}
              viewport={viewportConfig}
            >
              Recorded Sets
            </motion.p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={viewportConfig}
            >
              {mixes.map((mix) => {
                const isOpen = openMix === mix.id;
                const isSoundCloud = mix.url?.includes("soundcloud.com");
                return (
                  <motion.article
                    key={mix.id}
                    variants={staggerItem}
                    className="group border-t border-smoke/10 py-7 -mx-4 px-4 hover:bg-smoke/[0.02] transition-colors duration-400"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-baseline">
                      {/* Index */}
                      <div className="sm:col-span-1">
                        <span className="label-mono text-smoke/20">{mix.index}</span>
                      </div>

                      {/* Title + subtitle */}
                      <div className="sm:col-span-7">
                        <h3 className="text-ui-lg text-smoke font-medium tracking-tight mb-0.5">
                          {mix.title}
                        </h3>
                        {mix.subtitle && (
                          <p className="text-ui-sm text-smoke/40 font-light italic">
                            {mix.subtitle}
                          </p>
                        )}
                      </div>

                      {/* Meta */}
                      <div className="sm:col-span-4 flex sm:flex-col sm:items-end gap-3 sm:gap-1">
                        <span className="label-mono text-smoke/30">{mix.date}</span>
                        <span className="label-mono text-smoke/20">{mix.duration}</span>
                        <span className="label-mono text-smoke/20 hidden sm:inline">{mix.genre}</span>
                      </div>
                    </div>

                    {/* Notes on hover */}
                    {mix.notes && (
                      <p className="mt-3 text-ui-sm text-smoke/35 font-light leading-relaxed max-w-lg opacity-0 group-hover:opacity-100 transition-opacity duration-400 sm:pl-[8.33%]">
                        {mix.notes}
                      </p>
                    )}

                    {mix.url && (
                      <div className="mt-4 sm:pl-[8.33%] flex items-center gap-6">
                        {isSoundCloud ? (
                          <button
                            onClick={() => setOpenMix(isOpen ? null : mix.id)}
                            className="label-mono text-olive/60 hover:text-olive link-underline transition-colors duration-400 cursor-pointer"
                          >
                            {isOpen ? "CLOSE ↑" : "PLAY →"}
                          </button>
                        ) : (
                          <a
                            href={mix.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="label-mono text-smoke/30 hover:text-smoke/70 link-underline transition-colors duration-400"
                          >
                            LISTEN →
                          </a>
                        )}
                      </div>
                    )}

                    <AnimatePresence>
                      {isOpen && isSoundCloud && mix.url && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                          className="overflow-hidden sm:pl-[8.33%]"
                        >
                          <SoundCloudPlayer url={mix.url} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.article>
                );
              })}
              <div className="border-t border-smoke/10" />
            </motion.div>
          </div>

          {/* Right — Weekly note (4 cols) */}
          <div className="lg:col-span-4">
            <motion.div
              {...fadeInUp}
              viewport={viewportConfig}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="border border-smoke/10 p-6 md:p-8">
                {/* Header */}
                <div className="flex items-baseline justify-between mb-6">
                  <p className="label-mono text-smoke/30">4 Songs This Week</p>
                  <span className="label-mono text-smoke/20">{latestNote.volume}</span>
                </div>

                <p className="text-ui-sm text-smoke/45 font-light italic leading-relaxed mb-8 border-b border-smoke/10 pb-8">
                  &ldquo;{latestNote.note}&rdquo;
                </p>

                {/* Track list */}
                <div className="space-y-6">
                  {latestNote.tracks.map((track, i) => (
                    <div key={i} className="flex gap-4">
                      <span className="label-mono text-smoke/20 shrink-0 mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-ui-sm text-smoke/80 font-medium leading-tight">
                          {track.title}
                        </p>
                        <p className="text-ui-sm text-smoke/40 font-light mt-0.5">
                          {track.artist}
                          {track.year && (
                            <span className="text-smoke/25 ml-2">· {track.year}</span>
                          )}
                        </p>
                        {track.note && (
                          <p className="text-meta-sm text-smoke/30 font-light mt-1 leading-relaxed">
                            {track.note}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-8 pt-6 border-t border-smoke/10 flex items-center justify-between">
                  <span className="label-mono text-smoke/20">{latestNote.date}</span>
                  <Link
                    href="/blog"
                    className="label-mono text-smoke/35 hover:text-smoke/70 link-underline transition-colors duration-400"
                  >
                    Archive →
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Playlists */}
        <motion.div
          className="mt-20 md:mt-28"
          {...fadeInUp}
          viewport={viewportConfig}
        >
          <p className="label-mono text-smoke/30 mb-8">Playlists</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px border border-smoke/10">
            {playlists.map((pl) => (
              <a
                key={pl.id}
                href={pl.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 border-smoke/10 hover:bg-smoke/[0.03] transition-colors duration-400"
              >
                <div className="flex items-baseline justify-between mb-3">
                  <span className="label-mono text-smoke/20">{pl.platform}</span>
                  <span className="label-mono text-smoke/15">{pl.trackCount} tracks</span>
                </div>
                <h4 className="text-ui-lg text-smoke font-medium tracking-tight mb-1 group-hover:text-smoke/80 transition-colors duration-400">
                  {pl.title}
                </h4>
                <p className="text-ui-sm text-smoke/35 font-light leading-relaxed">
                  {pl.description}
                </p>
                <span className="mt-4 block label-mono text-smoke/25 group-hover:text-smoke/60 transition-colors duration-400">
                  Open ↗
                </span>
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
