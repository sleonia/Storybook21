import {
    mkdirSync,
    readFileSync,
    existsSync,
    writeFileSync
} from 'fs'
import chalk from 'chalk';
import inquirer from 'inquirer'
import { resolve, basename } from 'path'
import glob from "glob";

const DEMO_DIR = 'demo'
const STORYBOOK_DIR = 'storybook'
const TEMPLATES_DIR = '__templates__'

const getQuestion = () => ({
    type: 'confirm',
    name: 'defaultConfig',
    message: `Create default config?`,
    default: true,
})

const createConfigDirs = (path: string, pattern: string): void => {
    const dirPath = resolve(process.cwd(), path)

    if (!existsSync(dirPath)) {
        mkdirSync(dirPath)

        glob
            .sync(pattern)
            .forEach((filePath) => {
                writeFileSync(
                    resolve(dirPath, basename(filePath)),
                    readFileSync(resolve(filePath)),
                    'utf-8'
                )
            })

    } else {
        console.log(chalk.red(`${path} directory is already exist 😰`))
        process.exit(1)
    }
}

const createConfigFile = (path: string): void => {
    const configPath = resolve(process.cwd(), path)
    const baseName = basename(path)

    if (!existsSync(baseName)) {
        writeFileSync(
            resolve('.', baseName),
            readFileSync(resolve(configPath)),
            'utf-8'
        )
    } else {
        console.log(chalk.red(`${baseName} config file is already exist 😰`))
        process.exit(1)
    }
}

const addScriptsToPackageJson = (): void => {

}

export const init = (): Promise<unknown> =>
    inquirer.prompt([getQuestion()])
        .then(({ defaultConfig }: Record<string, boolean>) => {
            if (defaultConfig) {
                createConfigDirs(DEMO_DIR, `${__dirname}/${TEMPLATES_DIR}/*.tsx`)
                createConfigDirs(STORYBOOK_DIR, `${__dirname}/${TEMPLATES_DIR}/*.mdx`)
                createConfigFile(`${__dirname}/${TEMPLATES_DIR}/storybook.config.ts`)

                console.log('✅ Default config created')
            }
        })
