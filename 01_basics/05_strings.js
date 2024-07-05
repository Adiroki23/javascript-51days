const name =" aditi"
const repoCount = 50

//console.log(name + repoCount + "Value" );

console.log(`Hallo i am ${name} and my repo count is ${repoCount}`);

const gameName = new String('adiroki')

console.log (gameName[0]);
console.log (gameName.__proto__);

console.log (gameName.length);
console.log (gameName.toUpperCase());
console.log (gameName.charAt(6));
console.log (gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-6, 4)
console.log(anotherString);

const newStringOne = "   adiroki   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://www.google.com/search?q=fod&oq=fod&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARAuGEDSAQc4MjJqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8 "
console.log(url.replce('%20', '-'))

console.log(url.includes('sundar'))

console.log(url.includes.split('-'))

