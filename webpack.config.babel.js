import path from 'path';
import webpack from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';
const packageJson = require('./package.json');

export default () => ({
  entry: {
    index: path.join(__dirname, 'src/index.js')
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    library: packageJson.name,
    libraryTarget: 'umd'
  },

  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [['es2015', { modules: false }], 'react', 'stage-0']
            }
          }
        ]
      }
    ]
  },

  plugins: [
    // Clean dist folder
    new CleanWebpackPlugin(['dist/*.*']),

    //CommonChunksPlugin will now extract all the common modules from vendor and main bundles
    //https://medium.com/@adamrackis/vendor-and-code-splitting-in-webpack-2-6376358f1923
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    })
  ]
});
