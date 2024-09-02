export default function type(source) {
    const t = typeof source;

    if (source === null) {
        return 'null';
    }

    if (t !== 'object') {
        return t;
    }

    const innerType = Object.prototype.toString.call(source).slice(8, -1);
    const innerTypeLowerCase = innerType.toLowerCase();

    if (innerTypeLowerCase !== 'object') {
        if (['Boolean', 'Number', 'String'].includes(innerType)) {
            return innerType;
        }
        return innerTypeLowerCase;
    }

    if (source.constructor === Object) {
        return innerTypeLowerCase;
    }

    if (typeof source?.constructor?.name === 'string') {
        return source.constructor.name;
    }

    return 'unknown';
}
