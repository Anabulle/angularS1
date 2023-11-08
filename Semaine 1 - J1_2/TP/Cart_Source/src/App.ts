// Importez les bons fichiers et définition et une fois que vous avez récupérez tous les products mappez ce dernier
// pour extraire uniquement les produits dont l'option delivery est "special"
import { Product } from "./Product"
import { Details, Delivery, MockDetails, MockDelivery } from './data/MockProducts';


const products: Array<Product<Details, Delivery>> = MockDetails.map((detail) => {
    let deliver = MockDelivery.find((delivery) => delivery.id == detail.id);
    return new Product(detail, deliver ? deliver.delivery : Delivery.DoorToDoor);
});

console.log(products)
