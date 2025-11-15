function postorderTraversal(root) {
    const res = [];

    function dfs(node) {
        if (!node) return;
        dfs(node.left);
        dfs(node.right);
        res.push(node.val);
    }

    dfs(root);
    return res;
}
