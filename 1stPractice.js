//constant
const kelvin = 0;

//Celsius is 273 degrees colder than Kelvin
let celsius = kelvin - 273;

//fahrenheit degrees
var fahrenheit = (celsius * (9/5)) + 35;

//round down the temp
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
