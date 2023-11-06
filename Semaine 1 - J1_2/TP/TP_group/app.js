var students = [12, 11, 123, 8, 9, 100, 90, 23, 22, 99, 198, 202, 11, 19, 78, 112, 45];
var finalgroups = [];
function Random(max) {
    return Math.floor(Math.random() * max);
}
function filterArray(array, element) {
    var index = array.indexOf(element);
    var x = array.splice(index, 1);
}
function MakeGroup(array) {
    var i = array.length;
    while (i >= 0) {
        var duo = [];
        var eleve1 = array[Random(array.length)];
        filterArray(array, eleve1);
        var eleve2 = array[Random(array.length)];
        filterArray(array, eleve2);
        if (eleve2 == undefined || eleve2 == eleve1) {
            finalgroups.push({ élève1: eleve1 });
        }
        else {
            finalgroups.push({ élève1: eleve1, élève2: eleve2 });
        }
        i -= 2;
    }
    return group;
}
var group = MakeGroup(students);
console.log(finalgroups);
