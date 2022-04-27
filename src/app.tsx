import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
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
import { DataProvider } from './data-provider'
import { Header } from './header'
import { Sidebar } from './sidebar'
import { GlobalStyles, useAppStyles } from './app.style'
import { Footer } from './main/footer'
import { Routing } from './routing'

// TODO разделить роутинг и компоненту
export const App = (): JSX.Element => {
    const { classes } = useAppStyles()
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'mantine-color-scheme',
        defaultValue: THEMES.light,
        getInitialValueInEffect: true
    })

    // const matches = useMediaQuery('(max-width: 769px)', false)
    // TODO обработать мобилу
    const [isSidebarOpened, setSidebarOpened] = useState(true)

    const handleSidebarOpened = (): void => setSidebarOpened(!isSidebarOpened)

    const toggleColorScheme = (value?: ColorScheme): void => {
        setColorScheme(value || (colorScheme === THEMES.dark ? THEMES.light : THEMES.dark))
    }

    useHotkeys([[HotKeys.themeSwitcher, (): void => toggleColorScheme()]])

    return (
        <BrowserRouter>
            <DataProvider>
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
                            <Header
                                isSidebarOpened={isSidebarOpened}
                                handleSidebarOpened={handleSidebarOpened}
                            />
                            <Group align="start" spacing={0} noWrap>
                                <Sidebar isSidebarOpened={isSidebarOpened} />
                                <div className={classes.contentContainer}>
                                    <Routing />
                                    <Footer />
                                </div>
                            </Group>
                        </div>
                    </MantineProvider>
                </ColorSchemeProvider>
            </DataProvider>
        </BrowserRouter>
    )
}
