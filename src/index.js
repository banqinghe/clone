import type from './type';

export default function clone(source) {
    const t = type(source);
    if (t !== 'object' && t !== 'array') {
        return source;
    }

    let target;

    if (t === 'object') {
        target = {};
        for (const i in source) {
            if (Object.prototype.hasOwnProperty.call(source, i)) {
                target[i] = clone(source[i]);
            }
        }
    }
    else {
        target = [];
        for (const i of source) {
            target.push(clone(i));
        }
    }

    return target;
}
