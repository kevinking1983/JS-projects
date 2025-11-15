function reverseArray(arr) {
    let l = 0, r = arr.length - 1;
    while (l < r) {
        [arr[l], arr[r]] = [arr[r], arr[l]];
        l++; r--;
    }
    return arr;
}
