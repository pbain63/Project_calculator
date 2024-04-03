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
  acDisplay = ac.id;
  console.log(acDisplay);
});

let acDisplay;
let numberDisplay;
let operatorDisplay;
let operator;
let num1 = "";
let num2 = "";

const numberButtons = document.querySelectorAll(".number-button");

numberButtons.forEach((numberButton) => {
  numberButton.addEventListener("click", handleNumberClick);
});

function handleNumberClick(event) {
  numberDisplay = event.target.id;
  // console.log(numberDisplay);

  if (num1 && operator) {
    num2 = Number(num2 + numberDisplay);
    
    //  display.textContent = num2;
    console.log(num2);
  } else {
    num1 = Number(num1 + numberDisplay);
    
    //  display.textContent = num1;
    console.log(num1);
  }
}

const operatorButtons = document.querySelectorAll(".operator-button");

operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", handleOperatorClick);
});

function handleOperatorClick(event) {
  operatorDisplay = event.target.id;
  operator = operatorDisplay;
  console.log(operator);
  if (operator == "/") {
    operator = divide;
  } else if (operator == "*") {
    operator = multiply;
  } else if (operator == "-") {
    operator = subtract;
  } else if (operator == "+") {
    operator = add;
  }
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

  let result = operate(num1, num2, operator);
  display.textContent = result;
  console.log(display.textContent);
});
