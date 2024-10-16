import type from './type';

/** 在 cloneLoop 的基础上支持循环引用 */
export default function cloneForce(source) {
    // 用来去除循环引用引起的重复拷贝
    const uniqueList = [];

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

        const uniqueData = uniqueList.find(i => i.source === data);
        if (uniqueData) {
            parent[key] = uniqueData.target;
            continue;
        }

        uniqueList.push({
            target: res,
            source: data,
        });

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
