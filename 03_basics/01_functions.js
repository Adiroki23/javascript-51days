function sayMyName(){
    console.log("A");
    console.log("D");
    console.log("I");
    console.log("T");
    console.log("I");
   
}

//  sayMyName()

function addTwoNumbers(number1, number2){
    // console.log(number1 + number2);  use less insted use this

    let result = number1 + number2
    console.log("aditi");
    return result

    // console.log("aditi");  after return nothing get exicuted so is line will not be exicuted so to ecicute it we neet to  write it befotr return line

}

const result = addTwoNumbers(3, 5)
 
// console.log("Result: ", result);

function loginUserMessage(username = "addu"){
    if(username === undefined){
        console.log("please enter the valid username");
    }

    
    return `${username} just logged in`
}

// console.log(loginUserMessage("adirokki"))
//console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000))

const user = { 
    username: "adiroki",
    price: 199

}

function handleObject(anyObject){
    console.log (`username is ${anyObject.username} and price is ${anyObject.price}`); 
}

handleObject(user)
handleObject({
    username: "appo",
    price : 499

})
const myNewArray = [200, 400, 100, 600]
 
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));