// Immediately Invoked Function Expressions(IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})();

/**iife: wo function jo imidiately exicute ho jaye.
 * global scope ke pollution se problem hoti hai kai baar, usko hata ne ke liye use hota hai.
 */

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('abhinay');