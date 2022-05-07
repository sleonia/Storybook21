import React from 'react'
import type { PropsWithChildren } from 'react'
import {
    ColorSchemeProvider,
    MantineProvider,
    useMantineColorScheme,
    useMantineTheme
} from '@mantine/core'
/* comment: alias for playground components */
/* eslint-disable-next-line import/no-unresolved */
import libraryTheme from '@storybook21-aliases/libraryTheme'
import { useHotkeys, useLocalStorage } from '@mantine/hooks'
import { HotKeys } from '../hotkeys'
import { THEMES } from '../constants'
import type { ColorScheme } from '@mantine/core'

const Helper = ({ children }: PropsWithChildren<unknown>) => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme()
    return (
        <AppContext.Provider
            value={{
                toggleColorScheme,
                useColorScheme: useMantineTheme,
                colorScheme
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const AppContext = React.createContext(() => {})

export const ThemeWrapper = ({ children }: PropsWithChildren<unknown>) => {

    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'mantine-color-scheme',
        defaultValue: THEMES.light,
        getInitialValueInEffect: true
    })

    const toggleColorScheme = (value?: ColorScheme): void => {
        setColorScheme(value || (colorScheme === THEMES.dark ? THEMES.light : THEMES.dark))
    }

    useHotkeys([[HotKeys.themeSwitcher, (): void => toggleColorScheme()]])

    const colors = libraryTheme ? libraryTheme[colorScheme] : {}

    return (
        <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
        >
            <MantineProvider
                theme={{
                    colorScheme,
                    colors
                }}
                withGlobalStyles
            >
                <Helper>
                    {children}
                </Helper>
            </MantineProvider>
        </ColorSchemeProvider>
    )
}
