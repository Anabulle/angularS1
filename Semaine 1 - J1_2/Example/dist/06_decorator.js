var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// decorator readonly
function readonly(target, key, descriptor) {
    console.log(target, key);
    console.log(descriptor);
    descriptor.writable = true;
    return descriptor;
}
// un deuxième décorateur avec paramètre
function modify(m) {
    let newModel = m;
    return function (target, key, descriptor) {
        descriptor.value = () => newModel;
    };
}
// décorateur tva avec un paramètre le taux TVA
function tva(t) {
    // modifie le comportement de la méthode
    return function (target, key, descriptor) {
        // dans le descripteur value représente la fonction
        // on modifie à partir du descriptor value le comportement de la fonction
        descriptor.value = (a, b) => {
            return Math.floor((1 + t) * (a + b) * 10) / 10; // un chiffre après la virgule
        };
    };
}
class Bike {
    speed() {
        return 8;
    }
    model() {
        return "normal";
    }
    total(a, b) {
        return a + b;
    }
}
__decorate([
    readonly
], Bike.prototype, "speed", null);
__decorate([
    modify("NORMAL")
], Bike.prototype, "model", null);
__decorate([
    tva(0.2)
], Bike.prototype, "total", null);
const b1 = new Bike();
console.log(b1.speed());
// surcharge de la fonction si writable à true
b1.speed = () => 7;
console.log(b1.speed());
// exemple de méthode décorée par un décorateur avec paramètre
console.log(b1.model());
// ajouter à la classe une méthode total qui par défaut donne le total de deux valeurs a, b en paramètre, définissez un décorateur permettant d'appliquer à au total une tva définie
console.log(b1.total(1, 2));
