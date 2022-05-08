import React from 'react'
import { DocsContext } from 'storybook21/src/theme-provider/docs-provider'
import { Button } from '@mantine/core'

export const ContextExample = (): JSX.Element => (
    <DocsContext.Consumer>
        {({ toggleColorScheme, colorScheme }): JSX.Element => (
            <Button
                variant="outline"
                onClick={(): void => toggleColorScheme()}
                leftIcon={colorScheme === 'dark' ? '🌚' : '🌞'}
            >
                {'Do you want to toggle theme?'}
            </Button>
        )}
    </DocsContext.Consumer>
)
