import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      keyframes: {
        "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        progress: { from: { transform: "scaleX(0)" }, to: { transform: "scaleX(1)" } },
        "ken-burns": { from: { transform: "scale(1.04)" }, to: { transform: "scale(1)" } },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out",
        "fade-in-up": "fade-in-up 0.3s ease-out",
        progress: "progress 7s linear forwards",
        "ken-burns": "ken-burns 7s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
