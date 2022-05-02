import React from 'react'
import { MDXProvider } from '@mdx-js/react'
/* comment: alias for playground components */
/* eslint-disable-next-line import/no-unresolved */
import * as Library from '@storybook21-aliases/library'
/* comment: alias for playground components */
/* eslint-disable-next-line import/no-unresolved */
import Playground from '@storybook21-aliases/playground'

import type { MdxProps } from './types'
import { CodeBlock } from './code-block'
import { PropTypes } from './playground-components'

export const Mdx = ({ content: MdxContext }: MdxProps): JSX.Element => {
    const mdxCompnents = {
        code: CodeBlock as () => JSX.Element,
        PropTypes,
        ...Playground,
        ...Library
    }
    return (
        <MDXProvider components={mdxCompnents}>
            <MdxContext components={mdxCompnents} />
        </MDXProvider>
    )
}
