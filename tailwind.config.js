/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Kumbh-Sans": ["Kumbh Sans", "sans-serif"],
      },
      boxShadow: {
        custom:
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
      },
      colors: {
        "Very-Dark-Blue": "hsl(220, 13%, 13%)",
        "Dark-Grayish-Blue": "hsl(219, 9%, 45%)",
        "Light-Grayish-blue": "hsl(220, 14%, 75%)",
        "Grayish-Blue": "hsl(223, 64%, 98%)",
        Orange: "hsl(26, 100%, 55%)",
        "Pale-Orange": " hsl(25, 100%, 94%)",
      },
      fill: {
        current: "currentColor",
      },
    },
  },
  plugins: [],
};
