/*Every variable in JavaScript is casted automatically so any operator between two variables will always give some kind of result. */

/*The addition operator
The + (addition) operator is used for both addition and concatenation of strings. */

var a = 5;
var b = 7;
var c = a + b;
console.log(c); //--->  Output: 12

var name = "Yahoo";
console.log("Hello " + name); // Output: Hello Yahooo

/*JavaScript behaves differently when you are trying to combine two operands of different types. 
The default primitive value is a string, so when you try to add a number to a string, JavaScript will transform the number to a string before the concatenation. */
var num = 1;
var str = "1";
console.log(num + str); // Output: 11

/*Mathematical operators
To subtract, multiply and divide two numbers, use the minus (-), asterisk (*) and slash (/) signs. */

console.log(3 - 5); // ---> Outputs -2
console.log(3 * 5); // ---> Outputs 15
console.log(3 / 5); // ---> Outputs 0.6
console.log(5 % 3); // ---> Output 2

/*Math.abs(x): This function calculates the absolute value of a number x, which is the distance of x from zero on the number line.
It returns the non-negative value of x. */
console.log(Math.abs(-5)); //---> Output: 5
console.log(Math.abs(7)); // ---> Output: 7

/*Math.exp(x): This function calculates the value of the mathematical constant e (approximately 2.71828) raised to the power of x.
The value of e is 2.71828 */

console.log(Math.exp(1)); //---> Output :2.718281828459045  e^1
console.log(Math.exp(2)); //---> Output: 7.38905609893065   e^2

/*Math.pow(x, y): This function calculates x raised to the power of y. */

console.log(Math.pow(2, 2)); //---> Output: 4
console.log(Math.pow(3, 2)); //---> Output: 9

/*Math.floor(x): This function removes the fraction part from a number x and returns the largest integer less than or equal to x. */
console.log(Math.floor(3.7)); //---> Output: 3
console.log(Math.floor(5.4)); //---> Output: 5

/*Math.random(): This function generates a random floating-point number x such that 0 <= x < 1.
It returns a pseudo-random number between 0 (inclusive) and 1 (exclusive). */

var randomNumber = Math.random();
console.log(randomNumber);

/*Return a random number betweem 0 and 100 */
var randomNumberHundred = Math.random() * 100;
console.log(randomNumberHundred);

/*Returns a random number between 1 and 10 */
var randomNumberTen = Math.random() * 10;
console.log(randomNumberTen);

/*Returns a whole number between 1 and 10 */
var randomWholeNumberTen = Math.random() * 10 + 1;
console.log(randomWholeNumberTen);

/*Returns a whole number between 1 and 100 */
var randomWholeNumberHundred = Math.random() * 100 + 1;
console.log(randomNumberHundred);

/*Exercise
Connect the firstName and lastName to construct the variable fullName, but with a space (" ") in between the first and last name.
Multiply the variable myNumber by 2 and put the result in meaningOfLife. */

var firstName = "Rocky";
var lastName = "Randhawa";
var myNumber = 12;

var fullName = firstName + " " + lastName;
console.log(fullName);
var meaningOfLife = myNumber * 2;
console.log(meaningOfLife);
