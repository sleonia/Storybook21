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
import { Button, Collapse, Paper, useMantineTheme } from '@mantine/core'
import Editor, { OnValidate } from '@monaco-editor/react'
import {
    LiveProvider,
    // LiveEditor,
    LiveError,
    LiveContext,
    LivePreview
    // Editor
} from 'react-live'

const LiveEditor = ({ handleCode, ...rest }) => {
console.log('🚀 ~ file: code-block.tsx ~ line 23 ~ LiveEditor ~ rest', rest)
    const { colorScheme } = useMantineTheme()

    const handleEditorValidation: OnValidate = (markers) => {
        markers.forEach((marker) => console.log('onValidate:', marker.message))
    }

    const [opened, setOpen] = useState(false)

    return (
        <LiveContext.Consumer>
            {({ code, language, theme, disabled, error }) => {
                console.log('🚀 ~ file: code-block.tsx ~ line 59 ~ LiveEditor ~ code, language, theme, disabled, error', code, language, theme, disabled, error)

                return (
                    <div style={{ marginTop: '20px' }}>
                        <Button onClick={() => setOpen((o) => !o)}>
                            Toggle content
                        </Button>

                        <Collapse in={opened}>
                            <Paper shadow="xs" p="md" m="md">
                                <Editor
                                    height="200px"
                                    defaultLanguage="javascript"
                                    defaultValue={code || "// some comment"}
                                    theme={colorScheme === 'light' ? 'vs' : 'vs-dark'}
                                    onValidate={handleEditorValidation}
                                    onChange={(value) => handleCode(value)}
                                    options={{
                                        minimap: {
                                            enabled: false
                                        }
                                    }}
                                />
                            </Paper>
                        </Collapse>
                    </div>
                )
            }}

        </LiveContext.Consumer>

    )
}

export const CodeBlock = (props) => {
    console.log('🚀 ~ file: code-block.tsx ~ line 44 ~ CodeBlock ~ props', props)

    const [code, setCode] = useState(props.children)

    return (
        <LiveProvider code={code} scope={{ Playground }} noInline>
            <LivePreview />
            <LiveEditor handleCode={(value) => setCode(value)} />
            {/* <LiveError /> // TODO обработать ошибку */}
        </LiveProvider>
    )
}
