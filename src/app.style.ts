import type { CSSObject } from '@emotion/react'
import { createStyles } from '@mantine/core'

export const GlobalStyles: CSSObject = {
    '*, *::before, *::after': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0
    }
}

export const useAppStyles = createStyles(() => ({
    wrapper: {
        height: '100vh'
    }
}))
