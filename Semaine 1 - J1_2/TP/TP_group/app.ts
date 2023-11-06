const students: number[] = [12, 11, 123, 8, 9, 100, 90, 23, 22, 99, 198, 202, 11, 19, 78, 112, 45];

interface Group {
    élève1: number;
    élève2?: number;
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
        let duo: number[] = []
        let eleve1: number = array[Random(array.length)];
        filterArray(array, eleve1);
        let eleve2: number = array[Random(array.length)];
        filterArray(array, eleve2);
        console.log(eleve2);
        if (eleve2 == undefined || eleve2 == eleve1) {
            finalgroups.push({ élève1: eleve1 })
        } else {
            finalgroups.push({ élève1: eleve1, élève2: eleve2 })

        }
        i -= 2;
    }
    return group;
}
let group = MakeGroup(students);

console.log(finalgroups);