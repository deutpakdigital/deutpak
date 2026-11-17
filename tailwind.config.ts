import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Logo colours, sampled from /images/logo.png. The marked shades are the exact logo values;
        // the rest are tints and shades of them. Sections use brand-700 / gold-400 as the main colours.
        brand: {
          50: "#edf5f0",
          100: "#d3e7da",
          200: "#a9cfb7",
          300: "#76ad8c",
          400: "#418561",
          500: "#256c48",
          600: "#165f41", // logo green, highlight
          700: "#0a4b29", // logo green ("PAK", "DP" mark)
          800: "#013821", // logo green, shadow
          900: "#012a19",
          950: "#001a0f",
        },
        gold: {
          50: "#fbf6ea",
          100: "#f6eacd",
          200: "#eed7a0",
          300: "#f8cb64", // logo gold, highlight
          400: "#d1a859", // logo gold ("DEUT")
          500: "#ba8e45",
          600: "#a37331", // logo gold, shadow
          700: "#85602a",
          800: "#6b4d24",
          900: "#57401f",
        },
      },
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
