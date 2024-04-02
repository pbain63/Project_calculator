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
  
  display.textContent = 0;
});

let numberShow;
let operatorShow;
let operator;
let secondNumber;
let num1;
let num2;


calculatorButtons.forEach((calButton) => {
  calButton.addEventListener("click", userSelect);
});

function handleNumberClick(event) {
  // e.target.style.backgroundColor = "orange";


  numberShow = event.target.id;

 
}

function handleOperatorClick(event) {
  operatorShow = event.target.id;

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
  
  let result = operate(num1, num2, operator);
  display.textContent = result;
  console.log(display.textContent);
 
});
