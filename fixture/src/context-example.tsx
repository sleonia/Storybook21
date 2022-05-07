import React from 'react'
import { DocsContext } from 'storybook21/src/theme-provider/docs-provider'

import { Button, Text } from '@mantine/core';

export const ContextExample = () => (
    <DocsContext.Consumer>
        {({ toggleColorScheme, colorScheme }) => (
            <Button
                variant="outline"
                onClick={() => toggleColorScheme()}
                leftIcon={colorScheme === 'dark' ? '🌚' : '🌞'}
            >
                {'Do you want to toggle theme?'}
            </Button>
        )}
    </DocsContext.Consumer>
)
