import { resolve } from 'path'

import webpack from 'webpack'
import { mergeWithCustomize, customizeObject } from 'webpack-merge'
import WebpackNotifierPlugin from 'webpack-notifier'

import { DIST } from '../constants'

import { createBaseConfig } from './utils/base'
import type { CommanderStartOptions } from './types'

export const runBuild = async ({
    configPath,
    mode
}: CommanderStartOptions): Promise<void> => {
    const baseConfig = await createBaseConfig(configPath, mode)
    baseConfig.plugins.push(
        new WebpackNotifierPlugin({
            title: 'Ready 🦊',
            emoji: true
        })
    )

    process.env.NODE_ENV = 'production'
    const config = mergeWithCustomize({
        customizeObject: customizeObject({ 'output.path': 'replace' })
    })(
        baseConfig, {
            output: {
                path: resolve(process.cwd(), DIST)
            // TODO  билбидм туда, куда захотел пользователь
            // path: resolve(process.cwd(), configProject.output || DIST)
            },

            devtool: void 0,

            stats: {
                chunks: false
            }
        })

    webpack(config, (error, stats) => {
        if (error) {
            throw error
        }

        console.log(`Output:\n${stats.toString({ chunks: false })}`)
    })
}
