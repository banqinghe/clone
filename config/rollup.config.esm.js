import { defineConfig } from 'rollup';
import { banner } from './rollup.js';

export default defineConfig({
    input: 'index.js',
    output: {
        file: 'dist/index.esm.js',
        format: 'es',
        banner,
    },
});
