import React from 'react'
import type { PropsWithChildren } from 'react'
import { ColorSchemeProvider, MantineProvider} from '@mantine/core'
/* comment: alias for playground components */
/* eslint-disable-next-line import/no-unresolved */
import libraryTheme from '@storybook21-aliases/libraryTheme'
import { useHotkeys, useLocalStorage } from '@mantine/hooks'
import { HotKeys } from '../hotkeys'
import { THEMES } from '../constants'
import type { ColorScheme } from '@mantine/core'
import { DocsProvider } from './docs-provider'

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

    const colors = libraryTheme ? libraryTheme[colorScheme] : void 0

    return (
        <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
        >
            <MantineProvider
                theme={{
                    colorScheme,
                    // comment: Provide custom tokens
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    colors
                }}
                withGlobalStyles
            >
                <DocsProvider>
                    {children}
                </DocsProvider>
            </MantineProvider>
        </ColorSchemeProvider>
    )
}
