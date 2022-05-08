import { createStyles } from '@mantine/core'

import { THEMES } from '../constants'

export const FOOTER_BOLD_FONT_WEIGHT = 700

export const useFooterStyles = createStyles((theme) => ({
    footer: {
        backgroundColor: theme.colorScheme === THEMES.light
            ? theme.colors.gray[0]
            /* comment: get token by index */
            /* eslint-disable-next-line @typescript-eslint/no-magic-numbers */
            : theme.colors.dark[8]
    },
    inner: {
        padding: '32px 16px'
    },
    wrapper: {
        alignItems: 'start'
    }
}))
