interface Queue {
    readonly size: number
    dequeue(): string
    enqueue(value: string): void
}

type QueueNode = {
    readonly value: string;
    next?: QueueNode;
}

class QueueImpl implements Queue {
    private _size: number = 0;
    private head?: QueueNode;
    private tail?: QueueNode;

    constructor(private capacity: number) {}
    get size() {
        return this._size;
    }

    dequeue(): string {
        if (this.head == null) {
            throw new Error('queue is empty now')
        }
        const node = this.head;
        this.head = node.next;
        this._size--
        return node?.value
    }

    enqueue(value: string): void {
        if (this.size === this.capacity) {
            throw new Error('stack is full!')
        }
        const node: QueueNode = { value, next: undefined }        
        if (this.head == null) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node;
            this.tail = node
        }
        this._size++
    }
}

const queueNode = new QueueImpl(10)
queueNode.enqueue('jinho')
queueNode.enqueue('jiyeon')
queueNode.enqueue('hogeon')
console.log(queueNode.dequeue())

console.log(queueNode, 'queueNode');

//FIFO => first input first out
//                                           tail ->
// head -> {value:jinho, next:{value:jiyeon, next:{value:hogeon, next:null}}}

//                             tail ->
// head -> {value:jiyeon, next:{value:hogeon, next:null}}
