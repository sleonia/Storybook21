import type { CSSObject } from '@emotion/react'
import { createStyles } from '@mantine/core'

import { ScrollStyles } from './constants'

export const GlobalStyles: CSSObject = {
    '*, *::before, *::after': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0
    }
}

export const useAppStyles = createStyles(() => ({
    wrapper: {
        minHeight: '100vh'
    },
    contentContainer: {
        flexGrow: 1,
        overflowY: 'auto',
        height: ScrollStyles.height,
        width: '100%',
        '& main': {
            minHeight: '100vh'
        }
    }
}))
