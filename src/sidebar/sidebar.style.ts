/* comment: get colors by index */
/* eslint-disable @typescript-eslint/no-magic-numbers */

import { createStyles } from '@mantine/core'
import type { CSSObject } from '@mantine/core'

import { THEMES, ScrollStyles, SIDEBAR_WIDTH } from '../constants'

export const BOLD_LINK_FONT = 500

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
    },
    container: {
        paddingTop: '20px',
        paddingBottom: '20px',

        '& ul': {
            listStyle: 'none'
        },
        '& ul > li': {
            marginLeft: '12px'
        }
    }
}))
