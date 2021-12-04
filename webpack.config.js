module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: `${__dirname}/dist`,
    filename: "main.js",
  },
  devServer: {
    static: {
      directory: `${__dirname}/dist`,
    },
    host: "localhost",
  },
  experiments: {
    topLevelAwait: true,
  },
  module: {
    rules: [],
  },
  resolve: {
    extensions: [".js"],
  },
};
