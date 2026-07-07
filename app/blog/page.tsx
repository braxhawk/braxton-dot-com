import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Writing",
  description: "An archive of thoughts at the intersection of systems and sound.",
};

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

export default function BlogPage() {
  const publishedPosts = posts.filter((p) => p.published);

  return (
    <>
      <Nav />
      <main className="bg-paper text-ink min-h-svh">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 pt-32 pb-24 md:pb-40">

          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 md:mb-28">
            <div className="lg:col-span-7">
              <p className="label-mono text-ink/30 mb-6">[ ENG // DJ ] — WRITING</p>
              <h1 className="font-display text-display-xl text-ink leading-tight mb-6">
                Archive
              </h1>
              <p className="text-ui-base text-ink/55 font-light leading-relaxed max-w-md">
                Observations on engineering, curation, and the disciplines in
                between. Not a blog — a record.
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 flex items-end">
              <div>
                <p className="label-mono text-ink/25 mb-1">Total</p>
                <p className="font-display text-display-lg text-ink/20">
                  {publishedPosts.length > 0 ? publishedPosts.length : "—"}
                </p>
              </div>
            </div>
          </div>

          {/* Post list or coming soon */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 lg:col-start-3">
              {publishedPosts.length > 0 ? (
                <>
                  {publishedPosts.map((post) => (
                    <article key={post.id} className="group border-t border-ink/10">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="block -mx-4 px-4 py-8 hover:bg-ink/[0.02] transition-colors duration-400"
                      >
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <span className={`label-mono ${categoryColor[post.category]}`}>
                            [ {categoryLabel[post.category]} ]
                          </span>
                          <div className="flex items-center gap-4 shrink-0">
                            <span className="label-mono text-ink/25">{post.readTime}</span>
                            <span className="label-mono text-ink/25 hidden sm:inline">
                              {post.date}
                            </span>
                          </div>
                        </div>

                        <h2 className="text-ui-xl text-ink font-medium tracking-tight mb-1 group-hover:text-ink/75 transition-colors duration-400">
                          {post.title}
                        </h2>
                        {post.subtitle && (
                          <p className="text-ui-sm text-ink/40 font-light mb-3">
                            {post.subtitle}
                          </p>
                        )}
                        <p className="text-ui-sm text-ink/55 font-light leading-relaxed">
                          {post.excerpt}
                        </p>

                        <div className="mt-5">
                          <span className="label-mono text-ink/30 group-hover:text-ink/60 transition-colors duration-400">
                            Read →
                          </span>
                        </div>
                      </Link>
                    </article>
                  ))}
                  <div className="border-t border-ink/10" />
                </>
              ) : (
                <div className="border-t border-ink/10 pt-16 pb-24">
                  <div className="flex items-start justify-between gap-4 mb-12">
                    <span className="label-mono text-ink/25">[ ARCHIVE — INITIALIZING ]</span>
                    <span className="label-mono text-ink/20">VOL. 01</span>
                  </div>

                  <p className="font-display text-display-lg text-ink/75 leading-snug italic mb-6 max-w-lg">
                    Volume 01 is being written.
                  </p>
                  <p className="text-ui-base text-ink/40 font-light leading-relaxed max-w-md mb-16">
                    The archive is empty for now. Observations on engineering, curation,
                    and the disciplines in between are forming. Check back soon.
                  </p>

                  <div className="grid grid-cols-3 gap-px border border-ink/8 mb-16">
                    {(["ENG", "DJ", "PROCESS"] as const).map((label) => (
                      <div key={label} className="px-5 py-4 bg-paper">
                        <p className="label-mono text-ink/20 mb-2">[ {label} ]</p>
                        <p className="label-mono text-ink/12">— —</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="h-px flex-1 bg-ink/8" />
                    <span className="label-mono text-ink/20">EST. 2026</span>
                    <div className="h-px w-8 bg-ink/8" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
