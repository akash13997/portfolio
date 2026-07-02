import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "hsl(var(--bg) / <alpha-value>)",
        surface: "hsl(var(--surface) / <alpha-value>)",
        "surface-2": "hsl(var(--surface-2) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        ink: "hsl(var(--ink) / <alpha-value>)",
        muted: "hsl(var(--muted) / <alpha-value>)",
        indigo: {
          DEFAULT: "#6366F1",
          light: "#818CF8"
        },
        blue: {
          DEFAULT: "#3B82F6",
          light: "#60A5FA"
        },
        violet: {
          DEFAULT: "#8B5CF6",
          light: "#A78BFA"
        },
        live: "#34D399"
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"]
      },
      backgroundImage: {
        "grid-fade": "radial-gradient(circle at 50% 0%, hsl(var(--grid-glow) / 0.35), transparent 60%)",
        "aurora": "linear-gradient(120deg, #6366F1 0%, #3B82F6 35%, #8B5CF6 70%, #6366F1 100%)"
      },
      keyframes: {
        aurora: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" }
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        aurora: "aurora 12s ease infinite",
        blink: "blink 1s step-start infinite",
        float: "float 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
