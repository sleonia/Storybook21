import type { CSSProperties } from 'react'

export const HEADER_HEIGHT = '60px'
export const SIDEBAR_WIDTH = '260px'

export const THEMES = {
    light: 'light',
    dark: 'dark'
} as const

export const ScrollStyles: CSSProperties = {
    height: `calc(100vh - ${HEADER_HEIGHT} - 1px)`
}
