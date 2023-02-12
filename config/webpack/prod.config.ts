import {CleanWebpackPlugin} from 'clean-webpack-plugin'
import merge from 'webpack-merge'

import {prodBase} from './base.config'

export default merge(prodBase, {
    plugins: [
        new CleanWebpackPlugin()
    ],
})
