function topologicalSort(graph) {
    const indegree = {};
    const queue = [];
    const result = [];

    // initialize indegree
    for (let node in graph) {
        indegree[node] = 0;
    }

    // calculate indegree
    for (let node in graph) {
        for (let nei of graph[node]) {
            indegree[nei]++;
        }
    }

    // push nodes with indegree 0
    for (let node in indegree) {
        if (indegree[node] === 0) queue.push(node);
    }

    // BFS
    while (queue.length) {
        let node = queue.shift();
        result.push(node);

        for (let nei of graph[node]) {
            indegree[nei]--;
            if (indegree[nei] === 0) queue.push(nei);
        }
    }

    return result;
}
