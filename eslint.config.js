import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';

export default [
    {
        languageOptions: { globals: globals.browser },
        ...stylistic.configs.customize({
            indent: 4,
            jsx: false,
            semi: true,
            braceStyle: '1tbs',
        }),
    },
    {
        ignores: [
            'dist/*',
            'config/rollup.js', // Parsing error: Unexpected token with
        ],
    },
];
