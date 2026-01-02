/**For of Loop */

/**["","",""] 
 * [{},{},{}]
*/

const arr = [1, 2, 3, 4, 5]

for(const num of arr){
   // console.log(num);
}


const greetings = "Abhinay Singh"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}



/**Maps */

const map = new Map()
map.set('IN', "INDIA")
map.set('USA',"United State of America")
map.set('Fr',"France")

console.log(map);


for(const[key, value]of map){ /**array ka distructure kiya humne yaha [key , value] kerke */
    console.log(key, ':-', value);
}

const myObject = {
    'game1': 'NFS',
    'game2':'Spiderman'
}

// for (const [key, value]of myObject){
//     console.log(key, ':-', value);
// }