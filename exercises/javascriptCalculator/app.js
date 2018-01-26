var rs = require("readline-sync");

var firstNum = rs.question("Please enter your first number.");
var secondNum = rs.question("Please enter your second number.");
var operation = rs.keyInSelect(["add", "multiply", "divide", "subtract"], "Please enter the operation to perform");

// 1. add
function add(num1, num2) {
    return Number(num1) + Number(num2);
}

// 2
function multiply(num1, num2) {
    return Number(num1) * Number(num2);
}

// 3
function divide(num1, num2) {
    return Number(num1) / Number(num2);
}


// 4
function subtract(num1, num2) {
    return Number(num1) - Number(num2);
}

function selectOperation(choice) {
    switch (operation) {
        case 0:
             return add(firstNum, secondNum);
        case 1:
            return multiply(firstNum, secondNum);
        case 2:
            return divide(firstNum, secondNum);
        case 3:
            return subtract(firstNum, secondNum);
        default: // selects 0
            return "You did not select one of the four operations.";
    }
}

console.log("The result is: " + selectOperation());