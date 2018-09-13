/**
 * @param {Array<Object>} arr - this is an array of objects
 * @return {Array} result of the sum value.
 * @example
 * const arr = [{flags: [1, 2, 3]}, {flags: [4, 5, 6]}];
 * getFlags(arr); // [1, 2, 3, 4, 5, 6]
 */
const getFlags = arr => {
    let arr1 = arr[0];
    let arr2 = arr[1];

    let res = (arr1.values()).concat((arr2.values()));
    return res;
};

export default getFlags;
