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
        // mdx: './components.mdx',
        showMenu: true,
        children: [
            {
                link: '/custom-component',
                title: 'Custom Component',
                mdx: './index.mdx',
                children: [
                    {
                        link: '/button-test',
                        title: 'Button Test',
                        mdx: './index.mdx'
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

    /** Demo file for provide to demo custom utils.
     *
     * ℹ️ Use only default export
    */
    demo: './demo/index.ts',

    /** Array of polyfills which include for demo page */
    polyfills: [],

    /** */ // TODO
    theme: '',

    /** */
    output: 'target/temp',

    /** Context for provide mdx navigation */
    storybookContext: './storybook',

    /** Array of navigation config for demo pages */
    navigation,

    /** Custom webpack config which merge with webpack.config in storybook */
    webpackConfig: {}
}

export default config
