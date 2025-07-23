const displayContainer = document.querySelector(".display-container");
const display = document.createElement("div");
const displayResult = document.createElement("div");

display.classList.add("display");
displayResult.classList.add("displayResult");

displayContainer.appendChild(display);
displayContainer.appendChild(displayResult);

const calculatorButtons = document.querySelectorAll(".cal-button");

const acButton = document.querySelector("#ac");

let acDisplay;
let numberDisplay;
let operatorDisplay;
let operator;
let num1 = "";
let num2 = "";
let result;

acButton.addEventListener("click", () => {
  acDisplay = acButton.id;
  console.log(acDisplay);
  display.textContent = 0;
  num1 = "";
  num2 = "";
  operator = "";
});

const undoButton = document.querySelector("#undo");

undoButton.addEventListener("click", () => {
  // undoDisplay = undoButton.id;
  // console.log(undoDisplay);

  if (num1 && operator) {
    display.textContent = display.textContent.slice(0, -1);
    num2 = Number(display.textContent);
    console.log(num2);
  } else {
    display.textContent = display.textContent.slice(0, -1);
    num1 = Number(display.textContent);
    console.log(num1);
  }
});

const numberButtons = document.querySelectorAll(".number-button");

numberButtons.forEach((numberButton) => {
  numberButton.addEventListener("click", handleNumberClick);
});

function handleNumberClick(event) {
  numberDisplay = event.target.id;

  if (num1 && operator) {
    num2 = Number(num2 + numberDisplay);

    display.textContent = num2;
    console.log(num2);
  } else {
    num1 = Number(num1 + numberDisplay);

    display.textContent = num1;
    console.log(num1);
  }
}

const operatorButtons = document.querySelectorAll(".operator-button");

operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", handleOperatorClick);
});

function handleOperatorClick(event) {
  if (num1 && num2 && operator) {
    result = operate(num1, num2, operator);

    num1 = result;
    console.log(num1);
    display.textContent = num1;
    operator = event.target.id;
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
    num2 = "";
    console.log(num2);
  } else {
    // operatorDisplay = event.target.id;
    // operator = operatorDisplay;
    operator = event.target.id;
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

const equal = document.querySelector("[id='=']");

equal.addEventListener("click", () => {
  equalShow = equal.id;
  console.log(equalShow);

  result = operate(num1, num2, operator);
  display.textContent = result;
  console.log(display.textContent);
});

//- decimal point does not work. For future rendezvous:
const decimalButton = document.querySelector("[id='.']");

decimalButton.addEventListener("click", () => {
  if (operator) {
    // Handle num2 (after operator)
    if (num2 === "") {
      num2 = "0.";
      display.textContent = num2;
    } else if (typeof num2 === "number") {
      num2 = num2.toString();
      if (!num2.includes(".")) {
        num2 += ".";
        display.textContent = num2;
      }
    } else if (typeof num2 === "string" && !num2.includes(".")) {
      num2 += ".";
      display.textContent = num2;
    }
  } 
});
