module.exports = {
  theme: {
    fontFamily: {
      hero: ["Pokemon Solid", "Helvetica"],
    },
  },
  content: ["./src/**/*.tsx", "./src/**/*.css"],
  plugins: [require("@tailwindcss/forms")],
};
