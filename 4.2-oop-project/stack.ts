interface Stack {
    readonly size:number;
    push(value: string):void;
    pop(): string
}

type SNode = {
    value: string;
    next?: SNode;
}

class StackC implements Stack {
    private _size: number = 0;
    head? : SNode;
    
    constructor(dcapacity: number) {}
    get size() {
        return this._size;
    }
    push(val): void {

    }

    pop(): string {
        return ''
    }

}

const stack = new StackC(10)
console.log(stack)