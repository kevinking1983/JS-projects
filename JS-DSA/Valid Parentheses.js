function isValid(str) {
    const stack = [];
    const map = { ')': '(', '}': '{', ']': '[' };

    for (let ch of str) {
        if (map[ch]) {
            if (stack.pop() !== map[ch]) return false;
        } else {
            stack.push(ch);
        }
    }
    return stack.length === 0;
}
