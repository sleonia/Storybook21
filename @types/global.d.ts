import type { DataComponents } from '../bin/utils/generate-documentation'

import type { Navigation } from './index.d'

declare global {
    const WEBPACK_DEFINE_VERSION: string
    const WEBPACK_DEFINE_NAVIGATION: Array<Navigation>
    const WEBPACK_DEFINE_CWD: string
    const WEBPACK_DEFINE_CWD_STORYBOOK: string
    const WEBPACK_DEFINE_COMPONENTS_DOCUMENTATION: DataComponents
}
