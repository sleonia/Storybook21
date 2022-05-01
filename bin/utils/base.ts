import path from 'path'

import webpack from 'webpack'
import type { Configuration } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import type { Config } from '../../@types/index.d'
import config from '../../webpack.config'
import { ALIASES } from '../../constants'

const DEFAULT_CONFIG = {
    title: '🌈 Nice title 🌈',
    version: '1.0.0',
    storybookContext: '/storybook'
}

export const createBaseConfig = async (
    configPath: string,
    mode: Exclude<Configuration['mode'], 'none'>
): Promise<Configuration> => {
    const { default: configProject } = await import(`${process.cwd()}/${configPath}`) as Record<'default', Config>

    return {
        ...config,
        mode,
        resolve: {
            ...config.resolve,
            alias: {
                // TODO раскоментить для проверок вне src
                // [ALIASES.library]: path.resolve(process.cwd(), configProject.entry || ''),
                [ALIASES.playground]: path.resolve(process.cwd(), configProject.playground || ''),
                cwd: path.resolve(process.cwd())
            }
        },
        plugins: [
            ...config.plugins || [],
            new webpack.DefinePlugin({
                'process.env.VERSION': JSON.stringify(configProject.version || DEFAULT_CONFIG.version),
                'process.env.NAVIGATION': JSON.stringify(configProject.navigation),
                'process.env.CWD': JSON.stringify(process.cwd()),
                'process.env.CWD_STORYBOOK': JSON.stringify(
                    path.resolve(process.cwd(), configProject.storybookContext || '/storybook')
                )
            }),
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
        ]
    }
}
