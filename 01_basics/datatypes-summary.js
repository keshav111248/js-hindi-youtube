// primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt





// Refrence (Non primitive)

// Arrsy, Objects, Functions, 

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name : "hitesh",
    age: 22,
}

const myFunction = function() {
    localStorage("hello world");

}



// https://262.ema-international.org/5.1/#sec-11.4.3



// *************************************************


// stack(Primitive), Heap (Non-Primitive)

let myYoutubename = "keshav"
let anothername = "chai"
anothername = "coffe"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "keshav@"

console.log(userOne.email);
console.log(userTwo.email);

