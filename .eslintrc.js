module.exports = {
    parser: '@babel/eslint-parser',
    parserOptions: {
        requireConfigFile: false
    },
    extends: '@sbol/eslint-config',
    settings: {
        'import/resolver': {
            webpack: {
                config: './webpack.config.ts',
                extensions: ['.js', '.ts', '.tsx', '.jsx', '.json']
            }
        }
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: './tsconfig.json'
            },
            rules: {
                '@typescript-eslint/no-confusing-void-expression': 'off',
                'react/jsx-no-bind': 'off'
            }
        },
        {
            files: ['**/*.spec.ts', '**/*.spec.tsx', '**/*.test.ts', '**/*.test.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: './tsconfig.json'
            }
        }
    ]
}
