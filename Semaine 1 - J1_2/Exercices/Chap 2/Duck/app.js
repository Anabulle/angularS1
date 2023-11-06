var Thing = /** @class */ (function () {
    function Thing(name) {
        this._name = name;
    }
    Object.defineProperty(Thing.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Thing.prototype.swim = function () {
        return "Nage comme un canard";
    };
    return Thing;
}());
var roger = new Thing("Roger");
console.log(roger.swim);
