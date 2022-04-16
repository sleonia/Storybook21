import type { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const createConfig = () => {}

const config: Configuration = {
    mode: 'development',
    entry: ['./src/index.tsx'],
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                loader: 'esbuild-loader',
                options: {
                    loader: 'tsx',
                    target: 'es2015'
                }
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './bin/config/template.html' })
    ],
    resolve: {
        extensions: ['.jsx', '.js', '.tsx', '.ts', '.css', '.json'],
    }
}

export { config }
