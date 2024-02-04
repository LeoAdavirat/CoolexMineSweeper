/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        "dark-bar": "#192639",
        "dark-body": "#050d1a",
      },
      fontFamily: {
        jetbrain: ["JetBrains Mono", "monospace"],
        protestriot: ["Protest Riot", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
