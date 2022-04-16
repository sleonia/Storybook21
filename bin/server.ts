import path from 'path'

import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import type { Configuration } from 'webpack-dev-server'

import { config } from './base'
import type { CommanderStartOptions } from './types'

/** Path where webpack find files after compile */
const VIRTUAL_DIR = path.join(process.cwd(), 'dist')

export const runServer = ({
    configPath,
    mode,
    port
}: CommanderStartOptions): void => {
    const compiler = webpack(config)

    const devServerOptions: Configuration = {
        static: {
            directory: VIRTUAL_DIR
        },
        hot: true,
        allowedHosts: 'localhost',
        port,
        client: {
            logging: 'error',
            progress: true
        }
    }

    const devServer = new WebpackDevServer(devServerOptions, compiler)

    devServer.startCallback(() => {
        console.log(`💥 Server listening on port ${port} 💥`)
    })
}
