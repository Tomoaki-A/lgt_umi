/**
 * @see https://github.com/egoist/tailwindcss-icons
 */
const {
  iconsPlugin,
  getIconCollections,
} = require("@egoist/tailwindcss-icons");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    /**
     * @see https://github.com/egoist/tailwindcss-icons
     */
    iconsPlugin({
      collections: getIconCollections(["ic"]),
    }),
  ],
};
