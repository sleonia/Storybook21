import { createStyles } from '@mantine/core'

import { THEMES } from '../../constants'

export const useFooterStyles = createStyles((theme) => ({
    footer: {
        backgroundColor: theme.colorScheme === THEMES.light ? '#f8f9fa' : 'rgb(20, 21, 23)'
    },
    inner: {
        padding: '32px 16px',
    },
    wrapper: {
        alignItems: 'start'
    }
}))
