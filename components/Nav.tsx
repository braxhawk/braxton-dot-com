"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about",      label: "About" },
  { href: "#work",       label: "Work" },
  { href: "#music",      label: "Music" },
  { href: "#writing",    label: "Writing" },
  { href: "#contact",    label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-600 ease-editorial",
          scrolled
            ? "bg-black/95 backdrop-blur-sm border-b border-smoke/10"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-[1440px] mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          {/* Wordmark */}
          <Link
            href="/"
            className="label-mono text-smoke/80 hover:text-smoke transition-colors duration-400"
            aria-label="Braxton Hawkins — Home"
          >
            BH
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="label-mono text-smoke/50 hover:text-smoke/90 transition-colors duration-400 link-underline"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu trigger */}
          <button
            className="md:hidden label-mono text-smoke/60 hover:text-smoke transition-colors duration-400"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? "CLOSE" : "MENU"}
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black flex flex-col justify-center px-6 transition-all duration-600 ease-editorial md:hidden",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-col gap-8" role="list">
          {navLinks.map(({ href, label }, i) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-display-xl text-smoke/90 hover:text-smoke block transition-colors duration-400"
                style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-16 label-mono text-smoke/25">
          [ ENG // DJ ] — Systems & Sound
        </div>
      </div>
    </>
  );
}
