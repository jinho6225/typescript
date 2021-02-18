interface Queue<T> {
    readonly size: number
    dequeue(): T
    enqueue(value: T): void
}

type QueueNode<T> = {
    readonly value: T;
    next?: QueueNode<T>;
}

class QueueImpl<T> implements Queue<T> {
    private _size: number = 0;
    private head?: QueueNode<T>;
    private tail?: QueueNode<T>;

    constructor(private capacity: number) {}
    get size() {
        return this._size;
    }

    dequeue(): T {
        if (this.head == null) {
            throw new Error('queue is empty now')
        }
        const node = this.head;
        this.head = node.next;
        this._size--
        return node?.value
    }

    enqueue(value: T): void {
        if (this.size === this.capacity) {
            throw new Error('stack is full!')
        }
        const node = { value, next: undefined }        
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

const queueNode = new QueueImpl<string>(10)
queueNode.enqueue('jinho')
queueNode.enqueue('jiyeon')
queueNode.enqueue('hogeon')
console.log(queueNode.dequeue())

console.log(queueNode, 'queueNode');

const queueNode2 = new QueueImpl<number>(10)
queueNode2.enqueue(123)
queueNode2.enqueue(456)
queueNode2.enqueue(789)
console.log(queueNode2.dequeue())

console.log(queueNode2, 'queueNode');

//FIFO => first input first out
//                                           tail ->
// head -> {value:jinho, next:{value:jiyeon, next:{value:hogeon, next:null}}}

//                             tail ->
// head -> {value:jiyeon, next:{value:hogeon, next:null}}
