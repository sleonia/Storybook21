import { resolve } from 'path'

import webpack from 'webpack'
import { mergeWithCustomize, customizeObject } from 'webpack-merge'
import WebpackNotifierPlugin from 'webpack-notifier'

import { DIST } from '../constants'

import { createBaseConfig } from './utils/base'
import type { CommanderStartOptionsRequired } from './types'

export const runBuild = async ({
    configPath,
    mode
}: CommanderStartOptionsRequired): Promise<void> => {
    const baseConfig = await createBaseConfig(configPath, mode)
    baseConfig.plugins?.push(
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
                path: resolve(process.cwd(), baseConfig.output?.path || DIST)
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

        console.log(`Output:\n${stats?.toString({ chunks: false }) || ''}`)
    })
}
