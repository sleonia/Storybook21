import React from 'react'
import i18next from 'i18next'
import { Stack, Container, Text, Divider, Anchor, Group } from '@mantine/core'

import { Logo } from '../../components'

import { useFooterStyles } from './footer.style'

export const Footer = (): JSX.Element => {
    const { classes } = useFooterStyles()
    return (
        <footer className={classes.footer}>
            <Container className={classes.inner}>
                <Stack spacing="sm">
                    <Group align="start" position="apart">
                        <Stack spacing="sm">
                            <Logo />
                            <Text size="md" color="gray">{i18next.t('footer.description')}</Text>
                        </Stack>
                        <Group className={classes.wrapper} spacing="xl">
                            <Stack spacing="xs">
                                <Text weight={700}>{i18next.t('footer.about.title')}</Text>
                                <Text size="sm">Contribute</Text>
                            </Stack>
                            <Stack spacing="xs">
                                <Text weight={700}>{i18next.t('footer.community.title')}</Text>
                                <Text size="sm">Follow on Github</Text>
                            </Stack>
                            <Stack spacing="xs">
                                <Text weight={700}>{i18next.t('footer.project.title')}</Text>
                                {/* <Stack spacing="xs"> */}
                                    <Text size="sm">Documentation</Text>
                                    <Text size="sm">npm</Text>
                                {/* </Stack> */}
                            </Stack>
                        </Group>
                    </Group>
                    <Divider />
                    <Anchor
                        component="a"
                        href={i18next.t('github.me.link')}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Text size="sm" color="gray" underline>{i18next.t('footer.build-by')}</Text>
                    </Anchor>
                </Stack>
            </Container>
        </footer>
    )
}
