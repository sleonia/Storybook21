/* comment: get colors by index */
/* eslint-disable @typescript-eslint/no-magic-numbers */

import { createStyles } from '@mantine/core'
import type { CSSObject } from '@mantine/core'
import type { CSSProperties } from 'react'

import { THEMES, HEADER_HEIGHT, SIDEBAR_WIDTH } from '../constants'

export const ScrollStyles: CSSProperties = {
    height: `calc(100vh - ${HEADER_HEIGHT} - 1px)`
}

export const MobileStyles: CSSObject = {
    width: SIDEBAR_WIDTH
}

export const useSidebarStyles = createStyles((theme, isSidebarOpened: boolean) => ({
    sidebar: {
        display: isSidebarOpened ? 'block' : 'none',
        width: '100%',
        height: ScrollStyles.height,
        borderRight: `1px solid ${theme.colorScheme === THEMES.light ? theme.colors.gray[2] : theme.colors.dark[7]}`,
        backgroundColor: theme.colorScheme === THEMES.light ? theme.colors.gray[0] : theme.colors.dark[8]
    }
}))
