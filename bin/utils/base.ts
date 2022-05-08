import path from 'path'
import fs from 'fs'

import webpack from 'webpack'
import merge from 'webpack-merge'
import type { Configuration } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'

import type { Config } from '../../@types/index.d'
import config from '../../webpack.config'
import { ALIASES, DIST } from '../../constants'

import { generateDocumentation } from './generate-documentation'

const DEFAULT_CONFIG = {
    title: 'Nice title',
    version: '1.0.0',
    storybookContext: '/storybook'
}

const handleGlobalStyle = (globalStyle?: string): string => {
    let link = ''
    let filePath = ''

    if (globalStyle) {
        if (fs.existsSync(globalStyle)) {
            filePath = path.resolve(globalStyle)
        }
        link = filePath ? `/${path.basename(filePath)}` : globalStyle
    }

    if (filePath) {
        config.plugins?.push(
            new CopyPlugin({
                patterns: [{ from: filePath }]
            })
        )
    }

    return link
}

const handleFavicon = (): void => {
    config.plugins?.push(
        new CopyPlugin({
            patterns: [{ from: path.resolve(__dirname, '../assets/favicon.ico') }]
        })
    )
}

/* comment: complexity is in normal */
/* eslint-disable-next-line complexity */
export const createBaseConfig = async (
    configPath: string,
    mode: Exclude<Configuration['mode'], 'none'>
): Promise<Configuration> => {
    const { default: configProject } = await import(`${process.cwd()}/${configPath}`) as Record<'default', Config>

    const link = handleGlobalStyle(configProject.globalStyle)
    handleFavicon()

    return merge<Configuration>({
        ...config,
        output: {
            ...config.output,
            path: path.resolve(process.cwd(), configProject.output || DIST)
        },
        mode,
        resolve: {
            ...config.resolve,
            alias: {
                [ALIASES.library]: path.resolve(process.cwd(), configProject.entry || ''),
                [ALIASES.playground]: path.resolve(process.cwd(), configProject.playground || ''),
                cwd: path.resolve(process.cwd()),
                [ALIASES.libraryTheme]: path.resolve(process.cwd(), configProject.theme || '')
            }
        },
        plugins: [
            ...config.plugins || [],
            ...configProject.plugins || [],
            new webpack.DefinePlugin({
                WEBPACK_DEFINE_VERSION: JSON.stringify(configProject.version || DEFAULT_CONFIG.version),
                WEBPACK_DEFINE_NAVIGATION: JSON.stringify(configProject.navigation),
                WEBPACK_DEFINE_CWD: JSON.stringify(process.cwd()),
                WEBPACK_DEFINE_CWD_STORYBOOK: JSON.stringify(
                    path.resolve(process.cwd(), configProject.storybookContext || DEFAULT_CONFIG.storybookContext)
                ),
                WEBPACK_DEFINE_COMPONENTS_DOCUMENTATION: JSON.stringify(
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
                            ${link ? `<link href="${link}" rel="stylesheet">` : ''}
                            <link rel="icon" type="image/x-icon" href="/favicon.ico">
                        </head>
                        <body>
                            <div id="root"></div>
                        </body>
                  </html>
              `
            })
        ]
    }, configProject.webpackConfig || {})
}
