const marvel_heros = ["thor", "Ironman","spiderman"]
const dc_heros = ["superman", "flash","batman"]

marvel_heros.push(dc_heros)

//console.log(marvel_heros);
//console.log(marvel_hero[3][1]);

const allHeros = marvel_heros.concat(dc_heros) // concat return kerta hai naya array . 
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

const another_array =[1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]], 12]

const real_another_aray = another_array.flat(Infinity)
console.log(real_another_aray);



Array.isArray(Array.isArray("Abhinay"))
console.log(Array.from("Abhinay"))
console.log(Array.from({name: "Abhinay"})) //interisting one.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

// learnmore about Array.is/from and others.