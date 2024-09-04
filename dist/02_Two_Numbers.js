"use strict";
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 1 : val;
        this.next = next === undefined ? null : next;
    }
}
function printList(l1) {
    if (l1 != null) {
        console.log(l1.val);
        printList(l1.next);
    }
}
function addTwoNumbers(l1, l2) {
    let acc = 0;
    const raiz = new ListNode();
    let actual = raiz;
    while (l1 != null && l2 != null) {
        let value = l1.val + l2.val;
        if (acc != 0) {
            value += acc;
            acc = 0;
        }
        if (value > 9) {
            acc = Math.floor(value / 10);
            actual.val = value % 10;
        }
        else {
            actual.val = value;
        }
        if (l1.next != null) {
            const node = new ListNode();
            actual.next = node;
            actual = node;
        }
        l1 = l1.next;
        l2 = l2.next;
    }
    while (l1 != null) {
        let value = l1.val;
        if (acc != 0) {
            value += acc;
            acc = 0;
        }
        if (value > 9) {
            acc = Math.floor(value / 10);
            actual.val = value % 10;
        }
        else {
            actual.val = value;
        }
        if (l1.next != null) {
            const node = new ListNode();
            actual.next = node;
            actual = node;
        }
        l1 = l1.next;
    }
    while (l2 != null) {
        let value = l2.val;
        if (acc != 0) {
            value += acc;
            acc = 0;
        }
        if (value > 9) {
            acc = Math.floor(value / 10);
            actual.val = value % 10;
        }
        else {
            actual.val = value;
        }
        if (l2.next != null) {
            const node = new ListNode();
            actual.next = node;
            actual = node;
        }
        l2 = l2.next;
    }
    if (acc != 0) {
        const node = new ListNode();
        actual.next = node;
        actual = node;
        actual.val = acc;
    }
    return raiz;
}
const node1 = new ListNode();
node1.val = 2;
const node2 = new ListNode();
node2.val = 4;
const node3 = new ListNode();
node3.val = 3;
node1.next = node2;
node2.next = node3;
const node4 = new ListNode();
node4.val = 5;
const node5 = new ListNode();
node5.val = 6;
const node6 = new ListNode();
node6.val = 4;
node4.next = node5;
node5.next = node6;
const node = addTwoNumbers(node1, node4);
printList(node);
//# sourceMappingURL=02_Two_Numbers.js.map