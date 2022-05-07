import React from 'react'
import { ThemeIcon, Center, Stack, Text, Accordion, Paper, MediaQuery } from '@mantine/core'
import Error404 from 'tabler-icons-react/dist/icons/error-404'
import i18next from 'i18next'

import { ExternalLink } from '../components'

import { MobileStyles, use404Styles } from './404.style'

export const NotFound = (): JSX.Element => {
    const { classes } = use404Styles()

    return (
        <Center component="main">
            <MediaQuery smallerThan="sm" styles={MobileStyles}>
                <Paper shadow="sm" p={40} className={classes.paper}>
                    <Stack spacing="xs">
                        <Center>
                            <ThemeIcon size={300}>
                                <Error404 size={300} strokeWidth={2} />
                            </ThemeIcon>
                        </Center>
                        <Text align="center" size="lg" weight={700}>{i18next.t('404.title')}</Text>
                        <Text align="center" size="md">{i18next.t('404.description')}</Text>
                        <Accordion className={classes.accordeon}>
                            <Accordion.Item label={i18next.t('404.reward')}>
                                <ExternalLink p={0} href={i18next.t('cat-geneator.href')}>
                                    <Text size="md">{i18next.t('cat-geneator.title')}</Text>
                                </ExternalLink>
                            </Accordion.Item>
                        </Accordion>
                    </Stack>
                </Paper>
            </MediaQuery>
        </Center>
    )
}
