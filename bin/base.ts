import type { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import config from '../webpack.config'

export const createBaseConfig = (
    configPath: string,
    mode: Exclude<Configuration['mode'], 'none'>
): Configuration => {
    return ({
        ...config,
        mode,
        plugins: [
            new HtmlWebpackPlugin({ template: './src/template.html' })
        ],
    });
}

