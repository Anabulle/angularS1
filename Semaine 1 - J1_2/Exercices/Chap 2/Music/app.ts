class Music {
    
    protected _instrument: string = "violon";

    public ref : string ;
    
    play(): string {
        return "play music";
    }

    // protected marche comme d'habitude dans les deux sens
    protected showName():string{
        return this._name.toUpperCase();
    }
}

// Classe étendue
class Guitar extends Music {
    protected _instrument: string = "guitar";
    protected _name: string = "Alan";
}

console.log(new Guitar());

const g =  new Guitar()  ;

console.log(g.showName())

// attribut public est accessible directement dans le script == Danger effet de bord 
g.ref = "100";
