// Importez les bons fichiers et définition et une fois que vous avez récupérez tous les products mappez ce dernier
// pour extraire uniquement les produits dont l'option delivery est "special"
import { Product } from "./Product"
import { Details, Delivery, MockDetails, MockDelivery } from './data/MockProducts';

const products: Array<Product<Details, Delivery>> = [];

MockDetails.forEach((element) =>{

    
})


// je vais t'aider un peu en te donnant la liste des étapes : 
// - Étape 1: Associez chaque détail avec sa livraison correspondante.
// Trouvez la livraison qui correspond à l'ID du détail.
// Assurez-vous que l'option de livraison existe.
// Étape 2: Créez une instance de Product.
// Étape 3: Ajoutez le produit au tableau.
// Étape 4: Filtrez les produits pour obtenir uniquement ceux avec une option de livraison 'Special'.
// Étape 5: Affichez les résultats.


// L'ensemble des étapes 1,2,3 doivent s'effectuer dans un foreach mockdetails, pour ajouter l'ensemble des données ton products.

// Ta constante product doit au préalable être déclarée de la sorte : const products: Array<Product<Details, Delivery>> = [];

// Essaye de le reprendre avec ces indications, et au besoin je t'aiderais d'avantage