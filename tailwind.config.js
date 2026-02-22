/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"SF Mono"', '"Fira Mono"', 'monospace'],
      },
      colors: {
        canvas: "#060810",
        layer: "#0a0e1a",
        accent: {
          blue:   "#5b8ef0",
          violet: "#9b6ff0",
          teal:   "#3ecfa4",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "fade-up":     "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in":     "fade-in 0.9s ease both",
        "pulse-glow":  "pulse-glow 6s ease-in-out infinite",
        aurora:        "aurora 18s ease infinite",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(28px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        "pulse-glow": {
          "0%,100%": { opacity: "0.4", transform: "scale(1)" },
          "50%":     { opacity: "0.7", transform: "scale(1.08)" },
        },
        aurora: {
          "0%":   { backgroundPosition: "0% 50%" },
          "50%":  { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [],
};
