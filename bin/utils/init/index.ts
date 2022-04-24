import {
    mkdirSync,
    readFileSync,
    existsSync,
    writeFileSync
} from 'fs'
import { resolve, basename } from 'path'

import chalk from 'chalk'
import inquirer from 'inquirer'
import glob from 'glob'

const DEMO_DIR = 'demo'
const STORYBOOK_DIR = 'storybook'
const TEMPLATES_DIR = '__templates__'

const getQuestion = () => ({
    type: 'confirm',
    name: 'defaultConfig',
    message: 'Create default config?',
    default: false
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

        console.log(`✅ Created ${path}`)
    } else {
        console.log(chalk.red(`${path} directory is already exist 😰`))
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

        console.log(`✅ Created ${baseName}`)
    } else {
        console.log(chalk.red(`${baseName} config file is already exist 😰`))
    }
}

const addScriptsToPackageJson = (): void => {
    const path = resolve(process.cwd(), 'package.json')
    const json = JSON.parse(readFileSync(path, 'utf-8'))

    const getTemplate = (mode: 'start' | 'build') => `npx storybook21 ${mode} --config="./storybook.config.ts"`

    if (json.scripts['start:storybook'] || json.scripts['build:storybook']) {
        console.log(chalk.red('start:storybook or build:storybook scripts are already exist 😰'))
        return
    }

    json.scripts = {
        ...json.scripts || {},
        'start:storybook': getTemplate('start'),
        'build:storybook': getTemplate('build')
    }

    writeFileSync(path, `${JSON.stringify(json, null, 4)}\n`)

    console.log('✅ package.json is updated')
}

const initHelper = (): void => {
    createConfigDirs(DEMO_DIR, `${__dirname}/${TEMPLATES_DIR}/*.tsx`)
    createConfigDirs(STORYBOOK_DIR, `${__dirname}/${TEMPLATES_DIR}/*.mdx`)
    createConfigFile(`${__dirname}/${TEMPLATES_DIR}/storybook.config.ts`)
    addScriptsToPackageJson()
    
    console.log(
        '✅ App inited\n',
        'Try ', chalk.blue('npm run start:storybook')
    )
}

export const init = async (isY: boolean): Promise<unknown> => {
    if (isY) {
        initHelper()
        return Promise.resolve()
    }
    const { defaultConfig } = await inquirer.prompt([getQuestion()])
    if (defaultConfig) {
        initHelper()
    }
    
}
