/* ••[1]••••••••••••••••••••••••• tailwind.config.js •••••••••••••••••••••••••••••• */

/* eslint-disable @typescript-eslint/typedef */

/* eslint-disable @typescript-eslint/explicit-function-return-type */

const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  plugins: [],
  theme: {
    colors: {
      accent: "var(--accent)",
      divider: "var(--divider)",
      primary: "var(--primary)",
      slate: colors.slate,
      warn: "var(--warn)",
    },
    extend: {},
  },
};
