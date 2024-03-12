/*The if statement
The if statement allows us to check if an expression is equal to true or false, and execute different code according to the result.
*/
var number = -5;
if (number > 0) {
  console.log("The number is postive");
} else {
  console.log("The number is negative");
}

/* It is also possible to omit the else keyword if we only want to execute a block of code only if a certain expression is true*/

/*To evaluate whether two variables are equal, the == operator is used. 
There is also another equality operator in JavaScript, ===, which does a strict comparison.
This means that it will be true only if the two things you are comparing are the same type as well as same content.
*/

console.log("1" == 1);
console.log("1" === 1);
console.log("2" == 1);
console.log("Apple" == "Apple");
console.log("Apple" === "Appl");

/*Inequality operators can also be used to evaluate expressions. For */

var foo = 1;
var bar = 2;
if (foo < bar) {
  console.log("Foo is smaller than bar");
}

/*Two or more expressions can be evaluated together using logical operators to check if two expressions evaluate to true together, or at least one of them.
To check if two expressions both evaluate to true, use the AND operator &&.
To check if at least one of the expressions evaluate to true, use the OR operator ||. */

var foo = 1;
var bar = 2;
var moo = 3;
if (foo < bar && moo > bar) {
  console.log("Foo is smaller than bar and moo is larger than bar");
}

if (foo < bar || moo > bar) {
  console.log("foo is smaller than bar OR Moo is larger than bar");
}

/*NOT Operator ! */

var isSunny = true;
if (!isSunny) {
  console.log("It is Sunny");
} else {
  console.log("It is Cloudy");
}

/*Switch Statement 
The switch statement is similar to the switch statement from the C programming language, but also supports strings.
The switch statement is used to select between more than two different options, and to run the same code for more than one option. */

var rank = "Commander";
switch (rank) {
  case "Privare":
  case "Sergeant":
    console.log("You are not authorized");
    break;
  case "Commander":
    console.log("Hello Commander!");
    break;
  case "Captain":
    console.log("Hello Captain");
    break;
    default:
        console.log("I dont know what your rank is")
        break
}

/*
Exercise:
In this exercise, you must construct an if inside the checkNumber function statement that checks if the number myNumber is equal to 42.
If that is the case, the function must print out using console.log the word correct.
If myNumber is not equal to 42, the function must print out using console.log the word incorrect.
You can name the argument passed to a function by supplying the name inside the parentheses. 
For example, function myFunction(myArgument). */

var myNumber= 42
function myFunction(myNumber){
    if(myNumber===42){
        console.log("Word correct");
    }
    else{
        console.log("Word Incorrect")
    }
}
myFunction(myNumber)

