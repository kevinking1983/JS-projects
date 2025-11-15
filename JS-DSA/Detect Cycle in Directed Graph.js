function hasCycleDirected(graph) {
    const visited = new Set();
    const inStack = new Set();

    function dfs(node) {
        if (inStack.has(node)) return true;
        if (visited.has(node)) return false;

        visited.add(node);
        inStack.add(node);

        for (let nei of graph[node]) {
            if (dfs(nei)) return true;
        }

        inStack.delete(node);
        return false;
    }

    for (let node in graph) {
        if (dfs(node)) return true;
    }
    return false;
}
