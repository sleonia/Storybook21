import React, { useRef, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useHotkeys } from '@mantine/hooks'
import { Autocomplete, Kbd, MediaQuery } from '@mantine/core'
import SearchIcon from 'tabler-icons-react/dist/icons/search'
import i18next from 'i18next'

import { HotKeys } from '../../hotkeys'
import { useDataProvider } from '../../data-provider/provider'

export const Search = (): JSX.Element => {
    const ref = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()

    const { navigationFlat } = useDataProvider()

    const linkList = useMemo(
        () => navigationFlat.reduce<Array<{ value: string; link: string }>>(
            (acc, { hidden, title, link }) => {
                if (!hidden) {
                    acc.push({
                        value: title,
                        link
                    })
                }
                return acc
            }, [])
        , [navigationFlat])

    useHotkeys([[HotKeys.openSearch, (): void => ref.current?.focus()]])

    return (
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <Autocomplete
                ref={ref}
                placeholder={`${i18next.t('search.placeholder')} ${HotKeys.openSearch}`}
                rightSection={<Kbd>{HotKeys.openSearch}</Kbd>}
                rightSectionWidth={60}
                icon={<SearchIcon size={16} />}
                data={linkList}
                onItemSubmit={({ link }): void => navigate(link)}
                transition="pop-top-left"
                transitionDuration={80}
                transitionTimingFunction="ease"
            />
        </MediaQuery>
    )
}
