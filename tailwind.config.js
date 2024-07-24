/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ghostwhite: {
          100: "#f9f9ff",
          200: "#f7f3fd",
        },
        "grayscale-white": "#fff",
        silver: {
          100: "#bfbfbf",
          200: "#babac9",
        },
        lavender: "#f7ecff",
        "corporate-purple": "#9d3fe7",
        whitesmoke: {
          100: "#f5f5f5",
          200: "#eee",
          300: "#eaeaea",
        },
        black: "#000",
        "light-secondary": "#6c757d",

        mediumslateblue: {
          100: "#ab72ff",
          200: "#925fe2",
        },
        "light-secondary1": "#666",

        seashell: "#fff5f0",
        gray: {
          100: "#8a8a8a",
          200: "#1c1c1c",
          300: "rgba(255, 255, 255, 0.55)",
        },
        "light-primary": "#333",
        coral: "#ff7e3e",
        honeydew: "#f0fff3",
        limegreen: "#16d03b",
        lavenderblush: "#fff0f7",
        deeppink: "#ff1d86",
        lightsteelblue: "#c5c5e4",
        black: "#000",
        mediumpurple: "rgba(156, 111, 228, 0.3)",
        indianred: "#e55858",
        "neutral-colors-headings-black": "#5d5a88",
        "neutral-colors-color-400": "#f2f1fa",
        lightslategray: "#8e8ba7",
        crimson: "#fb5660",
        "neutral-colors-color-600": "#d4d2e3",
        "neutral-colors-text-gray": "#9795b5",
        "neutral-colors-color-800": "#adabc3",
        gainsboro: "#e6e6e6",
        silver: "#babac9",
        "neutral-colors-color-500": "#e7e6f2",
      },
      spacing: {},
      fontFamily: {
        "base-body": "Poppins",
        pretendard: "Pretendard",
        ubuntu: "Ubuntu",

        inter: "Inter",
        "open-sans": "'Open Sans'",
        pretendard: "Pretendard",
        poppins: "Poppins",
        ubuntu: "Ubuntu",
        "text-single-200-bold": "'DM Sans'",
        onest: "Onest",
      },
      borderRadius: {
        xl: "20px",

        "11xl": "30px",
        "31xl": "50px",
        xl: "20px",
        "3xs": "10px",
        "3xs-6": "9.6px",
        "6xl": "25px",
        "21xl": "40px",
        "77xl": "96px",
        "17xl-6": "36.6px",
      },
    },
    fontSize: {
      lg: "18px",
      xl: "20px",
      base: "16px",
      sm: "14px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      "3xl-7": "22.7px",

      "base-5": "16.5px",
      "3xs": "10px",
      mini: "15px",
      "6xl": "25px",
      xl: "20px",
      base: "16px",
      sm: "14px",
      lg: "18px",
      "7xl": "26px",
      "base-6": "15.6px",
      "3xl-7": "22.7px",
      "17xl": "36px",
      "3xl": "22px",
      "10xl": "29px",
      "25xl": "44px",
      "16xl": "35px",
      "9xl": "28px",
      inherit: "inherit",
    },
    screens: {
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },

      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",

      },
      mq800: {
        raw: "screen and (max-width: 800px)",

      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
