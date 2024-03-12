/*Loops
 */

/*For loop */
var myArray = ["A", "B", "C"];
for (i = 0; i < myArray.length; i++) {
  console.log("Array elements are " + myArray);
}

/*While statement */

var i = 9;
while (i >= 0) {
  console.log(i + " bottles");
  i--;
}

//Example of while

var sum = 0;
var number = 12345;
function sumOfDigits(number) {
  while (number > 0) {
    var lastDigit = number % 10;
    number = Math.floor(number / 10);
    sum = sum + lastDigit;
  }
  return sum;
}
sumOfDigits(number);
console.log(sum);

/*Continue and break statements

Break:
The break statement allows to stop the execution of a loop. 
For example, we can create a loop that loops forever using while(true) and use the break statement to break inside the loop instead by checking that a certain condition was met.*/

for (var a = 1; a <= 10; a++) {
  if (a == 3) {
    console.log("Applying here break " + a);//---> After this no number will be printed
    break;
  }
  console.log(a);
} 



for (var a = 1; a <= 10; a++) {
  if (a == 3) {
    console.log("Applying Continue here " + a);
    continue;     //---> Here number 3 wont be repeated.
  }

  console.log(a);
}



/*Exercise
In this exercise, you must write a for loop that iterates on the myArray variable and prints out all of its members.
*/
var myArrayy=["Apple","Banana","Custard"]
for(var i=0;i<myArrayy.length;i++)
{
    console.log(myArrayy[i])
}