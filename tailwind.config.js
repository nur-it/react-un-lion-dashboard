/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        62.5: "250px",
      },
      height: {
        18: "72px",
      },
      colors: {
        background: "#FFFFFF",
        foreground: "#000000",
        //
        primary_main: "#473BF0",
        secondary_main: "#101828",
        success: "#0CAF60",
        error: "#F23838",
        warning: "#E38604",
        light_bg: "#e6e9f0",
        dark_bg: "#070c22",
        dark_secondary: "#11162b",
        purple_main: "#FD27E0",
        blue_main: "#665CF3",
        blue_dodger: "#1C89F6",
        mountain_main: "#8D8D8D",
        text_disable: "#98A2B3",
        white_opacity05: "rgba(255, 255, 255, 0.05)",
        white_opacity10: "rgba(255, 255, 255, 0.10)",
      },
      boxShadow: {
        primary:
          "0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px 0px rgba(16, 24, 40, 0.06)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
