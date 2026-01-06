const coding = ["aa", "bb", "cc", "dd"]

const values = coding.forEach((item) => {
    console.log(item);
})

console.log(values);

/**forEach loop don't return any value. */



const myNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4)

// const newNums = myNums.filter( (num) => {
//     num > 4
// }) /**if you start scope than you have to written "return" manually in scope. */

const newNums = []

myNums.forEach( (num) => {
    if (num > 4){
        
    }
})

// console.log(newNums);



const books = [
    {title: 'Book1', genre: 'Fiction', publish: 1981, edition: 2001 },
    {title: 'Book2', genre: 'Non-Fiction', publish: 1981, edition: 2002 },
    {title: 'Book3', genre: 'History', publish: 1981, edition: 2003 },
    {title: 'Book4', genre: 'Geography', publish: 1981, edition: 2004 },
    {title: 'book5', genre: 'Science', publish: 1981, edition:2005 },
    {title: 'Book6', genre: 'Fiction', publish: 1981, edition:2006 },
    {title: 'Book7', genre: 'History', publish: 1981, edition: 2007 },
    {title: 'Book8', genre: 'Love', publish: 1981, edition: 2008 }
]

let userBooks = books.filter( (bk) => bk.genre === 'History')

userBooks = books.filter( (bk) => {
    return bk.publish >= 2000 && bk.genre === "Abhinay"
})
console.log(userBooks);