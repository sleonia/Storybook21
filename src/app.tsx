import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import {
    Global,
    MantineProvider,
    ColorSchemeProvider,
    Group
} from '@mantine/core'
import {
    useHotkeys,
    useLocalStorage,
    useMediaQuery
} from '@mantine/hooks'
import type { ColorScheme } from '@mantine/core'

import './i18next'

import { THEMES } from './constants'
import { HotKeys } from './hotkeys'
import { DataProvider } from './data-provider/provider'
import { Header } from './header'
import { Sidebar } from './sidebar'
import { GlobalStyles, useAppStyles } from './app.style'
import { Footer } from './footer'
import { Routing } from './routing'

export const App = (): JSX.Element => {
    const { classes } = useAppStyles()
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'mantine-color-scheme',
        defaultValue: THEMES.light,
        getInitialValueInEffect: true
    })

    const isMobile = useMediaQuery('(max-width: 769px)', false)
    const [isSidebarOpened, setSidebarOpened] = useState(true)
    
    const handleSidebarOpened = (): void => setSidebarOpened(!isSidebarOpened)

    useEffect(() => {
        if (isMobile) {
            setSidebarOpened(false)
        } else {
            setSidebarOpened(true)
        }
    }, [isMobile])


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
