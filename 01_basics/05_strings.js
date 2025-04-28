const name = "abhinay"
const repoCount = 2 

// console.log(name + repoCount + "hehehe");

// this above method is not preffered.

console.log(`hellomy name is ${name} and my repo count is ${repoCount}`);

// we use this one (above one) in project.

const gameName = new String('abhinay-singh')

// sare methods(prototype) ko master kerna hi string padhna hai !

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-13, 4)
console.log(anotherString);

const newStringOne = "  abhinay   "
console.log(newStringOne);
console.log(newStringOne.trim());

// .trim used for to avoid that space in string of abhinay.

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'));

// jitna jada string se strong hoge utna jada backend me madat milegi.

console.log(url.includes('sundar'));

console.log(gameName.split('-'));