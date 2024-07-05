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



//*****************************************************


//Stack (Premitive), Heap (Non-Premitive) 

let myYoutubename = "aditijsdhfuihfh"

let anotherName =myYoutubename 
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email:"user@google.com",
    upi: "user@ybl"
}

let userTwo =userOne

userTwo.email = "hitest@google.com"

console.log (userOne.email)
console.log (userTwo.email)



