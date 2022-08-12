class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
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
            this.head.prev = node;
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
            node.prev = this.tail;
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

    // * Remove a node at the end, Big-O = O(1)
    removeFromEnd() {
        if (this.isEmpty()) {
            return null;
        }
        const value = this.tail.value;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.size--;
        return value;
    }

    // * Print the list, Big-O = O(n)
    print() {
        if (this.isEmpty()) {
            console.log('List is empty');
        } else {
            let curr = this.head;
            let list = '';
            while (curr) {
                list += `${curr.value}<->`;
                curr = curr.next;
            }
            console.log(list);
        }
    }

    // * Print the reversed list, Big-O = O(n)
    printReverse() {
        if (this.isEmpty()) {
            console.log('List is empty');
        } else {
            let curr = this.tail;
            let list = '';
            while (curr) {
                list += `${curr.value}<->`;
                curr = curr.prev;
            }
            console.log(list);
        }
    }
}

const list = new DoublyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
list.print();
list.printReverse();
list.removeFromEnd();
list.print();
list.removeFromFront();
list.print();
