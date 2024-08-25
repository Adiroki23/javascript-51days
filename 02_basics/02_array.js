
const mar_hero = ["thor", " Iman", "Spman"]
const dc_hero =["supman","flash","batman"]

// mar_hero.push(dc_hero)




// console.log(mar_hero);
// console.log(mar_hero[3][1]);

// const allHeros = mar_hero.concat(dc_hero)
// console.log(allHeros);

const all_new_heros = [...mar_hero, ...dc_hero]

console.log(all_new_heros )

const another_Arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_Arr.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("addi"))
console.log(Array.from("addi"))
console.log(Array.from({name: "aditi"})) //interesting here the compiler will be confused to print the array of key or thr element .


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));








//NOTE
// PUSH is use to push an array as it is in the other array
// CONCAT is use to merge the element of array in other array
// CONCAT is handy for 2 arrays
//...(ie spread operator) is used for concatination of more then 2 oerators easily