import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:           "#141414",
        surface:      "#1C1C1C",
        "surface-2":  "#222222",
        border:       "#2E2E2E",
        "border-soft":"#242424",
        gold:         "#C8B560",
        "gold-bright":"#D4C470",
        "gold-muted": "#7A6E3A",
        "gold-faint": "rgba(200,181,96,0.08)",
        text:         "#F0EBE0",
        "text-muted": "#7A7570",
        "text-dim":   "#4A4540",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body:    ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "11": "11px",
        "13": "13px",
        "16": "16px",
        "18": "18px",
        "24": "24px",
        "32": "32px",
        "48": "48px",
        "64": "64px",
        "88": "88px",
      },
      borderRadius: {
        none:    "0px",
        DEFAULT: "2px",
        sm:      "2px",
        md:      "2px",
        lg:      "4px",
        xl:      "4px",
        "2xl":   "4px",
        full:    "2px",
      },
      maxWidth: {
        content: "1200px",
      },
      keyframes: {
        "pulse-ring": {
          "0%":   { transform: "scale(1)", opacity: "0.4" },
          "100%": { transform: "scale(1.55)", opacity: "0" },
        },
        "fade-in-scale": {
          "0%":   { opacity: "0", transform: "scale(0.85)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "pulse-ring":    "pulse-ring 2.5s ease-out infinite",
        "fade-in-scale": "fade-in-scale 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards",
      },
    },
  },
  plugins: [],
};
export default config;
