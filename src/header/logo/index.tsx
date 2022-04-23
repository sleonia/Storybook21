import React from 'react'
import { Link } from 'react-router-dom'
import {
    Anchor,
    MediaQuery,
    Group,
    Title,
    ThemeIcon,
    Kbd,
    useMantineColorScheme
} from '@mantine/core'
import { Rocket } from 'tabler-icons-react'
import i18next from 'i18next'

import { useHeaderStyles } from '../header.style'

export const Logo = (): JSX.Element => {
    const { colorScheme } = useMantineColorScheme()
    const color = colorScheme === 'dark' ? 'gray' : 'blue'
    const { classes } = useHeaderStyles()

    return (
        <MediaQuery
            smallerThan="sm"
            styles={{
                justifyContent: 'center',
                width: '100%'
            }}
        >
            <Group>
                <Group>
                    <Anchor
                        className={classes.logo}
                        component={Link}
                        hrefLang="/"
                        to="/"
                    >
                        <ThemeIcon className={classes.logoIcon}>
                            <Rocket size={36} />
                        </ThemeIcon>
                        <Title order={4}>{i18next.t('title')}</Title>
                    </Anchor>
                </Group>
                <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                    <Kbd color={color}>{process.env.VERSION}</Kbd>
                </MediaQuery>
            </Group>
        </MediaQuery>
    )
}
