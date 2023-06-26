
///list of stored values thats can be called easier than using a lot of if else conditionals 
const petSounds = {
    "dog": "woof",
    "cat": "meow",
    "bird": "chirp",
    "snake": "hiss",
    "fish": "bubbles, bubbles, bubbles",
    "cow": "moo",
    "wolf": "howl",
    "chicken": "cluck"
}

const pet = "bird";

console.log(petSounds[pet]);  //returns chirp

//-----------------------------------------------------------

const produce = {
    "apple": { price: 0.79, color: "red", sku: "4056" },
    "orange": { price: 0.99, color: "orange", sku: "3122" },
    "onion": { price: 0.99, color: "yellow", sku: "7163" },
  }

  const product = "orange"
  const { price, color, sku } = produce[product]
  console.log(`${product} is ${color} and costs $${price}.`) // return orange is orange and costs $0.99

  //-----------------------------------------------------------
  
  const grades = {
    "100": "A", "90": "A", "80": "B", "70": "C", "60": "D",
  }

  const grade = 32; 

  console.log(grades[Math.floor(grade / 10)*10 + ""] || "F");

  //Math.floor rounds down so 4.6 returns 4 if you have 9.9 it returns 9
  //Math.ceil rounds up so 2.2 returns 3 and 7.6 returns 8