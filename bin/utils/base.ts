import path from 'path'

import webpack from 'webpack'
import merge from 'webpack-merge'
import type { Configuration } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import type { Config } from '../../@types/index.d'
import config from '../../webpack.config'
import { ALIASES } from '../../constants'

import { generateDocumentation } from './generate-documentation'

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

    return merge<Configuration>({
        ...config,
        output: {
            ...config.output,
            path: __dirname + configProject.output
        },
        mode,
        resolve: {
            ...config.resolve,
            alias: {
                [ALIASES.library]: path.resolve(process.cwd(), configProject.entry || ''),
                [ALIASES.playground]: path.resolve(process.cwd(), configProject.playground || ''),
                cwd: path.resolve(process.cwd())
            }
        },
        plugins: [
            ...config.plugins || [],
            new webpack.DefinePlugin({
                WEBPACK_ALIAS_VERSION: JSON.stringify(configProject.version || DEFAULT_CONFIG.version),
                WEBPACK_ALIAS_NAVIGATION: JSON.stringify(configProject.navigation),
                WEBPACK_ALIAS_CWD: JSON.stringify(process.cwd()),
                WEBPACK_ALIAS_CWD_STORYBOOK: JSON.stringify(
                    path.resolve(process.cwd(), configProject.storybookContext || DEFAULT_CONFIG.storybookContext)
                ),
                WEBPACK_ALIAS_COMPONENTS_DOCUMENTATION: JSON.stringify(
                    generateDocumentation(configProject.componentsDir, configProject.navigation)
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
    }, configProject.webpackConfig || {}
    )
}
