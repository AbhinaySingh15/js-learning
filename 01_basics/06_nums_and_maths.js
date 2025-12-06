const score = 400;  // automatically defined that it is 'number dataType'.
console.log(score);

const balance = new Number(100);  // we manually defined that it is 'number dataType'.
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));   // Furthermore properties.

const otherNumber =123.8976

console.log(otherNumber.toPrecision(4)); // Properties: to give value in exact form , here upto 4 digit of number .

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // Properties; to make number look easier , here en-IN is used to make comma a/c to india number system.

// Number.MAX_SAFE_INTEGER/MIN_SAFE_INTEGER/MIN_VALUE/MAX_VALUE ; other properties of number.



//********************MATHS ******************* */

console.log(Math);  // in chrome, to get more properties.

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6 ,7));
console.log(Math.max(4, 3, 5, 8));

console.log(Math.random());
console.log((Math.random()*10) +1);
console.log(Math.floor(Math.random()) +1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // learn it little bit more.


