/* Doing the 10 questions on Array as a challenge */

// Question 1:

console.log("Question Number -- 1")

let teaFlavors = ["green tea", "black tea", "oolang tea"]

const firstTea = teaFlavors[0];

console.log(firstTea);


// Question 2:

console.log("Question Number -- 2")

let cities = ["London", "Tokyo", "Paris", "New York"]

const favoriteCity = cities[2];

console.log(favoriteCity);

//Question 3:

console.log("Question Number -- 3")

let teaTypes = ["herbalTea", "whiteTea", "masalaChai"]

console.log(teaTypes);

teaTypes[1] = "jasmineTea"

console.log(teaTypes);

//Question 4:

console.log("Question Number -- 4")

const citiesVisited = ["Mumbai", "Sydney"]

console.log(citiesVisited);

// citiesVisited[2] = "Berlin"   // We can do by this way too

// citiesVisited[citiesVisited.length] = "Berlin" // We can do by this way too

citiesVisited.push("Berlin")

console.log(citiesVisited);

// Question 5:

console.log("Question Number -- 5")

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"]

console.log(teaOrders);

const lastOrder = teaOrders.pop();

console.log(teaOrders);

console.log(lastOrder);

// Question 6:

console.log("Question Number -- 6");

let popularTeas = ["green tea", "oolong tea", "chai"];

console.log(popularTeas);

let softCopyTeas = popularTeas;  // here the softCopyTeas is assigned to the array which is equal to popularTeas and so if the value is changed in the popularTeas array then the value will too be changed. Well this thing applicable to only array, object and all only, But in the case of number it isn't applicable

console.log("Soft Copy Done");

popularTeas.pop()

console.log("This is softCopyTeas", softCopyTeas);

console.log("This is popularTeas",popularTeas);

// Question 7:

console.log("Question Number -- 7");

let topCities = ["Berlin", "Singapore", "New York"];

let hardCopyCities = [...topCities]; // And this is known as spread operator. //Here the separate copy has been generated so this time, changes in array will not affect the hard copy.

console.log(topCities);

console.log("This is Hard Copy", hardCopyCities);

// Question 8:

console.log("Question Number -- 8");

let europianCities = ["Paris", "Rome"];

let asianCities = ["Tokyo", "Bangkok"];

//let worldCities = europianCities + asianCities // We can do this way but it will convert it to string from an array

//let worldCities = [europianCities, asianCities] // this will too get job done ut there will be two array and it will bein the 2D

let worldCities = europianCities.concat(asianCities); // this will do the job properly like we wanted to do it.

console.log(typeof (worldCities))

console.log(worldCities);

// Question 9:

console.log("Question Number -- 9");

let teaMenu = ["Masala Chai", "oolong tea", "green tea", "earl grey"];
 
let menuLength = teaMenu.length;

console.log(menuLength);

// Question 10:

console.log("Question Number -- 10");

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];

console.log(cityBucketList);

let isLondonInList = cityBucketList.includes("London");

console.log(isLondonInList);










