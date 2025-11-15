class UnionFind {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.rank = Array(n).fill(0);
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]); // path compression
        }
        return this.parent[x];
    }

    union(a, b) {
        let pa = this.find(a), pb = this.find(b);
        if (pa === pb) return false; // cycle found

        if (this.rank[pa] < this.rank[pb]) {
            this.parent[pa] = pb;
        } else if (this.rank[pb] < this.rank[pa]) {
            this.parent[pb] = pa;
        } else {
            this.parent[pb] = pa;
            this.rank[pa]++;
        }
        return true;
    }
}
