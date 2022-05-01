import React from 'react'
import { MDXProvider } from '@mdx-js/react'
/* comment: alias for playground components */
/* eslint-disable-next-line import/no-unresolved */
import Playground from '@storybook21-aliases/playground'

import type { MdxProps } from './types'
import { CodeBlock } from './code-block'

export const Mdx = ({ content: MdxContext }: MdxProps): JSX.Element => {
    const mdxCompnents = { code: CodeBlock as () => JSX.Element, ...Playground }
    return (
        <MDXProvider components={mdxCompnents}>
            <MdxContext components={mdxCompnents} />
        </MDXProvider>
    )
}
