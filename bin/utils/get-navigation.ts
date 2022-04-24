// import fs from 'fs';
// import path from 'path';

// import type { Config } from '../../@types/index.d';

// export const getNavigation = (configProject: Config) => {

//     const getNavigationComponents = (navigation = []) => navigation.reduce((memo, branch) => {
//         const nav = branch.components
//             ? [...memo, path.resolve(configProject.componentsDir, branch.components)]
//             : memo
//         return [...nav, ...getNavigationComponents(branch.children)]
//     }, [])

//     const navigationComponents = getNavigationComponents(configProject.navigation)

//     const pathsToComponents = []

//     navigationComponents.forEach((nav) => {
//         pathsToComponents.push(...glob.sync(nav, null))
//     })

//     const dataComponents = getDataComponents(pathsToComponents)

// }
