import React, { useRef } from 'react'
import { useHotkeys } from '@mantine/hooks'
import { Autocomplete, Kbd, MediaQuery } from '@mantine/core'
import { Search as SearchIcon } from 'tabler-icons-react'
import i18next from 'i18next'

import { HotKeys } from '../../hotkeys'

export const Search = (): JSX.Element => {
    const ref = useRef<HTMLInputElement>(null)

    useHotkeys([[HotKeys.openSearch, (): void => ref.current?.focus()]])

    return (
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <Autocomplete
                ref={ref}
                placeholder={`${i18next.t('search.placeholder')} ${HotKeys.openSearch}`}
                rightSection={<Kbd>{HotKeys.openSearch}</Kbd>}
                rightSectionWidth={60}
                icon={<SearchIcon size={16} />}
                data={['React', 'Angular', 'Svelte', 'Vue']}
                transition="pop-top-left"
                transitionDuration={80}
                transitionTimingFunction="ease"
            />
        </MediaQuery>
    )
}
