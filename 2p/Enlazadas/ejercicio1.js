class CircularLinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
}
const head = Symbol("head");
class CircularLinkedList {

    constructor() {
        this[head] = null;
    }

    add(data) {

        const newNode = new CircularLinkedListNode(data);

      
        if (this[head] === null) {
            this[head] = newNode;
            newNode.next = newNode;
            newNode.previous = newNode;
        } else {        

            const tail = this[head].previous;

            tail.next = newNode;
            newNode.previous = tail;
            newNode.next = this[head];
            this[head].previous = newNode;
        }
    }
}

const linkedList = new CircularLinkedList;  
linkedList.add("Skate");     
linkedList.add('COD');     
linkedList.add('Fortnite');    
console.log(linkedList);   