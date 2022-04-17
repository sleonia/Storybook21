import { DIST } from './../constants';
import { checkPort } from './utils/check-port';
import path from 'path'

import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import type { Configuration } from 'webpack-dev-server'

import { createBaseConfig } from './utils/base'
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

    console.log(`💥 Server listening on ${host} 💥`)

    const compiler = webpack(baseConfig)
    new WebpackDevServer(devServerOptions, compiler).start()
}
