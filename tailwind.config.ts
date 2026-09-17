import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sunny: {
          50: "#fffbeb",
          100: "#fff3c4",
          200: "#ffe58a",
          300: "#ffd447",
          400: "#ffc21a",
          500: "#f7a800",
          600: "#d98a00",
          700: "#b06900",
        },
        coral: {
          50: "#fff1f0",
          100: "#ffe0dd",
          200: "#ffbcb5",
          300: "#ff8f83",
          400: "#ff6b57",
          500: "#f94d36",
          600: "#e8371f",
          700: "#c02a17",
        },
        skyplay: {
          50: "#eefbff",
          100: "#d7f4ff",
          200: "#aeeaff",
          300: "#74dbff",
          400: "#33c5f7",
          500: "#0aa8db",
          600: "#0885b3",
          700: "#0a6a8c",
        },
        leaf: {
          50: "#eefdf3",
          100: "#d5f9e1",
          200: "#aef1c6",
          300: "#72e3a3",
          400: "#3fce7e",
          500: "#1cb262",
          600: "#128f4f",
          700: "#107242",
        },
        ink: {
          900: "#1f2937",
        },
      },
      fontFamily: {
        heading: ["var(--font-baloo)", "system-ui", "sans-serif"],
        body: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(31, 41, 55, 0.15)",
      },
      borderRadius: {
        blob: "42% 58% 60% 40% / 45% 45% 55% 55%",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        wiggle: "wiggle 2.5s ease-in-out infinite",
        floaty: "floaty 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
