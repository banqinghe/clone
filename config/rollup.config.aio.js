import { defineConfig } from 'rollup';
import nodeResolve from '@rollup/plugin-node-resolve';
import { banner } from './rollup.js';

export default defineConfig({
    input: 'index.js',
    output: {
        file: 'dist/index.aio.js',
        format: 'umd',
        name: 'clone',
        banner,
    },
    plugins: [
        nodeResolve({
            extensions: ['.js'],
        }),
    ],
});
