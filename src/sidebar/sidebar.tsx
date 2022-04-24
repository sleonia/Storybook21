import React from 'react'
import { MediaQuery, Accordion, ScrollArea, Text } from '@mantine/core'

import type { SidebarProps } from './types'
import {
    ScrollStyles,
    MobileStyles,
    useSidebarStyles
} from './sidebar.style'

export const Sidebar = ({
    isSidebarOpened
}: SidebarProps): JSX.Element => {
    const { classes } = useSidebarStyles(isSidebarOpened)

    return (
        <MediaQuery largerThan="sm" styles={MobileStyles}>
            <aside className={classes.sidebar}>
                <ScrollArea style={ScrollStyles}>
                    <Accordion multiple>
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
                    </Accordion>
                </ScrollArea>
            </aside >
        </MediaQuery>
    )
}
