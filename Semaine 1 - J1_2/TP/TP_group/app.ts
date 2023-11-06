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
    let i = array.length - 1;
    let group: any = [];
    while (i >= 0) {
        let duo: number[] = []
        let eleve1: number = array[Random(array.length)];
        duo.push(eleve1)
        filterArray(array, eleve1);
        let eleve2: number = array[Random(array.length)];
        if(eleve2 != undefined){
            duo.push(eleve2);
            filterArray(array, eleve2);
        }
        group.push(duo)
        i -= 2;
    }
    return group;
}
let group = MakeGroup(students);

function AddGroup(array: []) {
    for (let i = 0; i < array.length; i++) {
        finalgroups = [{élève1: array[i][0],élève2: array[i][1]}];
    }
    return finalgroups;
}

let Add = AddGroup(group);
console.log(finalgroups);