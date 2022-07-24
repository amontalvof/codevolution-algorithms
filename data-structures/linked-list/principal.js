class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    prepend(value) {
        // * Add a node to the beginning of the list, Big-O = O(1)
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(value) {
        // * Add a node to the end of the list, Big-O = O(n)
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = node;
        }
        this.size++;
    }

    insert(value, index) {
        // * Insert a node at a given index, worst scenario Big-O = O(n)
        if (index < 0 || index > this.size) {
            return;
        }
        if (index === 0) {
            this.prepend(value);
        } else {
            const node = new Node(value);
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    removeFrom(index) {
        // * Remove a node from a given index, worst scenario Big-O = O(n)
        if (index < 0 || index >= this.size) {
            return null;
        }
        let removedNode;
        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            removedNode = prev.next;
            prev.next = removedNode.next;
        }
        this.size--;
        return removedNode.value;
    }

    print() {
        if (this.isEmpty()) {
            console.log('List is empty');
        } else {
            let curr = this.head;
            let list = '';
            while (curr) {
                list += `${curr.value} -> `;
                curr = curr.next;
            }
            console.log(list);
        }
    }
}

const l = new LinkedList();
console.log('List is empty:', l.isEmpty());
console.log('List size:', l.getSize());
l.print();
l.prepend(10);
l.print();
l.prepend(20);
l.prepend(30);
l.print();
l.append(40);
l.print();
l.append(50);
l.append(60);
l.print();
l.insert(1, 0);
l.print();
l.insert(9, 1);
l.print();
l.insert(15, 2);
l.print();
console.log('List size:', l.getSize());
console.log('Removed:', l.removeFrom(10));
console.log('Removed:', l.removeFrom(0));
console.log('Removed:', l.removeFrom(1));
console.log('List size:', l.getSize());
