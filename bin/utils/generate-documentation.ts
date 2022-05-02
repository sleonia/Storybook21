import { parse, resolve } from 'path'
import { readFileSync } from 'fs'

import { parse as parseJs, resolver as resolverJs } from 'react-docgen'
import { withDefaultConfig as withDefaultConfigTs } from 'react-docgen-typescript'
import type { ComponentDoc } from 'react-docgen-typescript'
import glob from 'glob'

import type { Navigation } from '../../@types'

import tsoptions from './tsoptions.json'

type ComponentInfo = ComponentDoc & { path: string }
export type DataComponents = Record<string, ComponentInfo | undefined>

const getPropTypes = (pathComponents: Array<string> = []): DataComponents => {
    if (!pathComponents.length) {
        return {}
    }

    return pathComponents.reduce<DataComponents>((memo, pathComponent) => {
        try {
            const file = readFileSync(pathComponent, 'utf8')
            const { ext } = parse(pathComponent)

            const [componentInfo] = ext === '.tsx'
                ? withDefaultConfigTs(tsoptions).parse(pathComponent) as Array<ComponentInfo>
                : parseJs(file, resolverJs.findAllComponentDefinitions) as Array<ComponentInfo>

            componentInfo.path = pathComponent
            /* comment: Instead of { ...memo } */
            /* eslint-disable-next-line no-param-reassign */
            memo[componentInfo.displayName] = componentInfo
            return memo
        } catch (error: unknown) {
            /* comment: Show logs */
            /* eslint-disable-next-line no-console */
            console.log(`Thrown error: ${(error as Error).message}`, pathComponent)
            return memo
        }
    }, {})
}

const getNavigationComponents = (
    componentsDir: string,
    navigation: Array<Navigation> = []
): Array<string> => navigation.reduce<Array<string>>((memo, branch) => {
    if (branch.component) {
        memo.push(resolve(componentsDir, branch.component))
    }

    memo.push(...getNavigationComponents(componentsDir, branch.children))

    return memo
}, [])

export const generateDocumentation = (
    componentsDir: string,
    navigation: Array<Navigation> = []
): DataComponents => {
    const pathsToComponents =
        getNavigationComponents(componentsDir, navigation)
            .flatMap((nav) => glob.sync(nav, void 0))

    return getPropTypes(pathsToComponents)
}
