import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import type { Props as MDXProviderProps } from '@mdx-js/react/lib'
/* comment: alias for working lib */
/* eslint-disable-next-line import/no-unresolved */
// import * as library from '@storybook21-aliases/library'
/* comment: alias for playground components */
/* eslint-disable-next-line import/no-unresolved */
import Playground from '@storybook21-aliases/playground'
import { Divider } from '@mantine/core'

import type { MdxProps } from './types'

import { Text } from './components'
import { CodeBlock } from './code-block'

const components = {
    code: CodeBlock
}

export const Mdx = ({ content: MdxContext }: MdxProps): JSX.Element => {
    return (
        <MDXProvider components={{ ...components, ...Playground }}>
            <MdxContext components={{ ...components, ...Playground }} />
        </MDXProvider>
    )
}
