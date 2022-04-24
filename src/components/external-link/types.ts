import type { AnchorProps } from '@mantine/core'

export type ExternalLinkProps = AnchorProps<'a'> & {
    className?: string
    color?: string
    href: string
}
