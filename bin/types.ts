import type { Configuration } from 'webpack';

export enum WebpackMode {
    Development = "development",
    Production = "production",
}

export type CommanderStartOptions = {
    configPath?: string
    mode?: "development" | "production"
    port?: number
}

export type PepeConfig = {

}
