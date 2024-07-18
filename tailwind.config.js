/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#328a8b",
        transparent: "transparent",
        blue: "#211C6A",
        carrot: "#e95143",
        musturd: "#d6b53f",
        current: "currentColor",
        bg: "#50C4ED",
        btnbg: "#35374B",
        cardbg: "#F6F5F5",
        mobilenavbg: "#0049FF",
      },
      animation: ["group-hover"],
    },
  },
  plugins: [],
};
