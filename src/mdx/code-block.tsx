import React, { useState } from 'react'
import i18next from 'i18next'
import { Prism } from '@mantine/prism';
import type { PrismSharedProps } from '@mantine/prism/lib/types';
import {
    Button,
    Collapse,
    Group,
    Paper,
    useMantineTheme,
    Code,
    Highlight
} from '@mantine/core'
import { useClipboard } from '@mantine/hooks'
import Editor from '@monaco-editor/react'
import CodeIcon from 'tabler-icons-react/dist/icons/code'
import CopyIcon from 'tabler-icons-react/dist/icons/copy'
import { LiveProvider, LiveContext, LivePreview } from 'react-live'
/* comment: alias for playground components */
/* eslint-disable-next-line import/no-unresolved */
import * as Library from '@storybook21-aliases/library'
/* comment: alias for playground components */
/* eslint-disable-next-line import/no-unresolved */
import Playground from '@storybook21-aliases/playground'

import { useCodeBlockStyles } from './code-block.style'
import type { CodeBlockProps, LiveEditorProps } from './types'

const LiveEditor = ({ handleCodeChange }: LiveEditorProps): JSX.Element => {
    const [opened, setOpen] = useState(false)
    const clipboard = useClipboard({ timeout: 1000 })

    const { classes } = useCodeBlockStyles()
    const { colorScheme } = useMantineTheme()

    return (
        <LiveContext.Consumer>
            {({ code, error }): JSX.Element => (
                <div className={classes.liveContextWrapper}>
                    <Group>
                        <Button
                            leftIcon={<CodeIcon />}
                            variant="default"
                            size="sm"
                            onClick={(): void => setOpen((o) => !o)}
                        >
                            {i18next.t('code-block.toggle-code')}
                        </Button>
                        <Button
                            leftIcon={clipboard.copied ? void 0 : <CopyIcon />}
                            variant="default"
                            size="sm"
                            onClick={(): void => clipboard.copy(code)}
                        >
                            {i18next.t(clipboard.copied ? 'code-block.copy-code.compeleted' : 'code-block.copy-code')}
                        </Button>
                    </Group>
                    <Collapse in={opened}>
                        <Paper shadow="xs" p="md" m="md">
                            <Editor
                                height="200px"
                                defaultLanguage="javascript"
                                defaultValue={code || '// some comment'}
                                theme={colorScheme === 'light' ? 'vs' : 'vs-dark'}
                                onChange={(value): void => handleCodeChange(value)}
                                options={{
                                    minimap: {
                                        enabled: false
                                    }
                                }}
                            />
                        </Paper>
                    </Collapse>
                    {error && (
                        <div className={classes.codeWrapper}>
                            <Code color="red" className={classes.code}>
                                {error}
                            </Code>
                        </div>
                    )}
                </div>
            )}

        </LiveContext.Consumer >

    )
}

export const CodeBlock = ({ children, className }: CodeBlockProps): JSX.Element => {
    const [code, setCode] = useState(children)

    const language = (className?.replace(/language-/, '')) as PrismSharedProps['language'] | ''

    if (code?.indexOf('render') !== -1) {
        return (
            <LiveProvider
                code={code}
                scope={{ Playground, ...Library }}
                noInline
            >
                <LivePreview />
                <LiveEditor handleCodeChange={(value): void => setCode(value)} />
            </LiveProvider>
        )
    }

    if (language) {
        return <Prism language={language}>{code}</Prism>
    }

    return <Highlight highlight={code} component="span">{code}</Highlight>
}
