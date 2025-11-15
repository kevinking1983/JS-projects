function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(a, b) {
    let i = 0, j = 0, res = [];

    while (i < a.length && j < b.length) {
        res.push(a[i] < b[j] ? a[i++] : b[j++]);
    }
    return [...res, ...a.slice(i), ...b.slice(j)];
}

console.log(mergeSort([4,3,2,1]));
