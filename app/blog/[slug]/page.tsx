import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { posts } from "@/data/posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts
    .filter((p) => p.published)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

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

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug && p.published);
  if (!post) notFound();

  return (
    <>
      <Nav />
      <main className="bg-paper text-ink min-h-svh">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 pt-32 pb-24 md:pb-40">

          {/* Back */}
          <div className="mb-16">
            <Link
              href="/blog"
              className="label-mono text-ink/30 hover:text-ink/60 link-underline transition-colors duration-400"
            >
              ← Archive
            </Link>
          </div>

          {/* Article header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-20">
            <div className="lg:col-span-8 lg:col-start-3">
              <div className="flex items-center gap-4 mb-6">
                <span className={`label-mono ${categoryColor[post.category]}`}>
                  [ {categoryLabel[post.category]} ]
                </span>
                <span className="label-mono text-ink/25">{post.readTime}</span>
              </div>

              <h1 className="font-display text-display-xl text-ink leading-tight mb-4">
                {post.title}
              </h1>
              {post.subtitle && (
                <p className="text-ui-lg text-ink/50 font-light italic mb-6">
                  {post.subtitle}
                </p>
              )}

              <div className="flex items-center gap-6 pt-6 border-t border-ink/10">
                <span className="label-mono text-ink/35">Braxton Hawkins</span>
                <span className="label-mono text-ink/20">·</span>
                <span className="label-mono text-ink/35">{post.date}</span>
              </div>
            </div>
          </div>

          {/* Article body — placeholder */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 lg:col-start-3">
              <div className="prose-content">
                <p className="text-ui-base text-ink/70 font-light leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                {/* Content placeholder */}
                <div className="space-y-6 text-ui-base text-ink/65 font-light leading-relaxed">
                  <p>
                    Full post content goes here. This file is a scaffold — connect your
                    preferred MDX or CMS solution to populate the body. The data model
                    in <code className="font-mono text-sm text-ink/50 bg-ink/[0.05] px-1.5 py-0.5">/data/posts.ts</code> can
                    be extended with a <code className="font-mono text-sm text-ink/50 bg-ink/[0.05] px-1.5 py-0.5">content</code> field
                    or wired to a headless CMS like Sanity, Contentlayer, or raw MDX files.
                  </p>
                  <p>
                    The design system here uses the same editorial language as the rest
                    of the site — Playfair Display for display text, DM Sans for body,
                    JetBrains Mono for metadata and code.
                  </p>
                </div>
              </div>

              {/* Back to archive */}
              <div className="mt-20 pt-8 border-t border-ink/10">
                <Link
                  href="/blog"
                  className="label-mono text-ink/40 hover:text-ink/70 link-underline transition-colors duration-400"
                >
                  ← Back to Archive
                </Link>
              </div>
            </div>

            {/* Sidebar — post meta */}
            <aside className="lg:col-span-2 lg:col-start-11">
              <div className="space-y-8 pt-2">
                <div>
                  <p className="label-mono text-ink/25 mb-2">Category</p>
                  <p className={`label-mono ${categoryColor[post.category]}`}>
                    {categoryLabel[post.category]}
                  </p>
                </div>
                <div>
                  <p className="label-mono text-ink/25 mb-2">Read time</p>
                  <p className="label-mono text-ink/45">{post.readTime}</p>
                </div>
                <div>
                  <p className="label-mono text-ink/25 mb-2">Published</p>
                  <p className="label-mono text-ink/45">{post.date}</p>
                </div>
                <div>
                  <p className="label-mono text-ink/25 mb-2">ID</p>
                  <p className="label-mono text-ink/30">{post.id}</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
