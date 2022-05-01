import type { Props as MDXPContextProps } from '@mdx-js/react/lib'

export type MdxProps = {
    content: (props: Pick<MDXPContextProps, 'components'>) => JSX.Element
}

export type LiveEditorProps = {
    handleCodeChange: (value?: string) => void
}

export type CodeBlockProps = {
    className?: string
    children?: string
}
