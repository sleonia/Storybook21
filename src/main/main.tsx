import React from 'react'
import type { PropsWithChildren } from 'react'
import { Paper } from '@mantine/core'

import { useMainStyles } from './main.style'

export const Main = ({ children }: PropsWithChildren<unknown>): JSX.Element => {
    const { classes } = useMainStyles()

    return (
        <main className={classes.main}>
            <Paper shadow="xs" p="md" m="md">
                {children}
            </Paper>
        </main>
    )
}
