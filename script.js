const displayContainer = document.querySelector(".display-container");
const display = document.createElement("div");
const displayResult = document.createElement("div");

display.classList.add("display");
displayResult.classList.add("displayResult");

displayContainer.appendChild(display);
displayContainer.appendChild(displayResult);

const calculatorButtons = document.querySelectorAll(".cal-button");

const acButton = document.querySelector("#ac");

acButton.addEventListener("click", () => {
  acShow = ac.id;
  console.log(acShow);
});

let numberShow;
let operatorShow;
let operator;
let num1;
let num2;

const nine = document.querySelector("[id='9']");
const eight = document.querySelector("[id='8']");
const seven = document.querySelector("[id='7']");
const six = document.querySelector("[id='6']");
const five = document.querySelector("[id='5']");
const four = document.querySelector("[id='4']");
const three = document.querySelector("[id='3']");
const two = document.querySelector("[id='2']");
const one = document.querySelector("[id='1']");
const zero = document.querySelector("[id='0']");

nine.addEventListener("click", handleNumberClick);
eight.addEventListener("click", handleNumberClick);
seven.addEventListener("click", handleNumberClick);
six.addEventListener("click", handleNumberClick);
five.addEventListener("click", handleNumberClick);
four.addEventListener("click", handleNumberClick);
three.addEventListener("click", handleNumberClick);
two.addEventListener("click", handleNumberClick);
one.addEventListener("click", handleNumberClick);
zero.addEventListener("click", handleNumberClick);

function handleNumberClick(event) {
  numberShow = event.target.id;
  console.log(numberShow);
}

const division = document.querySelector("[id='/']");
const times = document.querySelector("[id='*']");
const minus = document.querySelector("[id='-']");
const plus = document.querySelector("[id='+']");

division.addEventListener("click", handleOperatorClick);
times.addEventListener("click", handleOperatorClick);
minus.addEventListener("click", handleOperatorClick);
plus.addEventListener("click", handleOperatorClick);

function handleOperatorClick(event) {
  operatorShow = event.target.id;
  console.log(operatorShow);
}

function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

function operate(num1, num2, operator) {
  return operator(num1, num2);
}
// console.log(operate(8, 6, multiply));

const equal = document.querySelector("[id='=']");

equal.addEventListener("click", () => {
  equalShow = equal.id;
  console.log(equalShow);

  // let result = operate(num1, num2, operator);
  // display.textContent = result;
  // console.log(display.textContent);
});
