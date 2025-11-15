function mergeSorted(a, b) {
    let i = 0, j = 0, out = [];
    while (i < a.length && j < b.length) {
        out.push(a[i] < b[j] ? a[i++] : b[j++]);
    }
    return [...out, ...a.slice(i), ...b.slice(j)];
}
