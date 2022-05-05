// function greeter(person) {
//   return "Hello, " + person;
// }
// let user = "Jane User";
// document.body.textContent = greeter(user);
// console.log(greeter(user));

// const button = document.querySelector("button");
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;

// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// button.addEventListener("click", function () {
//   console.log(add(+input1.value, +input2.value));
// });

let hello: string = "world";
hello = "foo";

const getFullName = (firstName: string, lastName: string) => {
  return firstName + " " + lastName;
};
console.log(getFullName("John", "Goe"));
