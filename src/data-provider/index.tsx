import React, { createContext, useContext } from 'react'
import type { PropsWithChildren } from 'react'

import type { Config, Navigation } from '../../@types'

import type { DataContextType } from './types'
import { navigationToFlat } from './navigation-to-flat'

export const DataContext = createContext<DataContextType | null>(null)

// TODO rename????
export const useDataProvider = (): DataContextType => {
    const context = useContext(DataContext)

    if (!context) {
        throw new Error('useDataProvider must be inside DataProvider')
    }

    return context
}


export const DataProvider = ({ children }: PropsWithChildren<unknown>): JSX.Element => {
    // FIXME тип для process.env.NAVIGATION
    const navigation = process.env.NAVIGATION as unknown as Array<Navigation>
    const navigationFlat = navigationToFlat(navigation) as Array<Navigation>

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