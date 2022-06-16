module.exports = {
  plugins: [
    require("cssnano")({
      preset: "default",
    }),
    require("postcss-url")({
      url: "inline",
    }),
  ],
};
