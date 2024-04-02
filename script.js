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
  // displayResult.textContent = 0;
  display.textContent = 0;
});

let firstNumber;
let choiceFirstNumber;
let operator;
let secondNumber;
let num1;
let num2;
let operatorSign;

calculatorButtons.forEach((calButton) => {
  calButton.addEventListener("click", userSelect);
});

function userSelect() {
  // e.target.style.backgroundColor = "orange";

  firstNumber = this.innerHTML;

  if (
    firstNumber == "0" ||
    firstNumber == "1" ||
    firstNumber == "2" ||
    // firstNumber == "3" || //if I select from secondNum condition, 13* 49 doesn't work
    // firstNumber == "4" ||
    firstNumber == "5" ||
    firstNumber == "6" ||
    firstNumber == "7" ||
    firstNumber == "8" ||
    firstNumber == "9"
  ) {
    // display.textContent = "";

    display.textContent += firstNumber;
    firstNumberChoice = display.textContent;
    console.log(display.textContent);
    userChoiceEqual();
  } else if (
    firstNumber.includes("/") ||
    firstNumber.includes("*") ||
    firstNumber.includes("-") ||
    firstNumber.includes("+")
  ) {
    operatorSign = firstNumber;

    console.log(operatorSign);
    userChoiceOperator();
  } else if (firstNumber == "3" || firstNumber == "4") {
    // display.textContent = "";

    display.textContent += firstNumber;
    secondNumber = display.textContent;
    // console.log(display.textContent);
    console.log(secondNumber);
    userChoiceEqual();
  }
}

function userChoiceOperator() {
  // operator = event.target.id;

  if (operatorSign == "/") {
    operatorSign = divide;
  } else if (operatorSign == "*") {
    operatorSign = multiply;
  } else if (operatorSign == "-") {
    operatorSign = subtract;
  } else if (operatorSign == "+") {
    operatorSign = add;
  }
  display.textContent = "";
  userChoiceEqual();
}

function userChoiceEqual() {
  // let equalButton = this.innerHTML;
  if (secondNumber) {
    num2 = secondNumber;
    console.log(num2);
  } else if (operatorSign) {
    operator = operatorSign;
    console.log(operator);
  } else if (firstNumberChoice) {
    num1 = firstNumberChoice;
    console.log(num1);
  }
  // let num1 = firstNumber;
  // console.log(num1);
  // operator = operatorSign;
  // console.log(operator);
  // let num2 = secondNumber;
  // console.log(num2);
  // let result = operate(num1, num2, operator);
  // displayResult.textContent = result;
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
  // console.log(num1);
  return operator(num1, num2);
}
// console.log(operate(8, 6, multiply));

const equal = document.querySelector("[id='=']");
equal.addEventListener("click", () => {
  // displayResult.textContent = "";
  // display.textContent = "";
  let result = operate(num1, num2, operator);
  display.textContent = result;
  console.log(display.textContent);
  // display.textContent = "";
});
