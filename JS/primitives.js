// Number

let balance = 1220;

let anotherBalance = new Number(1220);  // this is a object

console.log(balance);

console.log(anotherBalance);

console.log(typeof(balance));

console.log(typeof(anotherBalance));

 // null and undefined

 let firstname = null;
 
 let lastname = null;

 console.log(firstname);

 console.log(lastname);

 console.log(typeof(firstname));

 console.log(typeof(lastname));


 //string

 let myString = "Hello";

 let myString1 = 'Helo';

 let myString2 = `Helo`;

let oldGreet = myString + " " + "Harry";

console.log(oldGreet);

let greetMessage = `${myString} Harry`;

console.log(greetMessage);

let demoValue = `Value is ${2*2}`;

console.log(demoValue);

// Symbol (it will always be unique)

let sym1 = Symbol('Hello');

let sym2 = Symbol("Hello");

console.log(sym1 == sym2);