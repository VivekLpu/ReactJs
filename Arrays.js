//Intializing the array
const nums = [1,2,3,4,5,6,7,8,9,10];

//filter()
const evenNumbers = nums.filter(num => num % 2 == 0)
console.log("Even Numbers: ",evenNumbers);

//creating a new Array from Existing array
const squareNumbers = evenNumbers.map(num => num ** 2);
console.log("Squared Numbers: ",squareNumbers);


//find()
const FirstGreater = squareNumbers.find(num => num > 50);
console.log("Greater than 50: ",FirstGreater);

//concat()
const additionNumber = [121,152];
const combinedArray = squareNumbers.concat(additionNumber);
console.log("Combined array: ",combinedArray);

//copywithin()
//array.from()
const str = '7894561236'
const numArrayFromStr = Array.from(str);
console.log("Array From String: ",numArrayFromStr);

//array.of()
const arrayOfNum = Array.of(12,11,23,12);
console.log("Array of(): ",arrayOfNum);

//destructuring
const myFavLang = ["HTML", "CSS", "PYTHON", "JAVASCRIPT", "JAVA"];
//ES5
var a = myFavLang[0];
var b = myFavLang[4];
var c = myFavLang[3];
console.log("1st Language: ", a);
console.log("4th Language: ", b);
console.log("2nd Language: ", c);