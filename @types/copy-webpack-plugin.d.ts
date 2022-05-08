// because we use non latest version
declare module 'copy-webpack-plugin' {
    import type { Compiler } from 'webpack'

    declare class CopyPlugin {
        constructor (options: { patterns?: unknown })

        apply (compiler: Compiler): void;
    }

    export = CopyPlugin
}
