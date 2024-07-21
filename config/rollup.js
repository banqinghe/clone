import pkg from '../package.json' with { type: 'json' };

export const banner = `/*!
* ${pkg.name} ${pkg.version}
* Licensed under MIT
*/
`;
