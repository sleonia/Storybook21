import webpack from 'webpack'
import { merge } from 'webpack-merge'
import WebpackNotifierPlugin from 'webpack-notifier'
import { ESBuildMinifyPlugin } from 'esbuild-loader'

import { createBaseConfig } from './utils/base'
import type { CommanderStartOptionsRequired } from './types'

export const runBuild = async ({
    configPath,
    mode
}: CommanderStartOptionsRequired): Promise<void> => {
    const baseConfig = await createBaseConfig(configPath, mode)
    process.env.NODE_ENV = 'production'

    baseConfig.plugins?.push(
        new WebpackNotifierPlugin({
            title: 'Ready 🦊',
            emoji: true
        })
    )

    const config = merge(
        baseConfig,
        {
            cache: false,
            devtool: 'hidden-source-map',

            stats: {
                chunks: false
            },
            optimization: {
                usedExports: true,
                moduleIds: 'named',
                minimizer: [
                    new ESBuildMinifyPlugin({
                        target: 'es2015',
                        minify: true,
                        minifyWhitespace: true,
                        minifyIdentifiers: true,
                        minifySyntax: true,
                        sourcemap: false
                    })
                ]
            }
        }
    )

    webpack(config, (error, stats) => {
        if (error) {
            throw error
        }

        /* comment: Show logs */
        /* eslint-disable-next-line no-console */
        console.log(`Output:\n${stats?.toString({ chunks: false }) || ''}`)
    })
}
