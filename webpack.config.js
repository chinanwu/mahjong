"use strict";

const HtmlWebPackPlugin = require("html-webpack-plugin");
const EsLintPlugin = require("eslint-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = (env) => {
  const isDev = env.WEBPACK_SERVE;

  const plugins = [
    new EsLintPlugin({ failOnError: !isDev }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ];

  let filename, assetModuleFilename, styleLoader, mode, devtool, optimization;

  if (isDev) {
    mode = "development";
    styleLoader = "style-loader";
    devtool = "eval-cheap-module-source-map";
    filename = "[name].js";
    assetModuleFilename = "assets/[name][ext]";
  } else {
    mode = "production";
    styleLoader = MiniCssExtractPlugin.loader;
    devtool = "hidden-source-map";
    filename = "scripts/[chunkhash:5].js";
    assetModuleFilename = "assets/[contenthash:5][ext]";
    optimization = {
      runtimeChunk: true,
      moduleIds: "deterministic",

      //performant for smaller codebases, but can be costly in larger ones
      removeAvailableModules: false,
      removeEmptyChunks: false,
      splitChunks: false,
      minimizer: [`...`, new CssMinimizerPlugin()],
    };
    plugins.push(new MiniCssExtractPlugin());
  }

  return {
    entry: ["./src/index.js"],
    output: {
      filename,
      assetModuleFilename,
      sourceMapFilename: "[file].map[query]",
      publicPath: isDev ? "/" : "/mahjong/",
    },
    target: ["web", "es2020"],
    mode,
    devtool,
    optimization,
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
          use: [styleLoader, "css-loader", "less-loader"],
        },
        {
          test: /\.(svg|tff)$/,
          type: "asset/resource",
        },
      ],
    },
    plugins,
    resolve: {
      alias: {
        react: "preact/compat",
        "react-dom": "preact/compat",
      },
    },
  };
};
