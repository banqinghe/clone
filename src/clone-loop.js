import type from './type';

/** 支持循环引用 */
export default function cloneForce(source) {
    const root = {};

    const loopList = [
        {
            parent: root,
            key: undefined,
            data: source,
        },
    ];

    while (loopList.length) {
        const node = loopList.pop();
        const { parent, key, data } = node;

        let res = parent;
        if (typeof key !== 'undefined') {
            res = parent[key] = {};
        }

        for (const [k, v] of Object.entries(data)) {
            if (type(v) === 'object') {
                loopList.push({
                    parent: res,
                    key: k,
                    data: v,
                });
            } else {
                res[k] = v;
            }
        }
    }

    return root;
}
