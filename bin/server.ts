import path from 'path'

import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import type { Configuration } from 'webpack-dev-server'
import program from 'commander'

process.env.NODE_ENV = 'development'

import { config } from './base'

export const runServer = (): void => {
    const compiler = webpack(config)
    // program.option('--port [type]', 'Port').parse(process.argv)

    const devPort = 8080
    // const devPort = program.opts().port || 8080

    const devServerOptions: Configuration = {
        static: {
            directory: path.join(process.cwd(), 'dist')
        },
        hot: true,
        allowedHosts: 'localhost',
        port: devPort,
        client: {
            logging: 'error'
        }
    }

    const devServer = new WebpackDevServer(devServerOptions, compiler)

    devServer.startCallback(() => {
        console.log(`Server listening on port ${devPort}`)
    })

}
