interface Stack<T> {
    readonly size:number
    push(value: T):void
    pop(): T
}

type Snode<T> = {
    readonly value: T
    readonly next?: Snode<T>
}

class StackC<T> implements Stack<T> {
    private _size: number = 0;
    head? : Snode<T>;
    
    constructor(private capacity: number) {}
    get size() {
        return this._size;
    }
    push(value: T): void {
        if (this._size === this.capacity) {
            throw new Error('please make another stack. it\'s full now')
        }
        let node: Snode<T> = { value, next: this.head }
        this.head = node;
        this._size++
    }

    pop(): T {
        if (this.head == null) {
            throw new Error("it's empty now")
        }
        let node = this.head;
        let returnValue = this.head?.value
        this.head = node.next;
        this._size--;
        return returnValue
    }

}

const stack = new StackC<string>(10)
stack.push('a')
stack.push('b')
stack.push('c')

stack.pop()
stack.pop()

console.log(stack)


const stack2 = new StackC<number>(10)
stack2.push(1)
stack2.push(3)
stack2.push(4)

console.log(stack2.pop())
console.log(stack2)