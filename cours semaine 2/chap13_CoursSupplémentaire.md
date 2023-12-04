# Cours supplémentaire RxJS

## Introduction à RxJS

RxJS (Reactive Extensions for JavaScript) est une bibliothèque pour la programmation réactive utilisant des observables. Elle permet de gérer de manière efficace des flux de données asynchrones et des événements dans les applications, notamment Angular.

## Concepts Clés de RxJS

<b>Observables</b>: Représentent des sources de valeurs ou d'événements. Ils sont paresseux, ce qui signifie qu'ils ne commencent à émettre des données qu'après qu'un observateur s'y soit abonné.

<b>Observers</b>: Objets qui savent écouter les valeurs émises par les observables.

<b>Subscription</b>: Représente l'exécution d'un observable et est principalement utile pour annuler l'exécution.

<b>Operators</b>: Fonctions permettant de manipuler les données émises par les observables (comme map, filter, etc.).

## Utilisation de Base des Observables

### Création d'un Observable

```ts
import { Observable } from 'rxjs';

const observable = new Observable(subscriber => {
  subscriber.next('Hello'); // Push Hello 
  subscriber.next('World'); // Push World
  subscriber.complete(); // Close L'envoie
  // L'observable retournera donc 'HelloWorld'
});
```

### Abonnement à un Observable

```ts
observable.subscribe({
  next(x) { console.log('Got value ' + x); }, // Get la valeur de l'observable, ici 'Got value HelloWorld'
  error(err) { console.error('Something wrong occurred: ' + err); }, // Get les potentielles erreurs
  complete() { console.log('Done'); } // Close L'écoute
});
```

## Opérateurs Courants

<b>map</b>: Transforme chaque valeur émise par l'observable source.

<b>filter</b>: Émet uniquement les valeurs de l'observable source qui satisfont une condition spécifique.

<b>merge</b>: Combine plusieurs observables en un seul observable.

<b>switchMap</b>: Projette chaque valeur source en un observable, qui est fusionné dans l'observable de sortie.

## Exemple de Manipulation des Flux de Données

```ts
import { of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

const numbers = of(1, 2, 3, 4, 5); // Emet une séquence de nombres
const squaredNumbers = numbers.pipe(
  filter((n) => n % 2 === 0), // Filtre les nombres impairs
  map(n => n * n) // Retourne chaque nombre au carré
);

squaredNumbers.subscribe(x => console.log(x)); // Affichage du retour de l'observable
```

Dans cet exemple, numbers est un observable qui émet une séquence de nombres. On utilise pipe pour combiner filter (qui ne laisse passer que les nombres pairs) et map (qui élève chaque nombre au carré).

## Conclusion

RxJS est un outil puissant pour gérer des flux de données asynchrones dans les applications JavaScript et TypeScript, en particulier Angular. Grâce à ses observables et opérateurs, il offre une grande souplesse pour la création, la transformation et la composition de flux de données. La maîtrise de RxJS est essentielle pour une programmation réactive efficace et élégante.