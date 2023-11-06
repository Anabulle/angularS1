interface User {
  name: string;
  id: number;
  status?: string; // attribut facultatif
}

const u1: User = {
  id: 1,
  name: "Alan",
};

console.log(u1);

const u2: User = {
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

function foo(): never {
  while (true) {}
}

// type composé
function bar(a: number): never | number {
  if (a == 1) throw new Error("Exception ...");

  return a;
}

bar(2); 

bar(1);
