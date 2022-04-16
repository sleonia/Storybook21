import { Command } from 'commander';

import { version } from '../package.json'

const program = new Command();

program
    .name('🌈 21 Storybook 🌈')
    .description('Open source tool for developing UI components in isolation for React')
    .version(version)

// TODO хочу, чтобы он сам генерил конфиг и все нужные штуки
program
    .command('init')

    program
    .command('start')
    .description('run app in dev mode 🚀')
    .requiredOption('--config <path>', 'Path to config file')
    .option('--mode', 'Mode for run app', 'development')
    .option('--port', 'Port for dev server', '4242')

    program
    .command('build')
    .description('build app 🛠️')
    .requiredOption('--config <path>', 'Path to config file')
    .option('--mode', 'Mode for run app', 'production')

program.showHelpAfterError('(Try --help for show information)');

const args = program.parse(process.argv).args

export { program, args }
