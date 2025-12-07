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

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2)

const Obj3 = {...obj1, ...obj2} //we use it more oftenly
console.log(Obj3);


const user = [
    
    {
        id: 1,
        email: "aaaa@milgaya"
    },
    {
        id: 1,
        email: "aaaa@milgaya"
    },
    {
        id: 1,
        email: "aaaa@milgaya"
    },
    {
        id: 1,
        email: "aaaa@milgaya"
    },
]

user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged')); // one of the methods.

const course = {
    coursename: "js in hindi",
    price: "9999",
    courseInstructor: "Hitesh Sir"
}

// course.courseInstructor

const {courseInstructor: instructor} = course // destructing object

//console.log(courseInstructor);
console.log(instructor);


// {
//     "name": "histesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

{
    {},
    {},
    {}
}