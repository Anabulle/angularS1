class Product {
    constructor(name) {
        this._ref = 1000; // attribut protégé dans la classe actuelle et dans sa fille
        this.name = name; // le setter assigne une valeur à l'attribut _name
    }
    // setter
    set name(name) {
        this._name = name;
    }
    // getter : afficher une valeur dans le code courant
    get name() {
        return this._name;
    }
    // setter
    set ref(ref) {
        this._ref = ref;
    }
    // getter : afficher une valeur dans le code courant
    get ref() {
        return this._ref;
    }
}
let bike = new Product('Super Bike');
bike.name; // getter
