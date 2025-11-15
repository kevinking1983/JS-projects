function shortestPath(graph, start, target) {
    const queue = [[start, 0]];
    const visited = new Set();

    while (queue.length) {
        const [node, dist] = queue.shift();
        if (node === target) return dist;

        if (visited.has(node)) continue;
        visited.add(node);

        for (let nei of graph[node]) {
            if (!visited.has(nei)) queue.push([nei, dist + 1]);
        }
    }
    return -1; // no path
}
