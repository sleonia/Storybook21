import React from 'react'
import { MediaQuery, Group, Kbd } from '@mantine/core'

import { Logo } from '../../components'

export const LogoBlock = (): JSX.Element => (
    <MediaQuery
        smallerThan="sm"
        styles={{
            justifyContent: 'center',
            width: '100%'
        }}
    >
        <Group>
            <MediaQuery smallerThan="sm" styles={{ width: '100%', justifyContent: 'center' }}>
                <Group>
                    <Logo />
                </Group>
            </MediaQuery>
            <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                <Kbd>{process.env.VERSION}</Kbd>
            </MediaQuery>
        </Group>
    </MediaQuery>
)
