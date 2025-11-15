class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function reverseList(head) {
    let prev = null;

    while (head) {
        let next = head.next; // save next node
        head.next = prev;     // reverse pointer
        prev = head;          // move prev forward
        head = next;          // move head forward
    }
    return prev;
}
