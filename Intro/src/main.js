"use strict";
// const getFullName = (name: string, surname: string): string => {
//   return `${name} ${surname}`;
// };
// console.log(getFullName("Yuki", "Bunny"));
const user1 = {
    name: "Yuki",
    age: 20,
    getMessage() {
        return `Hello, ${this.name}`;
    },
};
const user2 = {
    name: "Barbaloot",
    getMessage() {
        return `Hello, ${this.name}`;
    },
};
console.log(user2.getMessage());
