// Arrays

const myArr = [0, 2, 3, 5, 6]
const myHeors = [ " abhinay", "hera"]

const myArr2 =   new Array(1, 2, 3, 4)
console.log(myArr[1]);


// Array methods

myArr.push(8) // add number to array.
myArr.push(7)
myArr.pop()
console.log(myArr);

myArr.unshift(9) // add element at starting.
myArr.shift()    // remove element from starting may be (once check it.)
console.log(myArr);


console.log(myArr.includes(9));
console.log(myArr.indexOf(19));
console.log(myArr.indexOf(3));

console.log(myArr);

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log (myn1);


console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)

console.log(myn2);


console.log("C ", myArr);


// jub array padhe ; to dhyaan de ki konsa operation array ko manipulate kerta hai aur konsa nhi.





