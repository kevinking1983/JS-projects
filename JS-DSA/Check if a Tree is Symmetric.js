function isSymmetric(root) {
    function isMirror(a, b) {
        if (!a && !b) return true;
        if (!a || !b) return false;

        return (
            a.val === b.val &&
            isMirror(a.left, b.right) &&
            isMirror(a.right, b.left)
        );
    }
    return isMirror(root, root);
}
