import React from 'react'
import { MediaQuery, Accordion, ScrollArea, Text } from '@mantine/core'

import { useDataProvider } from '../data-provider'

import type { SidebarProps } from './types'
import {
    ScrollStyles,
    MobileStyles,
    useSidebarStyles
} from './sidebar.style'

const RENAME_ME = () => {
    const makeNavigation = (navigation: []) => {
        return <>
            {navigation.map((item) => !item.hidden && (
                <>
                    {!item.mdx && item.children.length === 0 ? (
                        <Text>{item.title}</Text>
                    ) : (
                        <Text>{item.title}</Text>
                    )}
                    {makeNavigation(item.children)}
                </>
            ))}
        </>
    }
    return makeNavigation
}

export const Sidebar = ({ isSidebarOpened }: SidebarProps): JSX.Element => {
    const { classes } = useSidebarStyles(isSidebarOpened)
    const { navigation, navigationFlat } = useDataProvider()


    return (
        <MediaQuery largerThan="sm" styles={MobileStyles}>
            <aside className={classes.sidebar}>
                <ScrollArea style={ScrollStyles}>
                    {RENAME_ME()(navigation)}
                    <Accordion multiple>
                        <Accordion.Item label="Inputs" />
                    </Accordion>
                    {/* <Accordion multiple>
                        <Accordion.Item label="Inputs">
                            <Accordion>
                                <Accordion.Item label="TextField">
                                    <Text>TextField Plain</Text>
                                    <Text>TextField Multiline</Text>
                                    <Text>TextField Masked</Text>
                                    <Text>TextField LocalPhone</Text>
                                    <Text>TextField Password</Text>
                                    <Text>TextField Counter</Text>
                                    <Text>TextField Dropdown</Text>
                                    <Text>TextField Currency Select</Text>
                                    <Text>TextField Money</Text>
                                </Accordion.Item>
                            </Accordion>
                        </Accordion.Item>
                    </Accordion> */}
                </ScrollArea>
            </aside>
        </MediaQuery>
    )
}
