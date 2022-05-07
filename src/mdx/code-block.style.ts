import { createStyles } from '@mantine/core'

export const useCodeBlockStyles = createStyles((theme) => ({
    liveContextWrapper: {
        marginTop: theme.spacing.md
    },
    editorWrapper: {
        margin: '16px 0',
        padding: '16px 0'
    },
    codeWrapper: {
        padding: `${theme.spacing.md}px 40px`
    },
    code: {
        fontSize: theme.fontSizes.md
    }
}))
