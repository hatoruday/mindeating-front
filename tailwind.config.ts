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
        black1: "#2C2C30",
        black2: "#696972",
        black3: "#9F9FAC",
        black4: "#E7E7E7",
        green2: "#c1f1c1",
        green3: "#F5FEF5",
        textYellow: "#E1AE00",
        faceYellow: "#FFD031",
        yellow1: "#FFe27F",
        yellow2: "#FFF9E5",
        textRed: "#F05757",
        faceRed: "#FF748E",
        red1: "#FFC4CF",
        red2: "#FFE5EA",
        textBlue: "#009EE1",
        faceBlue: "#4DDBFA",
        blue1: "#7BDDF2",
        blue2: "#D8F5FB",
      },
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
