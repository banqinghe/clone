import babel from '@rollup/plugin-babel';
import pkg from '../package.json' with { type: 'json'};

export const banner = `/*!
* ${pkg.name} ${pkg.version}
* Licensed under MIT
*/
`;

export function getCompiler(opt) {
    return babel({
        babelrc: false,
        presets: [
            [
                '@babel/preset-env',
                {
                    targets: {
                        browsers: 'last 2 versions, > 1%, ie >= 8, Chrome >= 45, safari >= 10',
                        node: '0.12',
                    },
                    modules: false,
                    loose: true,
                },
            ],
        ],
        babelHelpers: 'runtime',
        plugins: [
            [
                '@babel/plugin-transform-runtime',
                {
                    corejs: '3',
                }
            ]
        ],
        exclude: 'node_modules/**',
    });
}
