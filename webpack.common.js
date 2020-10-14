const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, 'public/dist/'),
    filename: 'bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HardSourceWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, 'src'),
        use: [{
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        }, 'eslint-loader', 'stylelint-custom-processor-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|ico)$/i,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'file-loader',
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'svg-react-loader',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(woff|woff2|ttf)$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      '@library': path.resolve(__dirname, 'src/library/'),
      '@context': path.resolve(__dirname, 'src/context/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@types': path.resolve(__dirname, 'src/types/index.ts'),
      '@localizeComponent': path.resolve(__dirname, 'src/Localize/Localize.tsx'),
      '@localize': path.resolve(__dirname, 'src/commonLocalize.json'),
      '@helpers': path.resolve(__dirname, 'src/helpers/index.ts'),
      '@theme': path.resolve(__dirname, 'src/designSystemStore.ts'),
      '@mockedApi': path.resolve(__dirname, 'src/mockedApi/'),
    },
    modules: [path.resolve('node_modules')]
  }
};
