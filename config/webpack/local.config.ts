import webpack from 'webpack'
import merge from 'webpack-merge'

import { base } from './base.config'

export default merge(base, {
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.html$/,
          loader: 'raw-loader',
        },
      ],
    },
    devtool: 'inline-source-map',
    devServer: {
      port: 9000,
      hot: true,
      historyApiFallback: true
    }
  })