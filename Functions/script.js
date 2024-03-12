/*Functions are code blocks that can have argument and functions have their own scope.
Functions are a very important feature of the program, and especially the fact that they can access local variables of a parent function (this is called a closure). */

/*Ways to  define functions
 - named functions
 - anonymous functions
*/

function greet(name) {
  console.log("Hello " + name);
}
greet("Eric");

/*  OR   
function greet(name) {
  return "hello " + name;
}
console.log(greet("annn"));
*/

// Anonymous Function

var greeet = function (namee) {
  return "Hello " + namee;
};
console.log(greeet("Annabella"));

/*Exercise
Define a function called multiplyFive which accepts a number and returns that number multiplied by 5.
*/


function multiplyFive(number){
    return number * 5
}
console.log(multiplyFive(6))

