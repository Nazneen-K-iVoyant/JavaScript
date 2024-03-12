/*To initialize an object, use curly braces */

var emptyObject = {};
var personObject = {
  firstName: "John",
  lastName: "Smith",
};
console.log(personObject);

/*Member Addressing 
Members of Objects can be addressed using the brackets operator []
very much like arrays, but just like many other object oriented languages, the period . operator can also be used.

They are very similar, except for the fact that brackets return a member by using a string, in contrast to the period operator, which requires the member to be a simple word (the word should not contain spaces, start with a number or use illegal characters)*/

personObject.age = 23;
personObject["salary"] = 14000;
console.log(personObject); //---> Here the age and the salary are added  to the personObject object

/*Iteration */
/*Iterating over members of a dictionary is not a trivial task, since iterating over objects can also yield members who don't actually belong to an object.
Therefore, we must use the hasOwnProperty method to check that the member in fact belongs to the object. */

/*hasOwnProperty - The hasOwnProperty() method of Object instances returns a boolean indicating whether this object has the specified property as its own property (as opposed to inheriting it). */

for (var member in personObject) {
  if (personObject.hasOwnProperty(member)) {
    console.log("The memebers of PersonObject is " + member);
  }
}

/*Exercise
You must define an object called person with the following members:

The member firstName of the person is "Jack"
The member lastName of the person is "Smith"
The member age of the person is 19
The member employed of the person is true
 */

var  person =new Object();
person.firstNamee="Jack"
person.lastNamee="Smith"
person.agee=19
person.employed=true
console.log(person)