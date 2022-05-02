import type { Navigation, Config } from 'storybook21'

const navigation: Array<Navigation> = [
    {
        link: '/',
        title: 'Main page',
        mdx: './index.mdx',
        hidden: true,
        children: []
    },
    {
        link: '/components',
        title: 'Компоненты',
        mdx: './components.mdx',
        showMenu: true,
        children: [
            {
                link: '/custom-component',
                title: 'Custom Component',
                mdx: './index.mdx',
                children: [
                    {
                        link: '/ts-button-test',
                        title: 'Tsx Button Test',
                        mdx: './index.mdx',
                        component: '../fixture/src/ts-example.tsx'
                    },
                    {
                        link: '/js-button-test',
                        title: 'Js Button Test',
                        mdx: './index.mdx',
                        component: '../fixture/src/js-example.jsx'
                    }
                ]
            }
        ]
    },
    {
        link: '/preview',
        title: 'Preview',
        mdx: './preview.mdx',
        children: []
    }
]

const config: Config = {
    /** document.title */
    title: '🌈 Your nice title 🌈',

    /** Your app version */
    version: '1.0.0',

    /** You may to include css file or link to css resource */
    globalStyle: '',

    /** Directory where storybook will find you components */
    componentsDir: './src',

    /** Theme provider */
    themeProvider: '',

    /** Entry point in your app. Use in webpack */
    entry: '',

    /** Playground file with exports for provide to playground custom component, utils, etc.
     *
     * ℹ️ Use only default export
    */
    playground: './playground/index.tsx',

    /** Array of polyfills which include for playground page */
    polyfills: [],

    /** */ // TODO
    theme: '',

    /** */
    output: 'target/temp',

    /** Context for provide mdx navigation */
    storybookContext: './storybook',

    /** Array of navigation config for playground pages */
    navigation,

    /** Custom webpack config which merge with webpack.config in storybook */
    webpackConfig: {}
}

export default config
