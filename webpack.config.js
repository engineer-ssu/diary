const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  mode: 'none',
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
  ],

  devServer: {
    static: path.resolve(__dirname, "dist"),
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 3000,
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    alias: {
      '@_pages': path.resolve(__dirname, './src/pages'),
      '@_types': path.resolve(__dirname, './src/types'),
      '@_stores': path.resolve(__dirname, './src/stores'),
      '@_utils': path.resolve(__dirname, './src/utils'),
      '@_apis': path.resolve(__dirname, './src/apis'),
      '@_models': path.resolve(__dirname, './src/models'),
      '@_queries': path.resolve(__dirname, './src/queries'),
      '@_common': path.resolve(__dirname, './src/common'),
    }
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};