const Path = require('path');
const nodeExternals = require('webpack-node-externals');
module.exports = {
    mode: 'development',
    target: 'node',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: Path.resolve(__dirname, 'build')
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules',
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', {
                            targets: {
                                browsers: ['last 2 versions']
                            }
                        }]
                    ]
                }
            }
        ]
    }
}