class Music {
    constructor() {
        this._instrument = "violon";
    }
    play() {
        return "play music";
    }
    // protected marche comme d'habitude dans les deux sens
    showName() {
        return this._name.toUpperCase();
    }
}
// Classe étendue
class Guitar extends Music {
    constructor() {
        super(...arguments);
        this._instrument = "guitar";
        this._name = "Alan";
    }
}
console.log(new Guitar());
const g = new Guitar();
console.log(g.showName());
// attribut public est accessible directement dans le script == Danger effet de bord 
g.ref = "100";
