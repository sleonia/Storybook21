import React from 'react'
import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import MoonStars from 'tabler-icons-react/dist/icons/moon-stars'
import Sun from 'tabler-icons-react/dist/icons/sun'
import i18next from 'i18next'

import { capitalize } from '../utils'

export const ThemeSwitcher = (): JSX.Element => {
    /* comment: eslint error */
    /* eslint-disable-next-line @typescript-eslint/unbound-method */
    const { colorScheme, toggleColorScheme } = useMantineColorScheme()
    const isDark = colorScheme === 'dark'

    return (
        <ActionIcon
            variant="transparent"
            color="blue"
            onClick={(): void => {
                toggleColorScheme()
            }}
            title={i18next.t('theme-switch', { colorScheme: capitalize(colorScheme) })}
        >
            {isDark ? <Sun size={36} /> : <MoonStars size={36} />}
        </ActionIcon>
    )
}
