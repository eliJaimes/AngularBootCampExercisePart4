/* ••[1]••••••••••••••••••••••••• tailwind.config.js •••••••••••••••••••••••••••••• */

/* eslint-disable @typescript-eslint/typedef */

/* eslint-disable @typescript-eslint/explicit-function-return-type */

const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  plugins: [
    plugin(function ({ _addBase, addComponents, _addUtilities, theme }) {
      addComponents({
        ".legend": {
          color: theme("colors.accent"),
          fontSize: theme("fontSize.base"),
          fontWeight: theme("fontWeight.semibold"),
          paddingLeft: theme("spacing.2"),
          paddingRight: theme("spacing.2"),
          textTransform: "uppercase",
        },
      });
    }),
  ],
  theme: {
    colors: {
      accent: "var(--accent)",
      "color-invert": "var(--color-invert)",
      divider: "var(--divider)",
      primary: "var(--primary)",
      slate: colors.slate,
      warn: "var(--warn)",
    },
    extend: {},
  },
};
