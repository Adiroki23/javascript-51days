//singleton

// object literals

// Object.create <= (constructor method hai ye)

const mySym = Symbol("key1")

const JsUser = {
     name: "Aditi",
     "full name":"Aditi srivastava",
     [mySym]: "mykey1",  //mySym without big bracket ie [] is treated as string not a key
     age: 18,
     location:"Uttar Pradesh",
     email:"aditi@gmail.com",
     isLoggedIn:false,
     lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(typeof JsUser[mySym])


JsUser.email = "aditi@gmail.com"
// Object.freeze(JsUser)

JsUser.email = "aditi@gmail.com"
// console.log(JsUser);


// adding a function in the objects 

JsUser.greetings = function(){
    console.log(`Hello JS user`); 
}

JsUser.greetingsTwo = function(){
    console.log(`Hello JS user, $(this.name)`); 
}
console.log(JsUser.greeting);
console.log(JsUser.greetingsTwo());

























//with JsUser.name    we can access only 1 element or string not the set of strings like full name values like aditi srivastava together
// for that we need wo convert it into array elemnt string Eg---console.log(JsUser["full name"])