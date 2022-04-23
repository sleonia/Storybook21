import { createStyles } from '@mantine/core'

export const HEADER_HEIGHT = '60px'

export const useHeaderStyles = createStyles(() => ({
    header: {
        height: HEADER_HEIGHT,
    },
    inner: {
        height: HEADER_HEIGHT,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px'
    },
    logo: {
        display: 'flex'
    },
    logoIcon: {
        marginRight: 8
    },
    githubLink: {
        height: 28,
        alignSelf: 'center'
    }
}))
