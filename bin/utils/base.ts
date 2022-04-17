import { Config } from './../../@types/index.d';
import type { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import config from '../../webpack.config'

const DEFAULT_CONFIG = {
    title: '🌈 Nice title 🌈',
}

export const createBaseConfig = (
    configPath: string,
    mode: Exclude<Configuration['mode'], 'none'>
): Configuration => {
    const configProject = require(`${process.cwd()}/${configPath}`) as Config

    return ({
        ...config,
        mode,
        plugins: [
            new HtmlWebpackPlugin({
                templateContent: `
                <!DOCTYPE html>
                  <html lang="en-EN">
                    <head>
                      <meta charset="UTF-8" />
                      <title>${configProject.title || DEFAULT_CONFIG.title}</title>
                    </head>
                    <body>
                      <div id="root"></div>
                    </body>
                  </html>
              `
            })
        ],
    });
}

