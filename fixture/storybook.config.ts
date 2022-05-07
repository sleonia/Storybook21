import type { Navigation, Config } from 'storybook21'

import WebpackNotifierPlugin from 'webpack-notifier'
import SpeedMeasurePlugin from "speed-measure-webpack-plugin";
const smp = new SpeedMeasurePlugin();

const navigation: Array<Navigation> = [
    {
        link: '/',
        title: 'Main',
        mdx: './index.mdx'
    },
    {
        link: '/docs',
        title: 'Docs',
        mdx: './docs.mdx'
    },
    {
        link: '/quick-start',
        title: 'Quick Start',
        mdx: './quick-start.mdx'
    },
    {
        link: '/components',
        title: 'Компоненты',
        mdx: './components.mdx',
        children: [
            {
                link: '/ts-props-example',
                title: 'Cool button with beautiful interface',
                component: './ts-props-example.tsx'
            },
            {
                link: '/js-props-example',
                title: 'Cool button with beautiful prop-types',
                component: './js-example.jsx'
            }
        ]
    },
    {
        link: '/mystery-page',
        title: 'Mystery',
        hidden: true
    }
]

const config: Config = {
    /** document.title */
    title: '🌈 Your nice title 🌈',

    /** Your app version */
    version: '1.0.0',

    /** You may to include css file or link to css resource */
    globalStyle: './src/global.styles.css',

    /** Directory where storybook will find you components */
    componentsDir: './src',

    /** Entry point in your app. Use in webpack */
    entry: './src/index.ts',

    /** Playground file with exports for provide to playground custom component, utils, etc.
     *
     * ℹ️ Use only default export
    */
    playground: './playground/index.tsx',

    /** You can provide custom theme-tokens for your project
     * 
     * ℹ️ Use only default export
    */
    theme: './theme.ts',

    /** Plugins for webpack */
    plugins: [
        new WebpackNotifierPlugin({
            title: 'Wooow 🦄',
            emoji: true
        })
    ],

    /** */
    output: 'target/temp',

    /** Context for provide mdx navigation */
    storybookContext: './storybook',

    /** Array of navigation config for playground pages */
    navigation,

    /** Custom webpack config which merge with webpack.config in storybook */
    webpackConfig: smp.wrap({})
}

export default config
