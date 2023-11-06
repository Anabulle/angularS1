// decorator readonly
function readonly(target, key, descriptor) {
  console.log(target, key);
  console.log(descriptor);
  descriptor.writable = true;

  return descriptor;
}

// un deuxième décorateur avec paramètre
function modify(m: string) {
  let newModel = m;

  return function (target, key, descriptor) {
    descriptor.value = () => newModel;
  };
}

// décorateur tva avec un paramètre le taux TVA
function tva(t: number) {

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
  @readonly
  speed() {
    return 8;
  }

  @modify("NORMAL")
  model() {
    return "normal";
  }

  @tva(0.2)
  total(a: number, b: number) {
    return a + b;
  }
}

const b1 = new Bike();
console.log(b1.speed());
// surcharge de la fonction si writable à true
b1.speed = () => 7;
console.log(b1.speed());

// exemple de méthode décorée par un décorateur avec paramètre
console.log(b1.model());

// ajouter à la classe une méthode total qui par défaut donne le total de deux valeurs a, b en paramètre, définissez un décorateur permettant d'appliquer à au total une tva définie

console.log(b1.total(1, 2));
