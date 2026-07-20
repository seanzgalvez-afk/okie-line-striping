import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        safety: "#ffd100",
        black: "#0a0a0a",
        dark: "#111111",
        panel: "#1a1a1a",
        border: "#2a2a2a",
        muted: "#555555",
      },
      fontFamily: {
        oswald: ["var(--font-oswald)", "Arial Narrow", "sans-serif"],
        dm: ["var(--font-dm)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
