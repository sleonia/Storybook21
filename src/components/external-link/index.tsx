import React from 'react'
import type { PropsWithChildren } from 'react'
import { Anchor } from '@mantine/core'

import type { ExtrernalLinkProps } from './types'

export const ExtrernalLink = ({
    href,
    color,
    className,
    children
}: PropsWithChildren<ExtrernalLinkProps>): JSX.Element => (
    <Anchor
        component="a"
        color={color}
        className={className}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
    >
        {children}
    </Anchor>
)
