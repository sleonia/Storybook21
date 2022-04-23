import React from 'react'
import i18next from 'i18next'
import { Link } from 'react-router-dom'
import {
    Anchor,
    Group,
    Title,
    ThemeIcon
} from '@mantine/core'
import { Rocket } from 'tabler-icons-react'

import { useLogoStyles } from './logo.styles'

export const Logo = (): JSX.Element => {
    const { classes } = useLogoStyles()

    return (
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
    )
}
