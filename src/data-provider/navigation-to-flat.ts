import type { Navigation } from '../../@types'

import type { Require } from './types'

const requireCwd = (require as unknown as Record<'context', (path?: string) => Require>).context(process.env.CWD_STORYBOOK)

export const navigationToFlat = (navigation: Array<Navigation> = [], parentLink = '') => navigation.reduce((memo, branch) => {
    branch.link = parentLink + branch.link

    if (branch.mdx) {
        branch.mdx = requireCwd(branch.mdx).default
    }

    return [...memo, branch, ...navigationToFlat(branch.children, branch.link)]
}, [])
