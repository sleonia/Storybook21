import type { Navigation } from '../../@types'

export type Require = (path?: string) => Record<'default', Record<string, unknown>>

export type NavigationFlat = Omit<Navigation, 'mdx'> & {
    mdx?: (props: unknown) => JSX.Element
}

export type DataContextType = {
    navigation: Array<Navigation>
    navigationFlat: Array<NavigationFlat>
}
