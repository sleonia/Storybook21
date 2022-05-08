import React, { createContext } from 'react'
import type { PropsWithChildren } from 'react'
import { useMantineColorScheme } from '@mantine/core'

import type { DocsContextType } from './types'

export const DocsContext = createContext<DocsContextType>({
    toggleColorScheme: () => {},
    colorScheme: 'light'
})

export const DocsProvider = ({ children }: PropsWithChildren<unknown>): JSX.Element => {
    /* comment: eslint error */
    /* eslint-disable-next-line @typescript-eslint/unbound-method */
    const { colorScheme, toggleColorScheme } = useMantineColorScheme()

    return (
        <DocsContext.Provider
            value={{
                toggleColorScheme,
                colorScheme
            }}
        >
            {children}
        </DocsContext.Provider>
    )
}

