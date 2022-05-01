import { createStyles } from '@mantine/core'
import type { CSSObject } from '@mantine/core'

export const MobileStyles: CSSObject = {
    width: 300
}

export const use404Styles = createStyles(() => ({
    paper: {
        width: 600
    },
    accordeon: {
        width: 250,
        alignSelf: 'center'
    }
}))
