import { resolve } from 'path'

import webpack from 'webpack'
import { mergeWithCustomize, customizeObject } from 'webpack-merge'
import { DIST } from '../constants'

import { createBaseConfig } from './base'
import type { CommanderStartOptions } from './types'

export const runBuild = ({
    configPath,
    mode,
    port
}: CommanderStartOptions): void => {
    /** make dynamic reguire for load config file */
    const configProject = require(`${process.cwd()}/${configPath}`)
    const baseConfig = createBaseConfig(configPath, mode)

    process.env.NODE_ENV = 'production'
    const config = mergeWithCustomize({
        customizeObject: customizeObject({ 'output.path': 'replace' })
    })(
        baseConfig, {
        output: {
            path: resolve(process.cwd(), configProject.output || DIST)
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
