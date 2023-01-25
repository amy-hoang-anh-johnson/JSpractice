/*
Title: 2nd Practice; Multiplication, adding variables together, lower and upper case, and `` string. 
*/

//my age
var myAge = 24;

//value saved to this var will change
let earlyYears = 2;

earlyYears *= 10.5;

//myAge - 2
let laterYears = myAge - 2;

//Dog years
laterYears *= 4;

console.log(earlyYears+' '+laterYears);

//adding earlyYears and laterYears
var myAgeInDogYears = earlyYears + laterYears;

//my name
var myName = 'Amy'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
