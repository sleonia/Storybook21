import { createStyles } from '@mantine/core'

import { HEADER_HEIGHT } from '../constants'

export const useHeaderStyles = createStyles(() => ({
    header: {
        height: HEADER_HEIGHT
    },
    inner: {
        height: HEADER_HEIGHT,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px'
    },
    githubLink: {
        height: 28,
        alignSelf: 'center',
        borderRadius: 4
    }
}))
