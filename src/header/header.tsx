import React from 'react'
import {
    Anchor,
    MediaQuery,
    Group,
    Divider
} from '@mantine/core'
import { BrandGithub } from 'tabler-icons-react'
import i18next from 'i18next'

import { Search } from './search'
import { LogoBlock } from './logo-block'
import { ThemeSwitcher } from './theme-switcher'
import { useHeaderStyles } from './header.style'

export const Header = (): JSX.Element => {
    const { classes } = useHeaderStyles()

    return (
        <header>
            <div className={classes.inner}>
                <LogoBlock />
                <Group>
                    <Search />
                    <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                        <Anchor
                            component="a"
                            color="blue"
                            className={classes.githubLink}
                            href={i18next.t('github.project.link')}
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
