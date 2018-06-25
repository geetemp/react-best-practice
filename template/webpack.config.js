const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["babel-polyfill", "./src/tic-tac-toe"],

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "tic-tac-toe.js"
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, "src")],
        loader: "babel-loader"
      },
      // {
      //   test: /\.css?$/,
      //   use: ["style-loader", "css-loader"]
      // },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader?modules&localIdentName=[name]__[local]__[hash:base64:5]"
      }
      // {
      //   test: /\.css$/,
      //   use: [
      //     "style-loader",
      //     {
      //       loader: "css-loader",
      //       options: {
      //         modules: true,
      //         localIdentName: "[name]__[local]__[hash:base64:5]"
      //       }
      //     }
      //   ]
      // }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },

  resolve: {
    modules: ["node_modules", path.resolve(__dirname, "src")],
    extensions: [".js", ".json", ".jsx", ".css"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Tic Tac Toe",
      template: "index.html"
    })
  ]
};
