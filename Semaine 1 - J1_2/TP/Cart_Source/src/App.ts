import { MockDetails, MockDelivery, Delivery, Details } from './data/MockProducts';
import { Product } from './Product';

const products: Array<Product<Details, Delivery>> = [];

MockDetails.forEach(detail => {
    const matchingDelivery = MockDelivery.find(delivery => delivery.id === detail.id);

    if (matchingDelivery) {
        products.push(new Product<Details, Delivery>(detail, matchingDelivery.delivery));
    }
});

const specialProducts: Array<Product<Details, Delivery>> = products.filter(product => product.option === Delivery.Special);

console.log(specialProducts);




