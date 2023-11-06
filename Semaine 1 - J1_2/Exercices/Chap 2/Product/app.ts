class Product {
    private _name: string; // attribut privé dans la classe actuelle
    protected _ref: number = 1000; // attribut protégé dans la classe actuelle et dans sa fille

    constructor(name: string) {
        this.name = name; // le setter assigne une valeur à l'attribut _name
    }
    
    // setter
    set name(name: string) {
        this._name = name;
    }
    
    // getter : afficher une valeur dans le code courant
    get name():string {
        return this._name;
    }

    // setter
    set ref(ref: number) {
        this._ref = ref;
    }
    
    // getter : afficher une valeur dans le code courant
    get ref():number {
        return this._ref;
    }

}

let bike = new Product('Super Bike');

bike.name // getter