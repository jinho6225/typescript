interface Stack {
    readonly size:number;
    push(value: string):void;
    pop(): string
}

type SNode = {
    readonly value: string;
    readonly next?: SNode;
}

class StackC implements Stack {
    private _size: number = 0;
    head? : SNode;
    
    constructor(private capacity: number) {}
    get size() {
        return this._size;
    }
    push(value): void {
        if (this._size === this.capacity) {
            throw new Error('please make another stack. it\'s full now')
        }
        let node: SNode = { value, next: this.head }
        this.head = node;
        this._size++
    }

    pop(): string {
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

const stack = new StackC(10)
stack.push('a')
stack.push('b')
stack.push('c')

stack.pop()
stack.pop()


console.log(stack)