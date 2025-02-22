var Queue = /** @class */ (function () {
    function Queue() {
        this.queue = [];
    }
    Object.defineProperty(Queue.prototype, "_queue", {
        get: function () {
            return this._queue;
        },
        set: function (queue) {
            this._queue = queue;
        },
        enumerable: false,
        configurable: true
    });
    Queue.prototype.push = function (a) {
        this.queue.push(a);
    };
    Queue.prototype.pop = function () {
        return this.queue.shift();
    };
    return Queue;
}());
var queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
console.log(queue.pop()); // affiche 1
var queueArray = new Queue();
queueArray.push([1, 2]);
queueArray.push([3, 4]);
queueArray.push([5, 6]);
queueArray.push([7, 8]);
console.log(queueArray.pop()); // affiche [1,2]
