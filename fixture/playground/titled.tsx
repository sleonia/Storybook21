import React from 'react'

export type TitledProps = {
    title: string
    children: React.ReactNode
}

export const Titled = ({ title, children }: TitledProps): JSX.Element => (
    <div>
        <h1>{title}</h1>
        {children}
    </div>
)
