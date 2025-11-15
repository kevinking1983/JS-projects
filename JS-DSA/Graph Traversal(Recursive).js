function dfs(graph, start) {
    const visited = new Set();
    const order = [];

    function explore(node) {
        if (visited.has(node)) return;
        visited.add(node);
        order.push(node);

        for (let nei of graph[node]) {
            explore(nei);
        }
    }

    explore(start);
    return order;
}
