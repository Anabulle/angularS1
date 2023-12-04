import { of } from "rxjs";
import { max } from "rxjs/operators"

// Liste de points
const source = of(
    { x: 10.5, y: -10.6 },
    { x: 5.5, y: 8.3 },
    { x: -7.3, y: 3.3 },
    { x: 8.9, y: -2.6 }
);

// Mapping data  TODO Filtre

  
const distance = source.pipe(
  max((a, b) => {
    const distanceA = Math.sqrt(a.x ** 2 + a.y ** 2); 
    const distanceB = Math.sqrt(b.x ** 2 + b.y ** 2); 
    return distanceA - distanceB;
  })
)
distance.subscribe(result => {
  console.log("Le point le plus éloigné est :", result);
});
// S'inscrire TODO Afficher les données
