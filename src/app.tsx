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
import { THEMES } from './constants'
import { HotKeys } from './hotkeys'
import { Header } from './header'
import { Sidebar } from './sidebar'
import { Main } from './main'
import { GlobalStyles, useAppStyles } from './app.style'

// TODO разделить роутинг и компоненту
export const App = (): JSX.Element => {
    const { classes } = useAppStyles()
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
                        <ColorSchemeProvider
                            colorScheme={colorScheme}
                            toggleColorScheme={toggleColorScheme}
                        >
                            <MantineProvider
                                theme={{ colorScheme }}
                                withGlobalStyles
                            >
                                <Global styles={GlobalStyles} />
                                <div className={classes.wrapper}>
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
