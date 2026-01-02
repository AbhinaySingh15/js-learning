/**For Loop */

for(let index = 0; index < 10; index++){
  const element  = index;
  if(element == 5){
    // console.log("5 is here")
  }
//   console.log(element);
}

for (let index = 0; index < 5; index++) {
    console.log(`Outer loop value: ${index}`);
    for (let i = 0; i < 5; i++) {
        // console.log(`Inner loop value${i} and inner loop ${index}`)

        // console.log(index + '*' + i + '=' + index * i)
    }
}



let myArray = ["abhinay","akash","divyanshu","puspendra"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}



/**Break and continue  */

for (let index = 1; index < 20; index++) {
    if(index == 5){
        console.log(`Detected 5`)
        // break
        continue
    }
    console.log(`vlaue of i is ${index}`)
    
}