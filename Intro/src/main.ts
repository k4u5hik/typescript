// const getFullName = (name: string, surname: string): string => {
//   return `${name} ${surname}`;
// };
// console.log(getFullName("Yuki", "Bunny"));

interface IUser {
  name: string;
  age?: number; // ? means optional
  getMessage(): string;
}

const user1: IUser = {
  name: "Yuki",
  age: 20,
  getMessage(): string {
    return `Hello, ${this.name}`;
  },
};
const user2: IUser = {
  name: "Barbaloot",
  getMessage(): string {
    return `Hello, ${this.name}`;
  },
};
console.log(user2.getMessage());
