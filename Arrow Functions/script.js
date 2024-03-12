/*
- Feature of ES6
- These are anonymous functions with a special syntax, they haven't their own this, arguments or super.
- They can't be used as constructors too. 

- Arrow functions are often used as callbacks of nnative JS functions like map, filter or sort.
- Structure:
    ()=>{ }

*/

const greet = (name) => {
  return "Hello " + name;
};
console.log(greet("Eric"));

/*In case that the function only receives one argument, we can omit the parenthesis. */

const greeting = (namee) => "Heyyy " + namee;
console.log(greeting("Bell"));

/*Explicit Return: For One line of code we can avoid writting return keyword */

const helllo = (person) => "Hello " + person;
console.log(helllo("Jack"));

/*Using an arrow as a callback compared to a normal function */
let numbers = [1, 2, 3, 4, 5];

//Earlier, before using arrow function

function multiplyByTwo(number) {
  return number * 2;
}
let multipliedNumbers = numbers.map(multiplyByTwo);
console.log(multipliedNumbers);

//Uisng Arrow functions
const multiplyByTwoo = number => number*2;
let multipliedByTwo =numbers.map(multiplyByTwo)
console.log(multipliedByTwo)

/*Exercise
Define an arrow function divideByTwo which accepts a number and returns that number divided by 2. */

const divideByTwo =(number)=>{ return number/2}
const dividedByTwo=numbers.map(divideByTwo)
console.log(dividedByTwo)