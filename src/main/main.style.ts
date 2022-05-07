import { createStyles } from '@mantine/core'

export const useMainStyles = createStyles((_, isMobile: boolean) => ({
    main: {
        flexGrow: 1
    },
    paper: {
        padding: `16px ${isMobile ? 16 : 40}px`,
        '& > ul': {
            marginLeft: '20px'
        },
        '& > ul > li > ul': {
            marginLeft: '20px'
        },
        '& > pre': {
            whiteSpace: 'pre-wrap'
        }
    }
}))
