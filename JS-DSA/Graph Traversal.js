function bfs(graph, start) {
    const visited = new Set();
    const queue = [start];
    const order = [];

    while (queue.length) {
        const node = queue.shift();
        if (visited.has(node)) continue;

        visited.add(node);
        order.push(node);

        for (let nei of graph[node]) {
            if (!visited.has(nei)) queue.push(nei);
        }
    }

    return order;
}

// graph as adjacency list
// { A: ["B", "C"], B:["D"], ... }
