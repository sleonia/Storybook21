import React from 'react'
import type { PropsWithChildren } from 'react'
import { Paper } from '@mantine/core'
import { useDocumentTitle, useMediaQuery } from '@mantine/hooks'

import type { MainProps } from './types'
import { useMainStyles } from './main.style'

export const Main = ({ title, children }: PropsWithChildren<MainProps>): JSX.Element => {
    const isMobile = useMediaQuery('(max-width: 769px)', false)
    const { classes } = useMainStyles(isMobile)

    useDocumentTitle(title)

    return (
        <main className={classes.main}>
            <Paper className={classes.paper} shadow="xs" m="md">
                {children}
            </Paper>
        </main>
    )
}
