import React from 'react'
import { Link } from 'react-router-dom'
import {
    Anchor,
    useMantineColorScheme,
    Group,
    Kbd,
    Title,
    ThemeIcon,
    Divider
} from '@mantine/core'
import { BrandGithub, BrandCodesandbox } from 'tabler-icons-react'
import i18next from 'i18next'

import { Search } from './search'
import { ThemeSwitcher } from './theme-switcher'
import { useHeaderStyles } from './header.style'

export const Header = (): JSX.Element => {
    const { colorScheme } = useMantineColorScheme()
    const color = colorScheme === 'dark' ? 'gray' : 'blue'

    const { classes } = useHeaderStyles()

    return (
        <header>
            <div className={classes.inner}>
                <Group>
                    <Group>
                        <Anchor
                            className={classes.logo}
                            component={Link}
                            hrefLang="/"
                            to="/"
                        >
                            <ThemeIcon className={classes.logoIcon}>
                                <BrandCodesandbox size={36} />
                            </ThemeIcon>
                            <Title order={4}>{i18next.t('title')}</Title>
                        </Anchor>
                    </Group>
                    {process.env.VERSION && <Kbd color={color}>{process.env.VERSION}</Kbd>}
                </Group>
                <Group>
                    <Search />
                    <Anchor
                        component="a"
                        color={color}
                        className={classes.githubLink}
                        href={i18next.t('github.link')}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BrandGithub size={28} />
                    </Anchor>
                    <ThemeSwitcher />
                </Group>
            </div>
            <Divider />
        </header>
    )
}
