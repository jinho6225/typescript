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
    size: number = 0;
    head? = SNode;
    
    constructor() {}
    push(val): void {

    }

    pop(): string {
        return ''
    }

}