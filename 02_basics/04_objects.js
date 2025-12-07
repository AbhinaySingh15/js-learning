//const tinderUser = new Object() // it is singelton

const tinderUser = {} // here it is non-singleton.

tinderUser.id = "123abc"
tinderUser.name = "omiee"
tinderUser.isLoggedIn = false

//console.log(tinderUser);


const regularUser = {
    email: "some@google.com",
    fullname: {
        userfullname: {
            firstName: "abhinay",
            lastName: "Singh"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstName);

