"use strict";

// simple calculator

let num1 = prompt("Enter first number?");

num1 = Number(num1);

let num2 = prompt("Enter second number?");

num2 = Number(num2);

let operation = prompt("Enter operation?");

let result;

if (operation === "+") {
    result = num1 = num2;
}
else if (operation === "-") {
    result = num1 - num2;
}
else if (operation === "*") {
    result = num1 * num2;
}
else if (operation === "/") {
    result = num1 / num2;
}
else {
    result = "Invalid operation!";
}

alert(`The result is ${result}`);
