
const path = require('path');
import type { Configuration } from 'webpack';
// import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';


const MONACO_DIR = path.resolve(__dirname, './node_modules/monaco-editor');

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
            // {
            //     test: /\.css$/,
            //     include: MONACO_DIR,
            //     use: ['style-loader', 'css-loader']
            // },
            // {
            //     test: /\.ttf$/,
            //     use: ['file-loader']
            // },
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
    },
    plugins: []
    // plugins: [new MonacoWebpackPlugin({ languages: ['javascript', 'typescript'] })]
}

export default config
