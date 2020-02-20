const path = require("path");

module.exports = {
  mode: "development",
  entry: "./floaty/index.ts",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.js"
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: "ts-loader"
    }]
  },
  resolve: {
    modules: [
      "node_modules"
    ],
    extensions: [
      ".ts",
      ".js"
    ]
  }
};

