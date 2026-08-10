import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: {
          50: "#FFFFFF",
          100: "#F8FAFD",
          200: "#F1F4FA",
          300: "#E6ECF5",
        },
        ink: {
          950: "#050914",
          900: "#0A0F1E",
          800: "#111A31",
          700: "#1B2748",
          600: "#2B375C",
          500: "#4C567A",
          400: "#6A748F",
          300: "#8E96AB",
          200: "#B7BCCB",
          100: "#DDE1EC",
        },
        rex: {
          deep: "#062066",
          navy: "#0E3AAB",
          blue: "#1E56E6",
          sky: "#4A8DFF",
          cyan: "#7BB6FF",
          ice: "#DFEBFF",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
        micro: "0.18em",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(14,58,171,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(14,58,171,0.06) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
        "beam-blue":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(30,86,230,0.20), transparent 60%)",
      },
      backgroundSize: {
        "grid-32": "32px 32px",
        "grid-56": "56px 56px",
      },
      animation: {
        marquee: "marquee 45s linear infinite",
        "spin-slow": "spin 24s linear infinite",
        "pulse-soft": "pulse-soft 4s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
