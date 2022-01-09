// const person: { name: string; age: number } = {
//   name: "max",
//   age: 30,
// };

// console.log(person.name);

//-----------------------------------------------------------------------------
// ENUM

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person1 = {
  name: "jj",
  age: 30,
  hobbies: ["sports", "cooking"],
  role: Role.ADMIN,
};

// 사람이 읽을 수 있고 가독성이 중요시 되는 순간에 활용하면 좋은 enum
//-----------------------------------------------------------------------------
