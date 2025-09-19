// Checking if a number is greater than another number:

let num1 = 45;
let num2 = 35;

console.log("I am regular Upper Code");

if (num1 > num2) {
    console.log("num1 is greater than num2");
} else {
    console.log("num1 is not greater than num2");

}

console.log("I am regular Bottom Code");


// Checking if a String is equal to another String.

let username = "chai"
let anotherUsername = "chai"

if (username == anotherUsername) {
    console.log("Pick another Username");
} else {
    console.log("Not Equal, can use it ");
}

// Checking if a variable is number or not

let score = 44;

if (typeof score === "number") {
    console.log("This is a number"); 
} else {
    console.log("NO, this is not a number");
    
}



// Checking if a variable is object or not

let hello = [];

if (typeof hello === "object") {
    console.log("This is an Object"); 
} else {
    console.log("NO, this is not an Object");
    
}


// Checking if a boolean is true or false

let isReady = true

if (isReady === true) {
    console.log("This is Ready");
} else {
    console.log("This is not Ready");
}


// Checking if an Array is empty or not

let items = []

console.log(items);

console.log(items.length);
if (items.length == 0) {
console.log("Array is empty");
} else {
    console.log("Array is not Empty");
    
}