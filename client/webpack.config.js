
const { resolve } = require( 'path' )
const nodeExternals = require('webpack-node-externals');
module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'main.js',
        path: resolve( __dirname, 'dist' )
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.js' ]
    },
    target: 'web',
    mode: 'production',
    devServer: {
        static: {
          directory: resolve(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
    },
}