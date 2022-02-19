#!/usr/bin/env node
import { platform } from 'process'
import { exec as nodeExec } from 'child_process'
import { promisify } from 'util'

import chalk from 'chalk'

const exec = promisify(nodeExec)

const { log } = console

const DENO_INSTALATION_PAGE = 'https://deno.land/manual@v1.19.0/getting_started/installation'

const DenoInstall = {
    Unix: 'curl -fsSL https://deno.land/x/install/install.sh | sh',
    Windows: 'iwr https://deno.land/x/install/install.ps1 -useb | iex'
}

log('⌛', chalk.cyan('Checking your os and installing Deno'))

if (platform === 'win32') {
    const { stdout } = await exec(DenoInstall.Windows)
    log('✅', chalk.green(stdout))
} else if (platform === 'darwin' || platform === 'linux') {
    const { stdout } = await exec(DenoInstall.Unix)
    log('✅', chalk.green(stdout))
} else {
    throw new Error(`❌ Please see ${DENO_INSTALATION_PAGE}`)
}
