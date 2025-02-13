/** @type {import('tailwindcss').Config} */

import { colors } from "./src/styles/colors";

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors,
      fontFamily: {
        inter: ["Inter_400Regular"],
        interBold: ["Inter_700Bold"]
      }
    }
  },
  plugins: []
};
