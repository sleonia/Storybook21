import React, { createContext, useContext } from 'react'
import type { PropsWithChildren } from 'react'

import type { DataContextType, NavigationFlat } from './types'
import { navigationToFlat } from './navigation-to-flat'

export const DataContext = createContext<DataContextType | null>(null)

export const useDataProvider = (): DataContextType => {
    const context = useContext(DataContext)

    if (!context) {
        throw new Error('useDataProvider must be inside DataProvider')
    }

    return context
}

export const DataProvider = ({ children }: PropsWithChildren<unknown>): JSX.Element => {
    const navigation = WEBPACK_ALIAS_NAVIGATION
    const navigationFlat = navigationToFlat(navigation) as Array<NavigationFlat>

    return (
        <DataContext.Provider
            value={{
                navigation,
                navigationFlat
            }}
        >
            {children}
        </DataContext.Provider>
    )
}
