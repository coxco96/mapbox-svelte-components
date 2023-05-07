/* this function written by @beyonk */
export function omitUndefinedValues(object) {
    const result = {};
    for (const key in object) {
        if (object[key] !== undefined) {
            result[key] = object[key];
        }
    }
    return result;
}