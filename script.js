const displayContainer = document.querySelector(".display-container");
const display = document.createElement("div");
display.classList.add("display");

// display.textContent = 0;

displayContainer.appendChild(display);

// const seven = document.querySelector("#"+CSS.escape('7')); 
// const seven = document.querySelector(`#${CSS.escape(7)}`); 

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
const ac = document.querySelector("#ac"); 
const undo = document.querySelector("#undo"); 
// const percent = document.querySelector("[id='%']"); 
const division = document.querySelector("[id='/']"); 
const times = document.querySelector("[id='*']"); 
const minus = document.querySelector("[id='-']"); 
const plus = document.querySelector("[id='+']"); 
const decimal = document.querySelector("[id='.']"); 
const equal = document.querySelector("[id='=']"); 


nine.addEventListener("click", userChoice);
eight.addEventListener("click", userChoice);
seven.addEventListener("click", userChoice);
six.addEventListener("click", userChoice);
five.addEventListener("click", userChoice);
four.addEventListener("click", userChoice);
three.addEventListener("click", userChoice);
two.addEventListener("click", userChoice);
one.addEventListener("click", userChoice);
zero.addEventListener("click", userChoice);

ac.addEventListener("click", acUserChoice);
decimal.addEventListener("click", decimalUserChoice);



// function decimalUserChoice(event) {
//   let displayValue = event.target.id;
//   if (display.textContent.includes(".")) {
//    return false
//   } else {
//     return true
//   }
  
//   console.log(display.textContent);
// }

function userChoice(event) {  //for button (event)
  let displayValue =  event.target.id;
  // event.target.style.backgroundColor = "orange";
  // console.log(displayValue);
  display.textContent += displayValue;
  // console.log(display.textContent);
  
  // return display.textContent;
  
}
// console.log(display.textContent);
function populateDisplay() { 
  // display.textContent = displayValue;
  // console.log(display.textContent);

  // userChoice();
} 

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
