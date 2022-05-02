import {
    mkdirSync,
    readFileSync,
    existsSync,
    writeFileSync
} from 'fs'
import { resolve, basename } from 'path'

import chalk from 'chalk'
import inquirer from 'inquirer'
import type { QuestionCollection } from 'inquirer'
import glob from 'glob'

const PLAYGROUND_DIR = 'playground'
const STORYBOOK_DIR = 'storybook'
const TEMPLATES_DIR = '__templates__'
const JSON_DEFAULT_SPACE = 4

const getQuestion = (): QuestionCollection => ({
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

        /* comment: Show logs */
        /* eslint-disable-next-line no-console */
        console.log(`✅ Created ${path}`)
    } else {
        /* comment: Show logs */
        /* eslint-disable-next-line no-console */
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

        /* comment: Show logs */
        /* eslint-disable-next-line no-console */
        console.log(`✅ Created ${baseName}`)
    } else {
        /* comment: Show logs */
        /* eslint-disable-next-line no-console */
        console.log(chalk.red(`${baseName} config file is already exist 😰`))
    }
}

const addScriptsToPackageJson = (): void => {
    const path = resolve(process.cwd(), 'package.json')
    const json = JSON.parse(readFileSync(path, 'utf-8')) as Record<'scripts', Record<string, string | undefined> | undefined>

    const getTemplate = (mode: 'start' | 'build'): string => `npx storybook21 ${mode} --config=storybook.config.ts`

    if (json.scripts?.['start:storybook'] || json.scripts?.['build:storybook']) {
        /* comment: Show logs */
        /* eslint-disable-next-line no-console */
        console.log(chalk.red('start:storybook or build:storybook scripts are already exist 😰'))
        return
    }

    json.scripts = {
        ...json.scripts || {},
        'start:storybook': getTemplate('start'),
        'build:storybook': getTemplate('build')
    }

    writeFileSync(path, `${JSON.stringify(json, null, JSON_DEFAULT_SPACE)}\n`)

    /* comment: Show logs */
    /* eslint-disable-next-line no-console */
    console.log('✅ package.json is updated')
}

const initHelper = (): void => {
    createConfigDirs(PLAYGROUND_DIR, `${__dirname}/${TEMPLATES_DIR}/*.tsx`)
    createConfigDirs(STORYBOOK_DIR, `${__dirname}/${TEMPLATES_DIR}/*.mdx`)
    createConfigFile(`${__dirname}/${TEMPLATES_DIR}/storybook.config.ts`)
    addScriptsToPackageJson()

    /* comment: Show logs */
    /* eslint-disable-next-line no-console */
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
    const { defaultConfig } = await inquirer.prompt([getQuestion()]) as Record<'defaultConfig', boolean>
    if (defaultConfig) {
        initHelper()
    }

    return Promise.resolve()
}
