import { createStyles } from '@mantine/core'

export const useMainStyles = createStyles(() => ({
    main: {
        flexGrow: 1
    },
    paper: {
        padding: '16px 40px',
        '& > ul': {
            marginLeft: '20px'
        }
    }
}))
