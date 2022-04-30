import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { MediaQuery, ScrollArea, Text, Stack, Container } from '@mantine/core'

import type { Navigation } from '../../@types'
import { useDataProvider } from '../data-provider'
import { ScrollStyles } from '../constants'

import type { SidebarProps } from './types'
import {
    MobileStyles,
    useSidebarStyles
} from './sidebar.style'

const createNavigation = (navigation?: Array<Navigation>): JSX.Element => (
    <Stack component="ul">
        {navigation?.map((item) => !item.hidden && (
            <li key={item.link}>
                {item.mdx ? (
                    <Text
                        variant="link"
                        size="md"
                        component={Link}
                        to={item.link}
                        underline
                        weight={item.children && 500}
                    >
                        {item.title}
                    </Text>
                ) : (
                    <Text size="md">{item.title}</Text>
                )}
                {createNavigation(item.children)}
            </li>
        ))}
    </Stack>
)

export const Sidebar = ({ isSidebarOpened }: SidebarProps): JSX.Element => {
    const { classes } = useSidebarStyles(isSidebarOpened)
    const { navigation } = useDataProvider()
    const sidebarNavigation = useMemo(() => createNavigation(navigation), [navigation])

    return (
        <MediaQuery largerThan="sm" styles={MobileStyles}>
            <aside className={classes.sidebar}>
                <ScrollArea style={ScrollStyles}>
                    <Container
                        className={classes.container}
                        component="nav"
                        size="xs"
                        px="xs"
                    >
                        {sidebarNavigation}
                    </Container>
                </ScrollArea>
            </aside>
        </MediaQuery>
    )
}
