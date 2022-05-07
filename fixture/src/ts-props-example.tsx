import React from 'react'
import { AppContext } from 'storybook21/src/theme-provider'

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
}: CoolTsButtonProps) => {
    return (
        <AppContext.Consumer>
            {(props) => {
                console.log('🚀 ~ file: ts-example.tsx ~ line 35 ~ props', props)
                return (
                    <button onClick={() => props.toggleColorScheme()}>Cool ts button</button>
                )
            }}
        </AppContext.Consumer>

    )
}
