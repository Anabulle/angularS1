const students: number[] = [12, 11, 123, 8, 9, 100, 90, 23, 22, 99, 198, 202, 11, 19, 78, 112, 45];

interface Group {
    eleve1: number;
    eleve2?: number;
}

let finalgroups: Group[] = [];
function Random(max: number) {
    return Math.floor(Math.random() * max);
}
function filterArray(array: number[], element: number) {
    let index = array.indexOf(element);
    let x = array.splice(index, 1);
}
function MakeGroup(array: number[]) {
    let i = array.length;
    while (i >= 0) {
        let eleve1: number = array[Random(array.length)];
        filterArray(array, eleve1);
        let eleve2: number = array[Random(array.length)];
        filterArray(array, eleve2);
        if (eleve2 == undefined) {
            finalgroups.push({ eleve1: eleve1 })
        } else {
            finalgroups.push({ eleve1: eleve1, eleve2: eleve2 })

        }
        i -= 2;
    }
    return finalgroups;
}
let group = MakeGroup(students);

console.log(finalgroups);

