const displayContainer = document.querySelector(".display-container");
const display = document.createElement("div");
const displayResult = document.createElement("div");

display.classList.add("display");
displayResult.classList.add("displayResult");

displayContainer.appendChild(display);
displayContainer.appendChild(displayResult);



const calculatorButtons = document.querySelectorAll(".cal-button");

let firstNumber;
let operator;
let secondNumber;
// let num1;
// let num2;

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
    firstNumber == "3" ||
    firstNumber == "4" ||
    firstNumber == "5" ||
    firstNumber == "6" ||
    firstNumber == "7" ||
    firstNumber == "8" ||
    firstNumber == "9"
  ) {
    display.textContent += firstNumber;
    console.log(display.textContent);
    // userChoiceEqual();
    
  } else {
    userChoiceOperator();
  }
  
}

// nine.addEventListener("click", userChoice);
// eight.addEventListener("click", userChoice);
// seven.addEventListener("click", userChoice);
// six.addEventListener("click", userChoice);
// five.addEventListener("click", userChoice);
// four.addEventListener("click", userChoice);
// three.addEventListener("click", userChoice);
// two.addEventListener("click", userChoice);
// one.addEventListener("click", userChoice);
// zero.addEventListener("click", userChoice);

// division.addEventListener("click", operatorUserChoice);
// times.addEventListener("click", operatorUserChoice);
// minus.addEventListener("click", operatorUserChoice);
// plus.addEventListener("click", operatorUserChoice);

// equal.addEventListener("click", equalUserChoice);

function userChoiceOperator() {
  // operator = event.target.id;
  // let operatorChoice = this.innerHTML;
  // console.log(operator);

  if (firstNumber == "/") {
    firstNumber = divide;
  } else if (firstNumber == "*") {
    firstNumber = multiply;
  } else if (firstNumber == "-") {
    firstNumber = subtract;
  } else if (firstNumber == "+") {
    firstNumber = add;
  }
  display.textContent = "";
  userChoiceEqual();

  // userChoice(event);
  // console.log(userChoice(event));
}

function userChoiceEqual(value) {
  // let equalButton = this.innerHTML;
  let num1 = firstNumber;
  console.log(num1);
  operator = value;
  let num2 = secondNumber;
  let result = operate(num1, num2, operator);
  displayResult.textContent = result;
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
  // display.textContent = solution;
  // return solution;
}
// console.log(operate(8, 6, multiply));
