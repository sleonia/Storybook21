import React from 'react'

export type TitledProps = {
    title: string
    children: React.ReactNode
    description?: string
}

export const Titled = ({ title, children, description }: TitledProps): JSX.Element => (
    <div>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
        {children}
    </div>
)
