import type { Navigation } from '../../@types'

import type { NavigationFlat } from './types'

type RequireCwd = Record<'context', (path?: string) => (path?: string) => Record<'default', (props: unknown) => JSX.Element>>

const requireCwd = (require as unknown as RequireCwd).context(WEBPACK_ALIAS_CWD_STORYBOOK)

export const navigationToFlat = (
    navigation: Array<Navigation> = [],
    parentLink = ''
): Array<NavigationFlat> => navigation.reduce((memo, nav) => {
    /* comment: Change link in place */
    /* eslint-disable-next-line no-param-reassign */
    nav.link = parentLink + nav.link

    if (nav.mdx) {
        /* comment: Change mdx content in place */
        /* eslint-disable-next-line no-param-reassign */
        (nav as NavigationFlat).mdx = requireCwd(nav.mdx).default
    }

    return [...memo, nav as NavigationFlat, ...navigationToFlat(nav.children, nav.link)]
}, [] as Array<NavigationFlat>)
