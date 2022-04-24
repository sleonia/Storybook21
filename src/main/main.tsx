import React from 'react'
import Editor from '@monaco-editor/react'
import type { OnValidate } from '@monaco-editor/react'
import { Paper, ScrollArea, useMantineTheme } from '@mantine/core'

import { Footer } from './footer'

export const Main = (): JSX.Element => {
    const { colorScheme } = useMantineTheme()

    const handleEditorValidation: OnValidate = (markers) => {
        markers.forEach((marker) => console.log('onValidate:', marker.message))
    }

    return (
        <main style={{ flexGrow: 1 }}>
            <Paper shadow="xs" p="md" m="md">
                <Editor
                    height="200px"
                    defaultLanguage="javascript"
                    defaultValue="// some comment"
                    theme={colorScheme === 'light' ? 'vs' : 'vs-dark'}
                    onValidate={handleEditorValidation}
                    options={{
                        minimap: {
                            enabled: false
                        }
                    }}
                />
            </Paper>
            <Footer />
        </main>
    )
}
