import { defineConfig } from 'rollup';
import { banner, getCompiler } from './rollup.js';

export default defineConfig({
    input: 'src/index.js',
    output: {
        file: 'dist/index.esm.js',
        format: 'es',
        banner,
    },
    plugins: [getCompiler()],
});
