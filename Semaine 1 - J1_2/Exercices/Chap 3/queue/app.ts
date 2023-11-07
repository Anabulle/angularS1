class Queue<T>{
    private queue: T[] = [];

    set _queue(queue: T[]) {
        this._queue = queue;
    }

    get _queue(): T[] {
        return this._queue;
    }
}


let queue = new Queue<number>();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);

console.log(queue.pop()) // affiche 1

let queueArray = new Queue<number[]>();
queueArray.push([1, 2]);
queueArray.push([3, 4]);
queueArray.push([5, 6]);
queueArray.push([7, 8]);

console.log(queueArray.pop()); // affiche [1,2]