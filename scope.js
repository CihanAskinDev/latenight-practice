// Scope refers to where a variable (or function) is available.

// with "export", we can make variables and functions available to other modules.

// but leat's focus on what's happening inside a single module.

// we can define a variable (or function) "Globally", which means it is available ANYWHERE inside the module.

const firstName = "cihan"; // this is now global

const lastName = "Askin";

if(lastName === "Askin") {
 const message = "Good Morning!" // this variable is ONLY available inside
 // this if statement
}

// console.log(messge); // This throws an errow because message is not in scope

let greeting;

if(firstName === "Cihan") {
    greeting = "Hello" + firstName;
}

console.log(greeting);

const pet = "dog";

let petSounds;

if(pet === "dog") {
    petSound = "woof";
} else {
    petSound = "meow";
}

// Let's introduce the ternary... in a minute...
// (see ternary.js)

function getBirthday(person) {
    let birthday;
    if(person === "Cihan") {
        birthday = "july 28";
    } else {
        birthday = "Now. 15";
    }
    return birthday;
}

const birthday = getBirthday("Cihan");
console.log(birthday);



