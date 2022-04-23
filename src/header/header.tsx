import React from 'react'
import { Link } from 'react-router-dom'
import {
    Anchor,
    MediaQuery,
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
import { Logo } from './logo'
import { ThemeSwitcher } from './theme-switcher'
import { useHeaderStyles } from './header.style'

export const Header = (): JSX.Element => {
    const { colorScheme } = useMantineColorScheme()
    const color = colorScheme === 'dark' ? 'gray' : 'blue'

    const { classes } = useHeaderStyles()

    return (
        <header>
            <div className={classes.inner}>
                <Logo />
                <Group>
                    <Search />
                    <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
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
                    </MediaQuery>
                    <ThemeSwitcher />
                </Group>
            </div>
            <Divider />
        </header>
    )
}
