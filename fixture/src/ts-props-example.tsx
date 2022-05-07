import React from 'react'
import { DocsContext } from 'storybook21/src/theme-provider/docs-provider'

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
    <DocsContext.Consumer>
        {({ toggleColorScheme, colorScheme }) => (
            <button onClick={() => toggleColorScheme()}>
                Cool ts button with {colorScheme} theme
            </button>
        )}
    </DocsContext.Consumer>

)
