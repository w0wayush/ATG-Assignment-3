/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1200px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: (theme) => ({
        pattern:
          "url('https://i.pinimg.com/564x/5c/e7/eb/5ce7eb8880fbd424397323747d477fbb.jpg')",
      }),
    },
  },
  plugins: [],
};
