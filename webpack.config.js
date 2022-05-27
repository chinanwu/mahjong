"use strict";

const HtmlWebPackPlugin = require("html-webpack-plugin");
const EsLintPlugin = require("eslint-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const productionConfig = () => {
  const mode = "production";
  const devtool = "hidden-source-map";
  return { mode, devtool };
};

const devConfig = () => {
  const mode = "development";
  const devtool = "eval-cheap-module-source-map";
  return { mode, devtool };
};

module.exports = (env) => {
  const production = env.WEBPACK_SERVE;
  const plugins = [
    new EsLintPlugin({ failOnError: !production }),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
  ];

  if (production) {
    plugins.push(new MiniCssExtractPlugin());
  }

  const entry = ["./src/index.js"];

  const output = {
    filename: "scripts/[chunkhash:5].js",
  };

  const { mode, devtool } = production ? devConfig() : productionConfig();

  return {
    entry,
    output,
    target: ["web", "es2020"],
    plugins,
    mode,
    devtool,
    resolve: {
      alias: {
        react: "preact/compat",
        "react-dom": "preact/compat",
      },
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              presets: ["@babel/preset-env"],
            },
          },
        },
        {
          test: /\.less$/,
          use: [
            production ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
            "less-loader",
          ],
        },
        {
          test: /\.svg$/,
          use: ["html-loader"],
        },
      ],
    },
  };
};
