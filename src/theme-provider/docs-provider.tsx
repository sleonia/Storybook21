import React, { createContext } from 'react'
import type { PropsWithChildren } from 'react'
import {
    useMantineColorScheme,
    useMantineTheme
} from '@mantine/core'
/* comment: alias for playground components */
/* eslint-disable-next-line import/no-unresolved */

type DocsContextType = {
    toggleColorScheme: () => void
    useTheme: typeof useMantineTheme
    colorScheme: 'light' | 'dark'
}

export const DocsContext = createContext<DocsContextType>({
    toggleColorScheme: () => {},
    useTheme: useMantineTheme,
    colorScheme: 'light'
})

export const DocsProvider = ({ children }: PropsWithChildren<unknown>) => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme()

    return (
        <DocsContext.Provider
            value={{
                toggleColorScheme,
                useTheme: useMantineTheme,
                colorScheme
            }}
        >
            {children}
        </DocsContext.Provider>
    )
}

