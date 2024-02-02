/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      color: {
        "dark-bar": "#0b1b28",
      },
      fontFamily: {
        mono: "JetBrainsMono",
      },
    },
  },
  plugins: [require("daisyui")],
};
