/*Callbacks in Javascript are the functions that are passed as arguments to other functions
- It is an important feature of asyncronous JavaScript and it enables the functions that receives the callback to call our code with it finishes a long task, 
allowing us to continue the execution of the code. */

var callback = function () {
  console.log("Done!");
};

setTimeout(callback, 5000);



setTimeout(function(){
    console.log("Done !!!!!!")
},10000)