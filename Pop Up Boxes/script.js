/*Types of Pop-up boxes
- Confirm
- alert
- prompt */

/*Alert */
alert("Hi, This  is Alert")

/*Confirm */
confirm("Confirm it!!!")

if(confirm("Press a button")){
    text="You pressed Okay!!!"
}
else {
    text="You Pressed Cancel"
}
console.log(text)

/*Prompt Box*/


let person = prompt("Please enter your name", "Harry Potter");
let text;
if (person == null || person == "") {
  text = "User cancelled the prompt.";
} else {
  text = "Hello " + person + "! How are you today?";
}