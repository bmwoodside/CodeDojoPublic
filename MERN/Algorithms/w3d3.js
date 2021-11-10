class SLList {
    constructor (){
        this.head = null;
        this.tail = null;
    }

    // push to the list based on priority of the node
    push(val, priority){
        let newNode = new SLNode(val, priority);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        }
        else if(newNode.priority < this.head.priority){
            newNode.next = this.head;
            this.head = newNode;
        }
        else{
            let temp = this.head;
            while(temp.next !== null && newNode.priority >= temp.next.priority){
                temp = temp.next;
            }
            newNode.next = temp.next;
            temp.next = newNode;
        }
        return this;
    }

    pop(){
        if(this.head === null){
            return null;
        }
        let temp = this.head;
        this.head = this.head.next;
        return temp;
    }

}

class SLNode {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
        this.next = null;
    }
}

let SLL = new SLList();
console.log(SLL.push(1, 5));
console.log(SLL.push(1, 1));
console.log(SLL.push(1, 3));
console.log(SLL.push(1, 10));

console.log(SLL.pop());

console.log(SLL);