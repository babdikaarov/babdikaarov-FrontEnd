var path = require("path");

module.exports = {
  mode: "development",
  devServer: {
    allowedHosts: ["localhost"],
    compress: true,
    historyApiFallback: true,
    hot: true,
    port: 3000,
  },
  entry: "./src/index.js", // Update the entry point
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"), // Update the output path
    publicPath: "/", // Add publicPath to fix loading issues
  },
  module: {
    rules: [
      {
        test: /\.txt$/i,
        type: "asset/source",
      },
      {
        test: /\.png$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.ttf$/i,
        type: "asset/resource",
      },
    ],
  },
};
