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
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
