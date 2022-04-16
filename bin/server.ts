import { checkPort } from './check-port';
import path from 'path'

import webpack from 'webpack'
import WebpackNotifierPlugin from 'webpack-notifier'
import WebpackDevServer from 'webpack-dev-server'
import type { Configuration } from 'webpack-dev-server'

import { baseConfig } from './base'
import type { CommanderStartOptions } from './types'

/** Path where webpack find files after compile */
const VIRTUAL_DIR = path.join(process.cwd(), 'dist')

export const runServer = async ({
    configPath,
    mode,
    port
}: CommanderStartOptions
): Promise<void> => {
    const freePort = await checkPort(port)

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

    baseConfig.plugins.push(
        /** Added plugin here because only here i know free port */
        new WebpackNotifierPlugin({ title: `http://${devServerOptions.host}:${freePort} 🥳`, emoji: true })
    )

    const compiler = webpack(baseConfig)

    console.log(`💥 Server listening on port ${freePort} 💥`)
    const devServer = new WebpackDevServer(devServerOptions, compiler)

    devServer.start()
}
