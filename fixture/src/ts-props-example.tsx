import React from 'react'
import { Group, Button } from '@mantine/core';

type ButtonColorScheme = 'base' | 'secondary' | 'link' | 'purple' | 'blue' | 'green' | 'skyblue' | 'black' | 'gold' | 'aqua'

export type CoolTsButtonProps = {
    title: string
    /** Complex type description */
    obj?: {
        disabled?: boolean
        loading?: string
        loader: 'done' | 'waiting' | 'error' | 'info'
    }
    children?: string | React.ReactNode
    mode?: 'info'
    onClick?: (...args: Array<unknown>) => unknown
    color?: string
    colorScheme?: ButtonColorScheme
}

export const CoolTsButton = ({
    title,
    children,
    mode,
    onClick = () => {},
    color = 'black',
}: CoolTsButtonProps) => (
    <Group>
        <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Indigo cyan</Button>
        <Button variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>Lime green</Button>
        <Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>Teal blue</Button>
        <Button variant="gradient" gradient={{ from: 'orange', to: 'red' }}>Orange red</Button>
        <Button variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>Peach</Button>
    </Group>
)
