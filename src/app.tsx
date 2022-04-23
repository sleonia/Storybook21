import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
    Global,
    MantineProvider,
    ColorSchemeProvider,
    Group
} from '@mantine/core'
import { useHotkeys, useLocalStorage } from '@mantine/hooks'
import type { ColorScheme } from '@mantine/core'

import './i18next'

import { HotKeys } from './hotkeys'
import { Header } from './header'
import { Sidebar } from './sidebar'
import { Main } from './main'

/*
    assets
    code-block
    collapse-menu
    components
    data-provider
    head-line
    index.jsx
    props-table
    scaffold
    theme-provider
    utils
 */

const THEMES = {
    light: 'light',
    dark: 'dark'
} as const

export const App = (): JSX.Element => {
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'mantine-color-scheme',
        defaultValue: THEMES.light,
        getInitialValueInEffect: true,
    })

    const toggleColorScheme = (value?: ColorScheme): void => {
        setColorScheme(value || (colorScheme === THEMES.dark ? THEMES.light : THEMES.dark))
    }

    useHotkeys([[HotKeys.themeSwitcher, (): void => toggleColorScheme()]])

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                            <MantineProvider
                                theme={{ colorScheme }}
                                withGlobalStyles
                            >
                                <Global
                                    styles={{
                                        '*, *::before, *::after': {
                                            boxSizing: 'border-box',
                                            margin: 0,
                                            padding: 0
                                        }
                                    }}
                                />
                                {/* TODO wrapper */}
                                <div style={{ height: '100vh' }}>
                                    <Header />
                                    <Group align="start" spacing={0} noWrap>
                                        <Sidebar />
                                        <Main />
                                    </Group>
                                </div>
                            </MantineProvider>
                        </ColorSchemeProvider>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}
