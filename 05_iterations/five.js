

const coding = ["js","ds", "ss","sf"]

coding.forEach( function (item) {
    // console.log(item);
}) 


    
function printMe(item){
    // console.log(item);
}

coding.forEach(printMe)



coding.forEach( (item, index, arr)=> {
    // console.log(item, index, arr);
})



const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "phython",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "j"
    }
    
]

// myCoding.forEach( () => {})  /**call back with help of forEach loop. */

myCoding.forEach( (item)=> {
    console.log(item.languageName);   /**we get access of array. */
})