interface Stack<T> {
    readonly size: number
    pop(): T;
    push(value: T): void
}

type StackNode<T> = {
    readonly value: T
    readonly next?: StackNode<T>
}

class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    private head?: StackNode<T>;

    constructor(private capacity: number) {}
    get size() {
        return this._size;
    }

    pop(): T {
        if (this.head == null) {
            throw new Error('stack is empty now')
        }
        const node = this.head;
        this.head = node.next;
        this._size--
        return node?.value;
    }

    push(value: T): void {
        if (this.size === this.capacity) {
            throw new Error('stack is full!')
        }
        const node = { value, next: this.head }
        this.head = node
        this._size++
    }
}

const stack = new StackImpl<string>(10)
stack.push('jinho')
stack.push('hogeon')
stack.push('jiyeon')

console.log(stack.pop())
console.log(stack)

const stack2 = new StackImpl<number>(10)
stack2.push(1)
stack2.push(3)
stack2.push(4)

console.log(stack2.pop())
console.log(stack2)