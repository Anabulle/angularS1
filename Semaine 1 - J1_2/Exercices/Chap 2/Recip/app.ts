interface Recipe {
    name: string;
    star?: number;
}

let recipes: Recipe[] = [{name: "flan", star: 1 },{name: "muffin"}, {name: "crêpe", star: 5}]; // pour le type, la notation est équivalente à Array<Recipe>
console.log(recipes);

let notes: number[] = [8,10,5];
console.log(notes);