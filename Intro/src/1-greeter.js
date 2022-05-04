// function greeter(person) {
//   return "Hello, " + person;
// }
// let user = "Jane User";
// document.body.textContent = greeter(user);
// console.log(greeter(user));
var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
