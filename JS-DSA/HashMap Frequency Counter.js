function frequencyMap(arr) {
    const map = new Map();
    for (let x of arr) {
        map.set(x, (map.get(x) || 0) + 1);
    }
    return map;
}

console.log(frequencyMap(["a","b","a","c"])); 
