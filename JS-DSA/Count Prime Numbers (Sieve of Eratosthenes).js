function countPrimes(n) {
    if (n <= 2) return 0;

    let prime = Array(n).fill(true);
    prime[0] = prime[1] = false;

    for (let i = 2; i * i < n; i++) {
        if (prime[i]) {
            for (let j = i * i; j < n; j += i) {
                prime[j] = false;
            }
        }
    }
    return prime.filter(p => p).length;
}

console.log(countPrimes(20)); // 8
