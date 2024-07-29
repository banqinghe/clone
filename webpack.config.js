import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export default {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: join(dirname(fileURLToPath(import.meta.url)), 'dist'),
    },
    mode: 'none',
    resolve: {
        mainFields: ['module', 'main'],
    },
};
