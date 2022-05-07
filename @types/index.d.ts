import type { Configuration } from 'webpack'

export type Navigation = {
    link: string
    title: string
    mdx?: string
    component?: string
    hidden?: boolean
    children?: Array<Navigation>
}

export type Config = {
    title?: string
    version?: string
    globalStyle?: string
    componentsDir: string
    entry?: string
    playground?: string
    theme?: string
    plugins?: Configuration['plugins']
    output?: string
    storybookContext?: string
    navigation: Array<Navigation>
    webpackConfig?: Configuration
}
