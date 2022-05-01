import omit from 'lodash.omit'

import type { Navigation } from '../../@types'

import type { Require, NavigationFlat } from './types'

const requireCwd = (require as unknown as Record<'context', (path?: string) => Require>).context(process.env.CWD_STORYBOOK)

export const navigationToFlat = (
    navigation: Array<Navigation> = [],
    parentLink = ''
): Array<NavigationFlat> => navigation.reduce((memo, branch) => {
    const newBranch = omit(branch, 'mdx') as NavigationFlat
    newBranch.link = parentLink + branch.link

    if (branch.mdx) {
        newBranch.mdx = requireCwd(branch.mdx).default as unknown as NavigationFlat['mdx']
    }

    memo.push(newBranch, ...navigationToFlat(branch.children, branch.link))

    return memo
}, [] as Array<NavigationFlat>)
