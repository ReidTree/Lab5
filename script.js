var fahrTemp = parseInt(prompt("Enter Fahrenheit temperature. (Numbers only)")) || 0;
var celsTemp = parseInt(prompt("Enter Celsius temperature. (Numbers only)")) || 0;
var fToC =  ((fahrTemp - 32)/1.8);
var cToF = (celsTemp*1.8)+32;
console.log(fahrTemp + "°F Entered = " + fToC + "°C");
console.log(celsTemp + "°C Entered = " + cToF + "°F");
