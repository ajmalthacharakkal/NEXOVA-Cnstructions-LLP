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
        background: "var(--background)",
        foreground: "var(--foreground)",
        nexova: {
          royal: "#2563EB", // Modern professional blue
          dark: "#1E293B", // Slate dark
          light: "#FFFFFF",
          gray: "#F8F9FA",
          lightgray: "#E9ECEF",
          accent: "#0EA5E9", // Sky blue accent
          secondary: "#64748B", // Slate secondary
          gradient: {
            start: "#1E40AF", // Deep blue
            middle: "#3B82F6", // Bright blue
            end: "#0EA5E9", // Sky blue
          }
        }
      },
    },
  },
  plugins: [],
};
export default config;
