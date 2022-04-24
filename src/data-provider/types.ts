import type { Navigation } from '../../@types'

export type Require = (path?: string) => Record<'default', Record<string, unknown>>

export type DataContextType = {
    navigation: Array<Navigation>
    // FIXME на самом деле другой тип
    navigationFlat: Array<Navigation>
}
