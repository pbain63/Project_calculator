const displayContainer = document.querySelector(".display-container");
const display = document.createElement("div");
// display.classList.add("display");

// display.textContent = "0123456789012";

// displayContainer.appendChild(display);

function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}
function square(a) {
  return a * a;
}
function percentage(a) {
  return a / 100;
}
// console.log(percentage(5));
let firstNumber = x;
let operator = operatorOption;
let secondNumber = y;

function operate(firstNumber, operator, secondNumber) {
  add();
  subtract();
  multiply();
  divide();
}
