import React from 'react'
import i18next from 'i18next'
import { Stack, Container, Text, Divider, Group } from '@mantine/core'

import { ExtrernalLink, Logo } from '../../components'

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
                                <ExtrernalLink href={i18next.t('footer.about.contribute.href')}>
                                    <Text size="sm">{i18next.t('footer.about.contribute')}</Text>
                                </ExtrernalLink>
                            </Stack>
                            <Stack spacing="xs">
                                <Text weight={700}>{i18next.t('footer.community.title')}</Text>
                                <ExtrernalLink href={i18next.t('github.me.link')}>
                                    <Text size="sm">{i18next.t('footer.community.follow-me-github')}</Text>
                                </ExtrernalLink>
                            </Stack>
                            <Stack spacing="xs">
                                <Text weight={700}>{i18next.t('footer.project.title')}</Text>
                                <div>
                                    <ExtrernalLink href={i18next.t('footer.project.documentation.href')}>
                                        <Text size="sm">{i18next.t('footer.project.documentation')}</Text>
                                    </ExtrernalLink>
                                    <ExtrernalLink href={i18next.t('footer.project.npm.href')}>
                                        <Text size="sm">{i18next.t('footer.project.npm')}</Text>
                                    </ExtrernalLink>
                                </div>
                            </Stack>
                        </Group>
                    </Group>
                    <Divider />
                    <ExtrernalLink href={i18next.t('github.me.link')}>
                        <Text size="sm" color="gray" underline>{i18next.t('footer.build-by')}</Text>
                    </ExtrernalLink>
                </Stack>
            </Container>
        </footer>
    )
}
