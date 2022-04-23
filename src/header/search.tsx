import React, { useEffect, useState } from 'react'
import { Autocomplete, } from '@mantine/core'
import { Search as SearchIcon } from 'tabler-icons-react'
import { useHotkeys } from '@mantine/hooks'

import { HotKeys } from '../hotkeys'


export const Search = (): JSX.Element => {
    const [initiallyOpened, setInitiallyOpened] = useState(false)

    // useHotkeys([[HotKeys.openSearch, (): void => {
    //     console.log(1)
    //     setInitiallyOpened(true)
    // }]])

    console.log('🚀 ~ file: search.tsx ~ line 10 ~ initiallyOpened', initiallyOpened)

    return (
        <Autocomplete
            placeholder="Search"
            icon={<SearchIcon size={16} />}
            initiallyOpened={initiallyOpened}
            data={['React', 'Angular', 'Svelte', 'Vue']}
            transition="pop-top-left"
            transitionDuration={80}
            transitionTimingFunction="ease"
        />
    )
}
