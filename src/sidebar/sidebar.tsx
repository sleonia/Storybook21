import React from 'react'
import { HEADER_HEIGHT } from '../constants'

export const Sidebar = (): JSX.Element => (
    <aside style={{
        width: '260px',
        height: `calc(100vh - ${HEADER_HEIGHT} - 1px)`,
        borderRight: '1px solid #e9ecef' // rgb(26, 27, 30)
    }}>
    </aside >
)
