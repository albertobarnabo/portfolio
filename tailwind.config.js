/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // Every colour is a CSS variable so .theme-night / .theme-paper / .theme-flare
      // re-skin the same utilities. Opacity modifiers (bg-accent/10) don't work on
      // var() colours — use the explicit tokens (chip, glow) instead.
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        text: "var(--text)",
        muted: "var(--muted)",
        faint: "var(--faint)",
        accent: "var(--accent)",
        "accent-ink": "var(--accent-ink)",
        "accent-2": "var(--accent-2)",
        rule: "var(--border)",
        "rule-strong": "var(--border-strong)",
        chip: "var(--chip-bg)",
        bar: "var(--bar)",
      },
      fontFamily: {
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
        body: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        "display-1": ["clamp(3rem, 9vw, 7.5rem)", { lineHeight: "0.92", letterSpacing: "-0.04em", fontWeight: "600" }],
        "display-2": ["clamp(2.5rem, 5.2vw, 4.75rem)", { lineHeight: "0.95", letterSpacing: "-0.035em", fontWeight: "600" }],
        h2: ["clamp(1.9rem, 3.8vw, 3.1rem)", { lineHeight: "1.06", letterSpacing: "-0.03em", fontWeight: "600" }],
        h3: ["clamp(1.4rem, 2.2vw, 1.85rem)", { lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "700" }],
        lede: ["clamp(1.15rem, 1.6vw, 1.35rem)", { lineHeight: "1.45", letterSpacing: "-0.012em", fontWeight: "500" }],
        body: ["1.0625rem", { lineHeight: "1.6" }],
        small: ["0.9375rem", { lineHeight: "1.5" }],
        eyebrow: ["0.6875rem", { lineHeight: "1", letterSpacing: "0.12em", fontWeight: "500" }],
        data: ["0.8125rem", { lineHeight: "1.5" }],
      },
      borderRadius: { plate: "20px", card: "14px" },
      maxWidth: { site: "1200px", wide: "1360px", prose: "62ch" },
      transitionTimingFunction: { out: "cubic-bezier(0.22, 1, 0.36, 1)" },
    },
  },
  plugins: [],
};
