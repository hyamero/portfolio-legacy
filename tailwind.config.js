module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ylw: {
          100: "#EAD6BD",
          200: "#FDB140",
        },
        dark: "#141414",
        light: "#f0f0f0",
        sub: "#4D6A68",
      },

      fontFamily: {
        helvetica: ["helvetica"],
        sprat: ["sprat"],
        druk: ["druk"],
        raleway: ["Raleway, sans-serif"],
        kenoky: ["Kenoky"],
      },

      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
        xs: { max: "480px" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
