interface User {
  name: string;
  id: number;
  status?: string; // attribut facultatif
}

class AddUser {
  users: User[] = [];

  add(user: User): void | never {
    if (this.users.includes(user)) {
      throw new Error("user is already exists");
    }

    this.users.push(user);
  }
}

const user1 = { name: "Alice", id: 1, status: "B1" };
const user2 = { name: "Alan", id: 2, status: "B1" };
const user3 = { name: "Karl", id: 3, status: "B2" };
const user4 = { name: "Phil", id: 4, status: "B3" };
const user5 = { name: "Fabrice", id: 5 };

const container = new AddUser();

try {
  container.add(user1);
  container.add(user2);
  container.add(user1);
} catch (e) { 
  console.error(e)
}finally{
  container.add(user3);
  container.add(user4);
  container.add(user5);

  for(const u of container.users) console.log(u.name)
}
