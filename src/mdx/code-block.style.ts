import { createStyles } from '@mantine/core'

export const useCodeBlockStyles = createStyles((theme) => ({
    liveContextWrapper: {
        marginTop: theme.spacing.md
    },
    codeWrapper: {
        padding: `${theme.spacing.md}px 40px`
    },
    code: {
        fontSize: theme.fontSizes.md
    }
}))
