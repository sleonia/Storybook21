import React from 'react'
import { MediaQuery, Group, Kbd } from '@mantine/core'

import { Logo } from '../../components'

import {
    LogoMediaStyles,
    LogoBlockMediaStyles,
    KbdMediaStyles
} from './logo-block.style'

export const LogoBlock = (): JSX.Element => (
    <MediaQuery
        smallerThan="sm"
        styles={LogoBlockMediaStyles}
    >
        <Group>
            <MediaQuery smallerThan="sm" styles={LogoMediaStyles}>
                <Group>
                    <Logo />
                </Group>
            </MediaQuery>
            <MediaQuery smallerThan="sm" styles={KbdMediaStyles}>
                <Kbd>{WEBPACK_ALIAS_VERSION}</Kbd>
            </MediaQuery>
        </Group>
    </MediaQuery>
)
