const u1 = {
    id: 1,
    name: "Alan",
};
console.log(u1);
const u2 = {
    id: 2,
    name: "Alice",
    status: "B1",
};
console.log(u2);
/*
  const u3 : User = {
    id : 2, name : "Alice", status: "B1", rate : 10
  }

  console.log(u3)

  */
function foo() {
    while (true) { }
}
// type composé
function bar(a) {
    if (a == 1)
        throw new Error("Exception ...");
    return a;
}
bar(2);
bar(1);
