import React from 'react'
import { Route, Routes } from 'react-router-dom'

import type { Navigation } from '../@types'

import { useDataProvider } from './data-provider'
import { Main } from './main'
import { NotFound } from './404'
import { Mdx } from './mdx'

const getMDXRoutes = (navigationFlat: Array<Navigation>) =>
    navigationFlat.map(
        (navigation) => navigation.mdx && (
            <Route
                key={navigation.link}
                path={navigation.link}
                element={(
                    <Main>
                        <Mdx content={navigation.mdx} />
                    </Main>
                )}
            />
        )
    )

export const Routing = (): JSX.Element => {
    const { navigationFlat } = useDataProvider()

    return (
        <Routes>
            {getMDXRoutes(navigationFlat)}
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
