const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = {
  output: {
    publicPath: "http://localhost:8091/",
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8091,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "nav",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./Header": "./src/Header",
        "./Footer": "./src/Footer"
      },
      shared: {
        ...deps,
        "just-a-lib": {
          requiredVersion: ">=1.1.0 <3.0.0",
          singleton: true,
          strictVersion: true
        },      
        react: {
          eager:true,
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          eager:true,
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
