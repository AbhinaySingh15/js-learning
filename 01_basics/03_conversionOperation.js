let score = "22abs"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

/*
"22" => 33
"22abs" => NaN
true => 1 ; false => 0
*/

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1=> true ; 0 => false
// "" => false
// "Abhinay" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//**************  Operation *****************//

let value = 3
let negValue = -value
console.log(negValue);

/*
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(1/3);
console.log(2%3);
*/

let str1 = "hello"
let str2 = " Abhinay"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 +2);
console.log(1 + 2 + "2")

console.log( (3 + 4) * 5 % 3); // aesa likho

console.log (+true);
console.log(+"");  // ye preffered nhi hai
