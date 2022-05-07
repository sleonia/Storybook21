import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Global, Group } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import './i18next'

import { ThemeWrapper } from './theme-provider'
import { DataProvider } from './data-provider'
import { Header } from './header'
import { Sidebar } from './sidebar'
import { GlobalStyles, useAppStyles } from './app.style'
import { Footer } from './footer'
import { Routing } from './routing'

export const App = (): JSX.Element => {
    const { classes } = useAppStyles()

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


    return (
        <ThemeWrapper>
            <BrowserRouter>
                <DataProvider>
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
                </DataProvider>
            </BrowserRouter >
        </ThemeWrapper>
    )
}
