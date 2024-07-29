import globals from 'globals';
import js from '@eslint/js';

export default [
    {
        languageOptions: { globals: globals.browser },
        files: [
            '**/*.js',
        ],
        rules: {
            ...js.configs.recommended.rules,
        }
    },
    {
        ignores: [
            'dist/*',
        ],
    }
];
