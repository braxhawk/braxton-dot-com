import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-smoke border-t border-smoke/10 py-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {/* Col 1 */}
          <div>
            <p className="label-mono text-smoke/25 mb-4">Navigation</p>
            <nav className="space-y-2" aria-label="Footer navigation">
              {["About", "Work", "Music", "Writing", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  className="block label-mono text-smoke/40 hover:text-smoke/70 transition-colors duration-400"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 2 */}
          <div>
            <p className="label-mono text-smoke/25 mb-4">Links</p>
            <nav className="space-y-2" aria-label="External links">
              {[
                { label: "GitHub",   href: "https://github.com/braxtonhawkins" },
                { label: "Twitter",  href: "https://twitter.com/braxtonhawkins" },
                { label: "LinkedIn", href: "https://linkedin.com/in/braxtonhawkins" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block label-mono text-smoke/40 hover:text-smoke/70 transition-colors duration-400"
                >
                  {label} ↗
                </a>
              ))}
            </nav>
          </div>

          {/* Col 3 */}
          <div>
            <p className="label-mono text-smoke/25 mb-4">Archive</p>
            <nav className="space-y-2" aria-label="Writing archive">
              <Link href="/blog" className="block label-mono text-smoke/40 hover:text-smoke/70 transition-colors duration-400">
                All Posts
              </Link>
              <Link href="/blog" className="block label-mono text-smoke/40 hover:text-smoke/70 transition-colors duration-400">
                Engineering
              </Link>
              <Link href="/blog" className="block label-mono text-smoke/40 hover:text-smoke/70 transition-colors duration-400">
                Music
              </Link>
            </nav>
          </div>

          {/* Col 4 — identity */}
          <div className="col-span-2 md:col-span-1">
            <p className="label-mono text-smoke/25 mb-4">Identity</p>
            <p className="label-mono text-smoke/40 mb-1">[ <span className="text-blue">ENG</span>{" // "}<span className="text-olive">DJ</span> ]</p>
            <p className="label-mono text-smoke/25">Systems &amp; Sound</p>
            <p className="label-mono text-smoke/20 mt-4">Vol. I — Ongoing</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-smoke/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="label-mono text-smoke/20">
            © {year} Braxton Hawkins — All rights reserved
          </p>
          <p className="label-mono text-smoke/15">
            BH — ARCHIVE / V01
          </p>
        </div>
      </div>
    </footer>
  );
}
