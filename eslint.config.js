import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';

console.log(stylistic.configs.customize({
    indent: 4,
    jsx: false,
    semi: true,
    singleQuote: true,
}).rules);

export default [
    {
        languageOptions: { globals: globals.browser },
        ...stylistic.configs.customize({
            indent: 4,
            jsx: false,
            semi: true,
            singleQuote: true,
        }),
    },
    {
        ignores: [
            'dist/*',
        ],
    },
];
