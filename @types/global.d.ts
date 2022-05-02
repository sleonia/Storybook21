import type { DataComponents } from '../bin/utils/generate-documentation'

import type { Navigation } from './index.d'

declare global {
    const WEBPACK_ALIAS_VERSION: string
    const WEBPACK_ALIAS_NAVIGATION: Array<Navigation>
    const WEBPACK_ALIAS_CWD: string
    const WEBPACK_ALIAS_CWD_STORYBOOK: string
    const WEBPACK_ALIAS_COMPONENTS_DOCUMENTATION: DataComponents
}
