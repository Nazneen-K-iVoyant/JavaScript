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
