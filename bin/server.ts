import { DIST } from './../constants';
import { checkPort } from './check-port';
import path from 'path'

import webpack from 'webpack'
import WebpackNotifierPlugin from 'webpack-notifier'
import WebpackDevServer from 'webpack-dev-server'
import type { Configuration } from 'webpack-dev-server'

import { createBaseConfig } from './base'
import type { CommanderStartOptions } from './types'

/** Path where webpack find files after compile */
const VIRTUAL_DIR = path.join(process.cwd(), DIST)

export const runServer = async ({
    configPath,
    mode,
    port
}: CommanderStartOptions
): Promise<void> => {
    const freePort = await checkPort(port)
    const baseConfig = createBaseConfig(configPath, mode)

    const devServerOptions: Configuration = {
        static: {
            directory: VIRTUAL_DIR
        },
        hot: true,
        allowedHosts: 'localhost',
        port: freePort,
        client: {
            logging: 'error',
            progress: true
        },
        compress: true,
        watchFiles: ['src/**//\.(js|jsx|tsx|ts)$/']
    }

    const host = `http://${devServerOptions.allowedHosts}:${freePort}`

    baseConfig.plugins.push(
        /** Added plugin here because only here i know free port */
        new WebpackNotifierPlugin({
            title: `${host} 🦊`,
            emoji: true
        })
    )

    console.log(`💥 Server listening on ${host} 💥`)

    const compiler = webpack(baseConfig)
    new WebpackDevServer(devServerOptions, compiler).start()
}
