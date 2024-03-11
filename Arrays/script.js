/* JavaScript can hold an array of variables in an Array object. In JavaScript, an array also functions as a list, a stack or a queue.

To define an array, either use the brackets notation or the Array object notation*/

var myArray = [1, 2, 3];
var theSameArray = new Array(1, 2, 3, 4, 5);
console.log(theSameArray[2]);

/*Arrays in JavaScript are sparse, meaning that we can also assign variables to random locations even though previous cells were undefined. */
var myArray2 = []; //Its an empty array
myArray2[4] = "Hi";
console.log(myArray2);
/*Output
(5) [empty × 4, 'Hi']4: "Hi"length: 5[[Prototype]]: Array(0)
 */


/*
Array Elements
Because JavaScript Arrays are just special kinds of objects, you can have elements of different types stored together in the same array. The example below is an array with a string, a number, and an empty object.

*/
var myArray3=["Hello",5,10,{},"Bye"]

/* 
Exercise
You must define an array with the following three variables:

A string which has the value of "What is the meaning of life?"
A number which has a value of 42
A boolean which has a value of true */

var exercise = [
    "What is the meaning of life?",
    42,
    true
]

console.log(exercise)

//--------------------------------------------------------------------------------------------------------------------
//MANIPULATING ARRAYS
//-----------------------------------------------------------------------------------------------------------------------------



/*Pushing and popping
Arrays can also function as a stack. 
The push and pop methods insert and remove variables from the end of an array.
*/

//Push ---> adds element to the end of array
//Pop ---> removes the last element from the array
var myStack =[] //---> Empty Array
myStack.push(1)
console.log(myStack)
myStack.push(2)
myStack.push(3)
myStack.push(4)
console.log(myStack)  //---> Outputs: [1,2,3,4]

myStack.pop()
console.log(myStack)
myStack.pop()
console.log(myStack)

/*
Unshift and Shift
The unshift and shift methods are similar to push and pop, only they work from the beginning of the array. 
We can use the push and shift methods consecutively to utilize an array as a queue. */

/*shift(): This method removes the first element from an array and returns that removed element.
It mutates the array. */

var myArray4=[1,2,3,4,5]
var shiftedElement=myArray4.shift();
console.log(shiftedElement) //---> Output : 1
console.log(myArray4)  //---> Output: [2,3,4,5]

myArray4.unshift(11)
console.log(myArray4) //---> Output: [11,2,3,4,5]

/*
Splicing
The splice() method is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place.

Syntax:
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
*/

var myArray5 = [0,1,2,3,4,5,6,7,8,9];
var splice = myArray5.splice(3,5);

console.log(splice);        // ---> Output: 3,4,5,6,7
console.log(myArray5);       // ---> Output: 0,1,2,8,9



/*Exercise
Push the number 42 to the end of the array
Shift a variable from the beginning of the array
*/
var exercise2=[1,2,3,4]
exercise2.push(42)
console.log(exercise2) //---> Output: [1, 2, 3, 4, 42]
exercise2.shift()
console.log(exercise2) //---> Output: [2, 3, 4, 42]