module.exports = {
    env: {
        browser: true,
        es2020: true
    },
    ignorePatterns: [
        'node_modules',
        'dist',
        'vite.config.ts'
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:react/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        project: './tsconfig.json',
        sourceType: 'module'
    },
    plugins: [
        'react-refresh',
        'import'
    ],
    rules: {
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                'argsIgnorePattern': '^_',
                'varsIgnorePattern': '^_',
                'caughtErrorsIgnorePattern': '^_'
            }
        ],
        'import/order': [
            'error',
            {
                'alphabetize': {
                    'order': 'asc',
                    'caseInsensitive': true
                },
                'groups': [
                    [
                        'external',
                        'builtin'
                    ],
                    'internal',
                    [
                        'sibling',
                        'parent'
                    ],
                    'index',
                    'unknown'
                ],
                'pathGroups': [
                    {
                        'group': 'internal',
                        'pattern': '@/**/*.!(css)*(?*)'
                    },
                    {
                        'group': 'unknown',
                        'pattern': '*.{css}*(?*)',
                        'patternOptions': {
                            'matchBase': true
                        },
                        'position': 'after'
                    }
                ],
                'pathGroupsExcludedImportTypes': [],
                'warnOnUnassignedImports': true
            }
        ],
        'indent': [
            'error',
            4
        ],
        'max-len': [
            'warn',
            120
        ],
        'object-curly-spacing': [
            'error',
            'always'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'react-refresh/only-export-components': 'warn',
        'react/jsx-boolean-value': 'error',
        'react/jsx-newline': 'warn',
        'react/jsx-no-useless-fragment': 'error',
        'react/jsx-pascal-case': [
            'error',
            {'allowAllCaps': false}
        ],
        'react/jsx-sort-props': [
            'warn',
            {
                'callbacksLast': true,
                'multiline': 'last',
                'shorthandFirst': true
            }
        ],
        'react/jsx-wrap-multilines': [
            'warn',
            {
                'arrow': 'parens-new-line',
                'assignment': 'parens-new-line',
                'condition': 'parens-new-line',
                'declaration': 'parens-new-line',
                'logical': 'parens-new-line',
                'prop': 'parens-new-line',
                'return': 'parens-new-line'
            }
        ],
        'react/prefer-read-only-props': 'warn',
        'react/react-in-jsx-scope': 'off',
        'react/self-closing-comp': [
            'warn',
            {
                'component': true,
                'html': true
            }
        ],
        'sort-imports': [
            'error',
            {
                'ignoreCase': true,
                'ignoreDeclarationSort': true
            }
        ]
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': [
                '.ts',
                '.tsx'
            ]
        },
        'import/resolver': {
            typescript: true
        },
        react: {
            version: 'detect'
        }
    }
};
