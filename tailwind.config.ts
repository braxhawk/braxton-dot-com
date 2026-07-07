import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core palette
        black:   "#050505",
        smoke:   "#F2F4F3",
        slate:   "#6C809A",
        taupe:   "#837569",
        // Secondary
        olive:   "#657153",
        "olive-light": "#A0AF84",
        berry:   "#7B435B",
        // Accent
        blue:    "#276FBF",
        // Semantic aliases
        ink:     "#050505",
        paper:   "#F2F4F3",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans:    ["var(--font-sans)", "system-ui", "sans-serif"],
        mono:    ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        // Display scale
        "display-2xl": ["clamp(4rem, 12vw, 9rem)",   { lineHeight: "0.92", letterSpacing: "-0.04em" }],
        "display-xl":  ["clamp(3rem, 8vw, 6rem)",    { lineHeight: "0.94", letterSpacing: "-0.03em" }],
        "display-lg":  ["clamp(2rem, 5vw, 3.75rem)", { lineHeight: "1",    letterSpacing: "-0.025em" }],
        "display-md":  ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        // UI scale
        "ui-xl":   ["1.25rem",  { lineHeight: "1.4", letterSpacing: "-0.01em" }],
        "ui-lg":   ["1.125rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        "ui-base": ["1rem",     { lineHeight: "1.6", letterSpacing: "0" }],
        "ui-sm":   ["0.875rem", { lineHeight: "1.5", letterSpacing: "0" }],
        // Metadata scale (mono)
        "meta-sm": ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.08em" }],
        "meta-xs": ["0.625rem",  { lineHeight: "1.4", letterSpacing: "0.1em" }],
      },
      spacing: {
        // 8px base unit
        "2":  "0.5rem",   // 8px
        "3":  "0.75rem",  // 12px
        "4":  "1rem",     // 16px
        "6":  "1.5rem",   // 24px
        "8":  "2rem",     // 32px
        "10": "2.5rem",   // 40px
        "12": "3rem",     // 48px
        "16": "4rem",     // 64px
        "20": "5rem",     // 80px
        "24": "6rem",     // 96px
        "32": "8rem",     // 128px
        "40": "10rem",    // 160px
        "48": "12rem",    // 192px
      },
      borderRadius: {
        none: "0",
        sm:   "2px",
        DEFAULT: "4px",
        md:   "6px",
        lg:   "8px",
      },
      gridTemplateColumns: {
        "12": "repeat(12, minmax(0, 1fr))",
      },
      transitionTimingFunction: {
        "editorial": "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
      },
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) forwards",
        "fade-in": "fade-in 0.4s cubic-bezier(0.25, 0.1, 0.25, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
