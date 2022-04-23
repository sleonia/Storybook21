import type { Configuration } from 'webpack';

import { DIST, ENTRY } from './constants'

const config: Configuration = {
    entry: [__dirname + ENTRY],
    output: {
        path: __dirname + `/${DIST}`
    },
    module: {
        rules: [
            {
                test: /\.m?js/,
                resolve: {
                    // https://webpack.js.org/configuration/module/#resolvefullyspecified
                    fullySpecified: false // disable the behaviour
                },
            },
            {
                test: /\.(js|jsx|tsx|ts)$/,
                use: [
                    {
                        loader: 'esbuild-loader',
                        options: {
                            loader: 'tsx',
                            target: 'es2015'
                        }
                    }
                ]
            },
            {
                test: /\.mdx?$/,
                use: [
                    {
                        loader: 'esbuild-loader',
                        options: {
                            loader: 'tsx',
                            target: 'es2015'
                        }
                    },
                    {
                        loader: '@mdx-js/loader'
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js', '.tsx', '.ts', '.css', '.json']
    }
}

export default config
