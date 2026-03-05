import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#FFFFFF",
        primary: "#F97316",
        text: "#1F2937",
        "sub-text": "#6B7280",
        border: "#E5E7EB",
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-jp)", "Inter", "sans-serif"],
      },
      maxWidth: {
        content: "768px",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#1F2937",
            "a": {
              color: "#F97316",
            },
            "h1, h2, h3, h4": {
              color: "#1F2937",
              fontWeight: "700",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
