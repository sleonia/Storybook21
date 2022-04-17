import {
    mkdirSync,
    readFileSync,
    existsSync,
    writeFileSync
} from 'fs'
import chalk from 'chalk';
import inquirer from 'inquirer'
import { resolve } from 'path';

const DEMO_DIR = 'demo'
const STORYBOOK_DIR = 'storybook'

const getQuestion = () => ({
    type: 'confirm',
    name: 'defaultConfig',
    message: `Create default config?`,
    default: true,
})

const createDemoDir = () => {
    const demoPath = resolve(process.cwd(), DEMO_DIR)
    if (!existsSync(demoPath)) {
        mkdirSync(demoPath)

        writeFileSync(
            resolve(demoPath, 'index.tsx'),
            readFileSync(resolve(__dirname, './templates/index.tsx')),
            'utf-8'
        )

        writeFileSync(
            resolve(demoPath, 'titled.tsx'),
            readFileSync(resolve(__dirname, './templates/titled.tsx')),
            'utf-8'
        )
    } else {
        console.log(chalk.red(`${DEMO_DIR} directory is exist 😰`))
        process.exit(1)
    }
}

const createStorybookDir = () => {
}

export const init = (): Promise<unknown> =>
    inquirer.prompt([getQuestion()])
        .then(({ defaultConfig }: Record<string, boolean>) => {
            if (defaultConfig) {
                const dir = process.cwd()

                createDemoDir()
            }
        })
