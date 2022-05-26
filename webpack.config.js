"use strict";

const HtmlWebPackPlugin = require("html-webpack-plugin");
const EsLintPlugin = require("eslint-webpack-plugin");

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
  const plugins = [
    new EsLintPlugin({ failOnError: !env.WEBPACK_SERVE }),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
  ];

  const entry = ["./src/index.js"];

  const output = {
    filename: "scripts/[chunkhash:5].js",
  };

  const { mode, devtool } = env.WEBPACK_SERVE
    ? productionConfig()
    : devConfig();

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
          use: ["style-loader", "postcss-loader", "less-loader"],
        },
      ],
    },
  };
};
