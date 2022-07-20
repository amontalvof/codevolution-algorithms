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
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
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
