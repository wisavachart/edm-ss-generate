/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ct_4: "#1A1A1A",
        ct_3: "#9E9E9E",
        ct_2: "#D9D9D9",
        ct_1: "#F6F7F8",
        cb_4: "#222939",
        cb_3: "#475569",
        cb_2: "#B4E7FF",
        cb_1: "#93A2B7",
        cs_4: "#0284C7",
        cs_3: "#75C5EC",
        cs_2: "#BAFAF1",
      },
    },
  },
  plugins: [],
};
