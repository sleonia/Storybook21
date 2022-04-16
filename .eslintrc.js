module.exports = {
    parser: '@babel/eslint-parser',
    parserOptions: {
        requireConfigFile: false
    },
    // extends: '@sbol/eslint-config',
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                // project: './tsconfig.eslint.json'
            }
        },
        {
            files: ['**/*.spec.ts', '**/*.spec.tsx', '**/*.test.ts', '**/*.test.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                // project: './tsconfig.eslint.json'
            }
        }
    ]
}
