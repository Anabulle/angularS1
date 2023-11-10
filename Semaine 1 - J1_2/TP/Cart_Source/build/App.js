"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MockProducts_1 = require("./data/MockProducts");
const Product_1 = require("./Product");
const products = [];
MockProducts_1.MockDetails.forEach(detail => {
    const matchingDelivery = MockProducts_1.MockDelivery.find(delivery => delivery.id === detail.id);
    if (matchingDelivery) {
        products.push(new Product_1.Product(detail, matchingDelivery.delivery));
    }
});
const specialProducts = products.filter(product => product.option === MockProducts_1.Delivery.Special);
console.log(specialProducts);
