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
        pink_main: "#FE16D4",
        blue_dodger: "#1C89F6",
        mountain_main: "#8D8D8D",
        text_disable: "#98A2B3",
        white_opacity05: "rgba(255, 255, 255, 0.05)",
        white_opacity10: "rgba(255, 255, 255, 0.10)",
        dark_header: "rgba(243, 244, 246, 0.10)",
        text_secondary: "#4A5773",
        gray50: "#F9FAFB",
        gray200: "#E4E7EC",
        gray300: "#D0D5DD",
        gray500: "#667085",
        gray600: "#4B5563",
        gray900: "#111928",
        text_main900: "#0A0D14",
        text_soft400: "#868C98",
        text_sub500: "#525866",
      },
      boxShadow: {
        primary:
          "0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px 0px rgba(16, 24, 40, 0.06)",
        secondary: "0px 1px 1px 0px rgba(0, 0, 0, 0.07)",
      },
      margin: {
        62.5: "250px",
      },

      backgroundImage: {
        "gradient-primary":
          "linear-gradient(90deg, #4A5773 10.31%, #FB6BE3 47.87%, #725CF6 80.2%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
