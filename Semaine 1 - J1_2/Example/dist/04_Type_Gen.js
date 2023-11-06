// typage générique
function fusion(a, b) {
    return a.concat(b);
}
let c = fusion(["a", "b", "c"], ["d", "e"]);
console.log(c); // affichera ['a', 'b', 'c', 'd', 'e']
fusion([1, 2, 3], [5, 6, 7]);
function fusionTR(a, b) {
    const res = [];
    return res.concat(a, b);
}
console.log(fusionTR([1, 2, 3], ["10", "20"]));
class Queue {
}
// ------
// constantes
var DeliveryUS;
(function (DeliveryUS) {
    DeliveryUS["DoorToDoor"] = "doortoDoor";
    DeliveryUS["AirDelivery"] = "airDelivery";
    DeliveryUS["Special"] = "special";
})(DeliveryUS || (DeliveryUS = {}));
var DeliveryUE;
(function (DeliveryUE) {
    DeliveryUE["AirDelivery"] = "airDelivery";
    DeliveryUE["Special"] = "special";
})(DeliveryUE || (DeliveryUE = {}));
class Product {
}
const p1 = new Product();
const p2 = new Product();
class Cart {
}
new Cart();
