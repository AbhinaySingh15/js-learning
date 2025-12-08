
function sayMyName(){
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
    console.log("N");
    console.log("A");
    console.log("Y");
}

/*sayMyName  , only this is act as referel.*/
//sayMyName()


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(2, 3)

//console.log("Result: ", result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Abhinay"));
//console.log(loginUserMessage());


function calculateCarPrice(val1, val2,...num1) /* here 3 dots are responsible to take multiple value from arguments. and also val1/2 take the starting arguments and rest return a num1.*/
{
    return num1
}

//console.log(calculationCarPrice(200, 400, 500, 2000))

const user = {
    username: "abhinay",
    prices: 299
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`)
}

//handleObject(user)

handleObject({
    username: "san",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
