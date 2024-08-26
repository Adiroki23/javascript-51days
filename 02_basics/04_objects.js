// const tinderUser = new Object()       singleton 

const tinderUser = {}

tinderUser.id ="123abc"
tinderUser.name ="aditi"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "aditi",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}


//const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj4 = {...obj1, ...obj2, ...obj3}

// console.log(obj4);

const users = [
    {
        id: 1,
        email:"aditisrivas@gmail.com"
    },
    {
        id: 1,
        email:"aditisrivas@gmail.com"
    },
    {
        id: 1,
        email:"aditisrivas@gmail.com"
    },
    {
        id: 1,
        email:"aditisrivas@gmail.com"
    },
]

 users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnPropery('isLoggedIn'));

const course = {
    coursename: "js in eng",
    price:"999",
    courseInsructor: "Aditi"
}

// cource.courseInsructor

const {courseInstructor: instructor} = course

//console.log(courseInstructor);
console.log(instructor);

// {

//     name: "addit",
//     coursename: "js in hindi",
//     price: "free"
// }

const navbar = ({company}) =>{        //distructuring is being done here

}

navbar(company = "Adiroki")



