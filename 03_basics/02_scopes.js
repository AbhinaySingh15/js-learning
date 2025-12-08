{} /**it is scope. Thats mean under which things are going to be done, what is scope of that particular element. 
a) block scope; all element under that scope.
b) global scope; all element that is present outside the scope.
Now all value of global scope is available for block scope but vice versa not.*/

let a = 300
if(true){
    let a = 10
    const b = 20
    console.log("INNER: ", a);
}

//console.log(a);



function one(){
    const username = "abhinay"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
} /** yaha paas chota wala(scope) bade wala ke element access ker shakta hai lakin ulta nhi hoga. iseliyea console(website) wale me error ayi jub ki console(username) wale me nhi. */

//one()

if(true){
    const username = "abhinay"
    if(username === "abhinay"){
        const website = "youtube"
        console.log(username+ website);
    }
    // console.log(website); /** 1st error as it cant access website. */
}

// console.log(username); /**2nd error as it cant access username. */



//********************interesting************ */

console.log(addone(5));
function addone(){
    return num + 1
}


console.log(addTwo(5));
const addTwo = function(num){
    return num + 2
}

/** "Hoisting" ;age padhenge ki function kese declare kiye jate hain. */



