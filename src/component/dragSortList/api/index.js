export const deepClone = (obj) => {
    let res;
    if (typeof obj === 'object') {
        if (obj === null) {
            res = null;
        } else if (Array.isArray(obj)) {
            for (let i in obj) {
                res.push(deepClone(obj[i]));
            }
        } else if (obj.constructor === RegExp) {
            res = obj;
        } else {
            res = {}
            for (let i in obj) {
                res[i] = deepClone(obj[i]);
            }
        }

    } else {
        res = obj;
    }
    return res;
}