import React from 'react'
import type { PropsWithChildren } from 'react'
import { Anchor } from '@mantine/core'

import type { ExternalLinkProps } from './types'

export const ExternalLink = ({
    href,
    color,
    className,
    children,
    ...rest
}: PropsWithChildren<ExternalLinkProps>): JSX.Element => (
    <Anchor
        component="a"
        color={color}
        className={className}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
    >
        {children}
    </Anchor>
)
