const Path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const serverConfig = {
    mode: 'development',
    target: 'node',
    entry: './src/server/index.js',
    output: {
        filename: 'bundle.js',
        path: Path.resolve(__dirname, 'build')
    }
}
module.exports = merge(baseConfig, serverConfig)