import { defineConfig } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import { banner, getCompiler } from './rollup.js';

export default defineConfig({
    input: 'src/index.js',
    output: {
        file: 'dist/index.aio.js',
        format: 'umd',
        name: 'clone',
        banner,
    },
    plugins: [
        getCompiler(),
        nodeResolve({}),
        commonjs(),
    ],
});
