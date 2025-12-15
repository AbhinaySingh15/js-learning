// if
const isUserloggedIn = true
const temperature = 41

if (temperature === 41){
    console.log("less than 50");
} else{
    console.log("temperature is greater than 50");
}

/**<, >, <=, >=, ==, !=, ===(checking dataType also), !== */


const score = 200

if (score > 100) {
    let power = "fly" /**if we use var instead of const and let it wil allow to excess as global . which is not correct. */
    console.log(`User power: ${power}`);
}

console.log(`User power: ${power}`);


const balance = 1000

if (balance > 500) console.log("test");
/**Here scope of if is considered.it is known as implicit scope.and it is only take command that are written on that line only.it is not a good code. */

