"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importez les bons fichiers et définition et une fois que vous avez récupérez tous les products mappez ce dernier
// pour extraire uniquement les produits dont l'option delivery est "special"
const Product_1 = require("./Product");
const MockProducts_1 = require("./data/MockProducts");
const products = MockProducts_1.MockDetails.map((detail) => {
    let deliver = MockProducts_1.MockDelivery.find((delivery) => delivery.id == detail.id);
    return new Product_1.Product(detail, deliver);
});
console.log(products);
