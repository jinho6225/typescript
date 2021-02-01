interface Queue {
    readonly size: number
    dequeue(): string
    enqueue(value: string): void
}

type QueueNode = {
    readonly value: string
    readonly next?: QueueNode
}

class QueueImpl implements Queue {
    private _size: number = 0;

    get size() {
        return this._size;
    }
    
    dequeue(): string {

        return ''
    }

    enqueue(value: string): void {

    }

}

const QueueNode = new QueueImpl()



