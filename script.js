const displayContainer = document.querySelector(".display-container");
const display = document.createElement("div");
display.classList.add("display");

displayContainer.appendChild(display);
// //-
// // const seven = document.querySelector("#"+CSS.escape('7'));
// // const seven = document.querySelector(`#${CSS.escape(7)}`);

// const nine = document.querySelector("[id='9']");
// const eight = document.querySelector("[id='8']");
// const seven = document.querySelector("[id='7']");
// const six = document.querySelector("[id='6']");
// const five = document.querySelector("[id='5']");
// const four = document.querySelector("[id='4']");
// const three = document.querySelector("[id='3']");
// const two = document.querySelector("[id='2']");
// const one = document.querySelector("[id='1']");
// const zero = document.querySelector("[id='0']");
// const ac = document.querySelector("#ac");
// const undo = document.querySelector("#undo");
// // const percent = document.querySelector("[id='%']");
// const division = document.querySelector("[id='/']");
// const times = document.querySelector("[id='*']");
// const minus = document.querySelector("[id='-']");
// const plus = document.querySelector("[id='+']");
// const decimal = document.querySelector("[id='.']");
// const equal = document.querySelector("[id='=']");

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

// let firstNumber;
// let operator;
// let secondNumber;

// function userChoice() {
//   //for button (event)
//   let firstNumber = this.innerHTML;
//   // let displayValue = event.target.id;
//   // event.target.style.backgroundColor = "orange";
//   // console.log(displayValue);

//   display.textContent += firstNumber;
//   // let num2 = num1;
//   // console.log(num2);
//   console.log(display.textContent);

//   let num1 = firstNumber;
//   operatorUserChoice();
//   let result = operate(num1, num2, operator);
// }
// // console.log(display.textContent);

// function operatorUserChoice() {
//   // operator = event.target.id;
//   let operator = this.innerHTML;
//   console.log(operator);

//   if (
//     operator == "/" ||
//     operator == "*" ||
//     operator == "-" ||
//     operator == "+"
//   ) {
//     return (display.textContent = "");
//   } else {
//     return display.textContent;
//   }

//   // userChoice(event);
//   // console.log(userChoice(event));
// }

// function equalUserChoice() {
//   // let equalButton = this.innerHTML;
//   display.textContent = operate();
//   return display.textContent;
//   // console.log(equalButton);
// }

// function add(num1, num2) {
//   return num1 + num2;
// }
// function subtract(num1, num2) {
//   return num1 - num2;
// }
// function multiply(num1, num2) {
//   return num1 * num2;
// }
// function divide(num1, num2) {
//   return num1 / num2;
// }

// function operate(num1, num2, operator) {
//   // console.log(num1);
//   let solution = operator(num1, num2);
//   // display.textContent = solution;
//   return solution;
//   // let solution = displayValue operator displayValue ;
//   // console.log(solution);
//   // display.textContent = solution;
//   userChoice();
//   operatorUserChoice();
// }
// // console.log(operate(8, 6, multiply));
