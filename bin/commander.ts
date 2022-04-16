import { Command, createOption } from 'commander';

import { version } from '../package.json'
import { runServer } from './server'
import type { CommanderStartOptions } from './types'
import { WebpackMode } from './types'

const DEFAULT_PORT = 4242

const program = new Command();

const configOption = createOption('--config <string>', 'Path to config file')
const modeOption = createOption('--mode <string>', 'Mode for run app')
const portOption = createOption('--port <type>', 'Port for dev server')

const parseOptions = ({
    configPath,
    mode,
    port
}: Record<string, string | undefined>
): Required<CommanderStartOptions> => ({
    configPath,
    mode: mode === WebpackMode.Development || mode === WebpackMode.Production ? mode : WebpackMode.Development,
    port: Number(port) || DEFAULT_PORT
})

program
    .name('🌈 21 Storybook 🌈')
    .description('Open source tool for developing UI components in isolation for React')
    .version(version);

// TODO хочу, чтобы он сам генерил конфиг и все нужные штуки
program
    .command('init');

program
    .command('start')
    .description('run app in dev mode 🚀')
    .addOption(configOption)
    .addOption(modeOption)
    .addOption(portOption)
    .action((str) => {
        const options = parseOptions(str)
        runServer(options)
    })

program
    .command('build')
    .description('build app 🛠️')
    .addOption(modeOption)
    .addOption(configOption)
    .action((str) => {
        parseOptions(str)
    })

program.showHelpAfterError('(Try --help for show information)');

export { program }
