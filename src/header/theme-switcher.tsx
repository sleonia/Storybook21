import React from 'react'
import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import { Sun, MoonStars } from 'tabler-icons-react'
import i18next from 'i18next'

import { capitalize } from '../utils'


export const ThemeSwitcher = (): JSX.Element => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme()
    const isDark = colorScheme === 'dark'

    return (
        <ActionIcon
            variant="transparent"
            color={isDark ? 'gray' : 'blue'}
            onClick={(): void => {
                toggleColorScheme()
            }}
            title={i18next.t('theme-switch', { colorScheme: capitalize(colorScheme) })}
        >
            {isDark ? <Sun size={36} /> : <MoonStars size={36} />}
        </ActionIcon>
    )
}
