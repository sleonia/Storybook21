import { createStyles } from '@mantine/core'
import type { CSSObject } from '@mantine/core'

import { ScrollStyles } from '../constants'

export const MobileStyles: CSSObject = {
    width: 300
}

export const use404Styles = createStyles(() => ({
    // wrapper: {
    //     height: ScrollStyles.height,
    //     width: '100%'
    // },
    paper: {
        width: 600
    },
    accordeon: {
        width: 250,
        alignSelf: 'center'
    }
}))
