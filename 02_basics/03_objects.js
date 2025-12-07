// singleton 
// object.create

// object literals

const mySym = Symbol("Key1") // Symbol dataType


const JsUser = {
    name: "Abhinay ",
    "full name": "Abhinay Singh",
    [mySym]: "myKey1", //key ki tarh act kerwana. and jub symbol ko represent kerna ho tub square bracket use kerte hain.
    age: 19,
    location: "Gwalior",
    email: "abhinaysinghrjaa@google.com",
    isLoogedIn: false,
    lastLoginDays: ["Monday", "Tuseday"]

}

console.log(JsUser.email);
console.log(JsUser["email"]); // accessing email(object value)
console.log(JsUser["full name"]);
console.log(jsUser[mySym]);

// when you are excessing object value use [].

JsUser.email = "abhinayhai@google.com"  // changing the value of object.

//Object.freeze(JsUser) // all value of object are locked.

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User. ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());






