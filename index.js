import { type } from '@jsmini/type';

export function clone(source) {
    const t = type(source);
    if (t !== 'object' && t !== 'array') {
        return source;
    }

    let target;

    if (t === 'object') {
        target = {};
        for (const i in source) {
            if (source.hasOwnProperty(i)) {
                target[i] = clone(source[i]);
            }
        }
    } else {
        target = [];
        for (const i of source) {
            target.push(clone(i));
        }
    }

    return target;
}

// const a = { name: 'a' };
// b = clone(a);
// b.name = 'b';
// console.log({ a: JSON.stringify(a), b: JSON.stringify(b) });
