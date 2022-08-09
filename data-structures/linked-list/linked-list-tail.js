class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // * Check if the list is empty, Big-O = O(1)
    isEmpty() {
        return this.size === 0;
    }

    // * Get the size of the list, Big-O = O(1)
    getSize() {
        return this.size;
    }

    // * Add a node to the beginning of the list, Big-O = O(1)
    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    // * Add a node to the end of the list, Big-O = O(1)
    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    // * Remove a node at the front, Big-O = O(1)
    removeFromFront() {
        if (this.isEmpty()) {
            return null;
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.size--;
        return value;
    }

    // * Remove a node at the end, Big-O = O(n)
    removeFromEnd() {
        if (this.isEmpty()) {
            return null;
        }
        const value = this.tail.value;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let prev = this.head;
            while (prev.next !== this.tail) {
                prev = prev.next;
            }
            prev.next = null;
            this.tail = prev;
        }
        this.size--;
        return value;
    }

    // * Reverse the list, Big-O = O(n)
    reverse() {
        let current = this.head;
        let prev = null;
        let next = null;
        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.tail = this.head;
        this.head = prev;
    }

    // * Print the list, Big-O = O(n)
    print() {
        if (this.isEmpty()) {
            console.log('List is empty');
        } else {
            let curr = this.head;
            let list = '';
            while (curr) {
                list += `${curr.value}->`;
                curr = curr.next;
            }
            console.log(list);
        }
    }
}

module.exports = LinkedList;

/** Uncomment when testing only this file */

// const list = new LinkedList();
// list.append(1);
// list.append(2);
// list.append(3);
// list.prepend(0);
// list.print();
// console.log(list.getSize());
// list.removeFromFront();
// list.print();
// list.removeFromEnd();
// list.print();
