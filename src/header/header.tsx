import React from 'react'
import { MediaQuery, Group, Divider, Burger } from '@mantine/core'
import BrandGithub from 'tabler-icons-react/dist/icons/brand-github'
import i18next from 'i18next'

import { ExternalLink } from '../components'

import type { HeaderProps } from './types'
import { Search } from './search'
import { LogoBlock } from './logo-block'
import { ThemeSwitcher } from './theme-switcher'
import { useHeaderStyles } from './header.style'

export const Header = ({
    isSidebarOpened,
    handleSidebarOpened
}: HeaderProps): JSX.Element => {
    const { classes } = useHeaderStyles()

    return (
        <header>
            <div className={classes.inner}>
                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    <Burger
                        opened={isSidebarOpened}
                        onClick={handleSidebarOpened}
                        title={i18next.t('sidebar.burger.title',
                            { mode: isSidebarOpened ? i18next.t('sidebar.open.title') : i18next.t('sidebar.close.title') }
                        )}
                    />
                </MediaQuery>
                <LogoBlock />
                <Group>
                    <Search />
                    <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                        <ExternalLink
                            color="blue"
                            className={classes.githubLink}
                            href={i18next.t('github.project.link')}
                        >
                            <BrandGithub size={28} />
                        </ExternalLink>
                    </MediaQuery>
                    <ThemeSwitcher />
                </Group>
            </div>
            <Divider />
        </header >
    )
}
