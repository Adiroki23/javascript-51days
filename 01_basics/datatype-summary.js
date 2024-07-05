// Primitive => 7 types ://
//  String, Number, Boolean, Null, Symbol, Undefined, BigInt

const score = 100 

const scoreValue = 100.3

const isLoggedIn = false

const outsideTemp = null

let userEmil;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 634564528746238453


// Reference (Non primitive)

//Array, Objects, Functions  

const heros =["Hritik", "Doja", "Amir"];

let myObj ={

    name: "Hritik",
    agr : 33,
}

const myFunction = function(){
    Console.log("this is function");
}

// how to find the type of any veriable

console.log(typeof bigNumber);