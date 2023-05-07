/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mescuro: "#654321",
        chocolate: "#5F4B32",
        ambar: "#FFA500",
        ambar_line: "#b5955a",
        bege: "#F5DEB3",
        canela: "#D2691E",
        marrom_escuro: "#542e09",
        marrom_medio: "#775527",
        marrom_escurot: "#422703",
      },
      width: {
        128: "32rem",
      },
      height: {
        128: "32rem",
      },
      fontSize: {
        17: ["17px", "26px"],
      },
    },
  },
  plugins: [],
};
