// Primitive

// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 342156789876n

//Reference (Non primitive)

// Array, Objects, Fuctions

const heros = ["shaktiman", "naagraj", "doga"]//array

let myObj ={
name: "Abhinay",
age: 22,
} // Object

const myFunction = function(){
    console.log("hello world");
}


// to find datatype :

console.log(typeof bigNumber);

//ecma script 11.4.3 the type of Operator


//++++++++++++++++++Memory++++++++++++++++++++//

// Stack(primitive), Heap(Non-primitive) (2 type of memory)

let myYoutubename = "aaobanaye"

let anothername = myYoutubename
anothername = "banatehai"

console.log(myYoutubename);
console.log(anothername);

let userOne ={
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);