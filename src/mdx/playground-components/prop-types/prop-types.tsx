import React from 'react'
import { Title, Table, Text, Space, Code } from '@mantine/core'
import i18next from 'i18next'

import { usePropTypesStyles } from './prop-types.style'
import type { PropsTypesProps } from './types'

export const PropTypes = ({ displayName }: PropsTypesProps): JSX.Element => {
    const { classes } = usePropTypesStyles()

    if (!displayName) {
        return <></>
    }

    const componentInfo = WEBPACK_DEFINE_COMPONENTS_DOCUMENTATION[displayName]

    if (!componentInfo) {
        /* comment: Show logs */
        /* eslint-disable-next-line no-console */
        console.warn(
            `%cNo info about ${displayName}`,
            'color: #aa00ff; font-style: italic; background-color: #c8ff00;padding: 2px'
        )
        return <></>
    }

    const { props = {} } = componentInfo

    return (
        <div className={classes.wrapper}>
            <Title order={2}>{i18next.t('props-table.title', { displayName })}</Title>
            <Space h="lg" />
            <Table highlightOnHover>
                <thead>
                    <tr>
                        <th>
                            <Text>{i18next.t('props-table.heading.name')}</Text>
                        </th>
                        <th>
                            <Text>{i18next.t('props-table.heading.type')}</Text>
                        </th>
                        <th>
                            <Text>{i18next.t('props-table.heading.default-value')}</Text>
                        </th>
                        <th>
                            <Text>{i18next.t('props-table.heading.description')}</Text>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(props).map(([key, prop]) => {
                        const defaultValue = (prop.defaultValue as Record<'value', string | undefined> | undefined)?.value
                        return (
                            <tr key={key}>
                                <td>
                                    <Code color="blue">{key}</Code>
                                </td>
                                <td>
                                    <Code>
                                        {prop.type.name}
                                    </Code>
                                </td>
                                <td>
                                    {prop.required
                                        ? <Code color="red">{i18next.t('props-table.required')}</Code>
                                        : defaultValue && <Code>{defaultValue}</Code>
                                    }
                                </td>
                                <td>
                                    {prop.description}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}
