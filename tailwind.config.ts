import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        fadeOutUp: {
          "0%": { Opacity: "1", transform: "translate(0%, 0%)" },
          "100%": { Opacity: "0", transform: "translate(0%, -500%)" },
        },
      },
      animation: {
        fadeOutUp: "fadeOutUp 4s forwards",
      },
    },
  },
  plugins: [],
};
export default config;
