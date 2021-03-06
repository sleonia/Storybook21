import type { Configuration } from 'webpack'

export enum WebpackMode {
    Development = 'development',
    Production = 'production'
}

export type CommanderStartOptions = {
    configPath?: string
    mode?: Exclude<Configuration['mode'], 'none'>
    port?: number
}

export type CommanderStartOptionsRequired = NonNullable<Required<CommanderStartOptions>>
