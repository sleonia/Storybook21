import React, { useState } from 'react'
// import { LiveProvider, LivePreview, LiveContext } from 'react-live'
import { useMDXComponents } from '@mdx-js/react'
import styled from '@emotion/styled'
/* comment: alias for working lib */
/* eslint-disable-next-line import/no-unresolved */
// import * as library from 'library'
/* comment: alias for playground components */
/* eslint-disable-next-line import/no-unresolved */
import Playground from '@storybook21-aliases/playground'

import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'

// const LiveEditor = (props) => (
//     <LiveContext.Consumer>
//         {({ code, language, theme, disabled, onChange }) => {
//             const handleChange = (liveCode) => {
//                 if (props.onChange) {
//                     props.onChange(liveCode)
//                 }
//                 onChange(liveCode)
//             }

//             return (
//                 <Editor
//                     theme={theme}
//                     code={code}
//                     language={language}
//                     disabled={disabled}
//                     onChange={handleChange}
//                     {...props}
//                 />
//             )
//         }}
//     </LiveContext.Consumer>
// )

export const CodeBlock = (props) => {
console.log('🚀 ~ file: code-block.tsx ~ line 44 ~ CodeBlock ~ props', props)

    return (
        <LiveProvider code={props.children} scope={{ Playground }} noInline>
            <LiveEditor />
            <LiveError />
            <LivePreview />
        </LiveProvider>
    )
}
