interface Stack {
    readonly size: number
    pop(): string
    push(value: string): void
}

type StackNode = {
    readonly value: string
    readonly next?: StackNode
}

class StackImpl implements Stack {
    private _size: number = 0;
    private head?: StackNode;

    constructor(private capacity: number) {}
    get size() {
        return this._size;
    }

    pop(): string {
        if (this.head == null) {
            throw new Error('stack is empty now')
        }
        const node = this.head;
        this.head = node.next;
        this._size--
        return node?.value;
    }

    push(value: string): void {
        if (this.size === this.capacity) {
            throw new Error('stack is full!')
        }
        const node: StackNode = { value, next: this.head }
        this.head = node
        this._size++
    }
}

const stack = new StackImpl(10)
stack.push('jinho')
stack.push('hogeon')
stack.push('jiyeon')

console.log(stack.pop())
console.log(stack)

//this.head -> { value: jiyeon, next: { value: hogeon, next: { value:jinho, null}}}
// this.head -> { value: hogeon, next: { value:jinho, null}}
//  this.head -> { value: jinho, next: null}