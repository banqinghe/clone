import { defineConfig } from 'rollup';
import { banner, getCompiler } from './rollup.js';

export default defineConfig({
    input: 'src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
        banner
    },
    plugins: [getCompiler()],
});
