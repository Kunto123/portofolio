export default {
  content: ["./src/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        abyss: {
          950: "#050505",
          900: "#0A0A0A",
          800: "#111111",
        },
        neon: "#FF003C",
        mist: "#EAEAEA",
        silver: "#A0A0A0",
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
        display: ["Space Grotesk", "Inter", "Segoe UI", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        neon: "0 0 0 1px rgba(255, 0, 60, 0.45), 0 0 28px rgba(255, 0, 60, 0.18)",
        neonSoft: "0 0 36px rgba(255, 0, 60, 0.14)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        breathe: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(255, 0, 60, 0.0)" },
          "50%": { boxShadow: "0 0 0 12px rgba(255, 0, 60, 0.14)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      animation: {
        floaty: "floaty 8s ease-in-out infinite",
        breathe: "breathe 3.8s ease-in-out infinite",
        shimmer: "shimmer 9s linear infinite",
      },
    },
  },
  plugins: [],
};