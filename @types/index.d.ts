import type { Configuration } from 'webpack'

export type Navigation = {
    link?: string
    title?: string
    mdx?: string
    components?: string
    showMenu?: boolean
    hidden?: boolean
    children?: Array<Navigation>
}

export type Config = {
    title?: string
    globalStyle?: string
    componentsDir: string
    themeProvider?: string
    entry?: string
    demo?: string
    polyfills?: Array<string>
    theme?: string
    output?: string
    storybookContext?: string
    navigation: Array<Navigation>
    webpackConfig?: Configuration
}
