// A ternary is a short-hand if/else statement.

// it has the form:
// (condition) ? ______ : ______;

const pet = "dog";

// So instead of writing:

//  let petSound;
//  if(pet === "dog") {
//  petSound = "woof";
// } else {
//  petSound = "meow";
// }

// First a slightly better way:

// let petSound = "meow";
// if(pet === "dog") {
// petSound = "woof";
// }

// Now let's use a ternary:

// for the experts:
const sound = (pet === "dog")
                    ? "woof"
                    : (pet === "cat")
                            ? "meow"
                            : "chirp"