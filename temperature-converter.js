"use strict";
// temperature converter

let temperature = prompt("Enter temperature in Celsius?");

temperature = Number(temperature);

let fahrenheit = temperature * 9/5 + 32;

alert(`The temperature in Fahrenheit is ${fahrenheit}`);