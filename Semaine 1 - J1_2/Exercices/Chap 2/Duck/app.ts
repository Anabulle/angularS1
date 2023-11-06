interface Duck {
    name: string;
    swim(): string;
}

class Thing implements Duck {
    private _name: string;

    constructor(name: string) {
        this._name = name 
    }
    set name(name: string) {
        this._name = name;
    }

    get name():string {
        return this._name;
    }
    swim(): string{
        return "Nage comme un canard";
    }
}

let roger: Thing = new Thing("Roger");
console.log(roger.swim);