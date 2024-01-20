module.exports = {
  theme: {
    fontFamily: {
      hero: ["Pokemon Solid", "Helvetica"],
    },
    extend: {
      animation: {
        fade: "fadeOut 5s ease-in-out",
      },

      // that is actual animation
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { opacity: theme("colors.red.300") },
          "100%": { backgroundColor: theme("colors.transparent") },
        },
      }),
    },
  },
  content: ["./src/**/*.tsx", "./src/**/*.css"],
  plugins: [require("@tailwindcss/forms")],
};
