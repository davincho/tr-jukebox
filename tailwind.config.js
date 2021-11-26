const { elevations } = require("./tokens");

const boxShadow = {};

Object.keys(elevations).forEach((color) => {
  const options = elevations[color];

  Object.keys(options).forEach((option) => {
    boxShadow[`${color}-${option}`] = options[option];
  });
});

module.exports = {
  mode: "jit",
  purge: ["src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow,
    },
  },
  variants: {},
  plugins: [],
};
