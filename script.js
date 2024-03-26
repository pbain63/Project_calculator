const displayContainer = document.querySelector(".display-container");
const display = document.createElement("div");
display.classList.add("display");

// display.textContent = 0;

displayContainer.appendChild(display);

const seven = document.querySelector("[id='7']"); 
// const seven = document.querySelector("#"+CSS.escape('7')); 
// const seven = document.querySelector(`#${CSS.escape(7)}`); 
const eight = document.querySelector("[id='8']"); 

seven.addEventListener("click", userChoice);//-
// eight.addEventListener("click", userChoice);//-

// function userChoice(event) { //- //for button (event)
  // let displayValue =  event.target.id;//-
  // event.target.style.backgroundColor = "orange";
  // console.log(displayValue);
  // display.textContent += displayValue;//-
  // console.log(display.textContent);
  
  // return display.textContent;
  
// }//-
// console.log(display.textContent);
// function populateDisplay() { //-
  // display.textContent = displayValue;
  // console.log(display.textContent);

  // userChoice();
// } //-

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
