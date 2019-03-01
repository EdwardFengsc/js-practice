// function phoneticLookup(val){

// var ourDog = {
//     "name": "Camper",
//     "legs": 4,
//     "tails": 1,
//     "friends" :["everything!"]
// };
// var myDog = {
//     "name": "Quincy",
//     "legs": 3,
//     "tails": 2,
//     "friends": []
// };
// var test = "name";

// var hatValue = ourDog[test];
// var shirtValue = ourDog.friends;
// console.log(hatValue);
// console.log(shirtValue);
// myDog.bark = "woof";
// myDog.name = "happy Quincy!";
// console.log(myDog.name);
// delete myDog.tails;
// console.log(myDog);
// var lookup = {
//     "alpha": "Adams",
//     "bravo": "Boston",
//     "charlie": "Denver"
// };
// var result = lookup[val];
// return result;
// }
// console.log(phoneticLookup("charlie"));



// var ourDog = {
//     "name": "Camper",
//     "legs": 4,
//     "tails": 1,
//     "friends" :["everything!"]
// };
// function checkObj(checkProp){
//     if(ourDog.hasOwnProperty(checkProp))
//     {
//         return ourDog[checkProp];
//     }
//     else{
//         return "Not Found";
//     }
// }
// console.log(checkObj("test"));



// var myMusic = [
//     {
//         "artist": "Billy Joel",
//         "title": "Piano Man",
//         "release_year": 1973,
//         "formats":[
//             "CD",
//             "8T",
//             "LP"
//         ],
//         "gold": true
//     },
//     {
//         "artist": "Beau Carnes",
//         "title": "Cereal Man",
//         "release_year": 2003,
//         "formats":[
//             "YouTube video",
//         ],
//         "gold": true
        
//     }
// ]

// var secondTree = myMusic[0].formats[2];
// console.log(secondTree)

// var myStorage = {
//     "car":{
//         "inside":{
//             "glove box": "maps",
//             "passenger seat": "crumbs"
//         },
//         "outside":{
//             "trunk": "jack"
//         }
//     }
// };

// var gloveBoxContents = myStorage.car.outside.trunk;
// console.log(gloveBoxContents);


// var collection = {
//     "2548":{
//         "album":"Slippery When Wet",
//         "artist": "Bon Jovi",
//         "tracks":[
//             "Let It Rock",
//             "You Give Love a Bad Name"
//         ]
//     },
//     "2468":{
//         "album":"1999",
//         "artist":"Prince",
//         "tracks":[
//             "1999",
//             "Little Red Corvette"
//         ]
//     },
//     "1245":{
//         "artist": "Robert Palmer",
//         "tracks": []
//     },
//     "5439":{
//         "album": "ABBA Gold"
        
//     }
// }

// var collectionCopy = JSON.parse(JSON.stringify(collection));

// function updateRecords(id, prop, value){
//     if(value === ""){
//         delete collection[id][prop];
//     }
//     else if(prop === "tracks"){
//         collection[id][prop] = collection[id][prop] || [];
//         collection[id][prop].push(value);
//     }
//     else{
//         collection[id][prop] = value;
//     }
//     return collection;
// }
// console.log(updateRecords(2468,"tracks","test"));
// console.log(updateRecords(5439,"artist","ABBA"));

// var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
// function randomFraction(min, max){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(randomFraction(5,15));
//  function checkequal(a,b){
//      return a == b ?  true :  false
//  }
//  console.log(checkequal(56,"56"))

// function checkSign(num){
//     return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
// }
// console.log(checkSign(-10))
// let catName = "Qunicy";
// let quote;
// catName = "Beau";

// function catTalk(){
//     "use strict";
//     catName = "Oliver";
//     quote = catName + "says Meow!";
// }
// catTalk();

// const myConcat = (arr1,arr2) => arr1.concat(arr2);
// console.log(myConcat([1,2],[3,4,5]))
// const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
// const squareList = (arr) => {
//     const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
//     return squaredIntegers;
// };


// const squaredIntegers = squareList(realNumberArray);
// console.log(squaredIntegers);


// const increment = (function() {
//     return function increment(number, value = 1){
//         return number + value
//     }
// })();
// console.log(increment(5,2));
// console.log(increment(5));


// const test = (number = 5, value = 1) => {
//     return value + number;
// }


// console.log(test(8))


// const sum = (function (){
//     return function sum(...args){
//         return args.reduce((a,b) => a + b, 0);
//     };
// })();
// console.log(sum(1,2,3,4,5,6,7));



// const test = [1,2,3].reduce((a,b) => a+ b,10)
// console.log(test);


// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// // Object.freeze(arr1);
// let arr2;
// (function(){
//     arr2 = [...arr1];
//     arr1[0] = 'potato'
// })();
// console.log(arr2);



// var voxel = {x: 3.6, y: 7.4, z: 6.54};

// var x = voxel.x;
// var y = voxel.y;
// var z = voxel.z;

// const {x : a, y : b, z : c} = voxel;

// const AVG_TEMPERATURES = {
//     today: 77.5,
//     tomorrow: 79
// };

// function getTempOfTmrw(avgTemperatures){
//     "use strict";
//     const {tomorrow : tempOfTomorrow} = avgTemperatures;
//     return tempOfTomorrow;
// }
// console.log(getTempOfTmrw(AVG_TEMPERATURES));

// const LOCAL_FORECAST = {
//     today:{min:72, max:83},
//     tomorrow:{min:73.3, max:84.6}
// };
// function getMaxOfTmrw(forecast){
//     "use strict";
//     const {tomorrow : {max : maxOfTomorrow}} = forecast;
    
//     return maxOfTomorrow;
// }

// console.log(getMaxOfTmrw(LOCAL_FORECAST));



// const [x,y,,z] = [1,2,3,4,5,6];
// console.log(z,x);



// let a = 8, b= 6;
// (() => {
//     "use strict";
//     [a,b] = [b,a]
// })();
// console.log(a);
// console.log(b);



// const source = [1,2,3,4,5,6,7,8,9,10];
// function removeFirstTwo(list){
//     const [,,...arr] = list;
//     return arr;
// }
// const arr = removeFirstTwo(source);
// console.log(arr);
// console.log(source);

// const stats = {
//     max:56.78,
//     standard_deviation:4.34,
//     mdeian:34.54,
//     mode:23.87,
//     min:-0.75,
//     average:35.85
// };
// const half = (function(){
//     return function half({max,min}){
//         return (stats.max + stats.min) / 2.0;
//     };
// })();
// console.log(stats);
// console.log(half(stats));

// const person = {
//     name: "shichao feng",
//     age: 18
// };

// const greeting = `Hello, my name is ${person.name}! 
//                  I am ${person.age} years old.`
//                  console.log(greeting);

// function makeList(arr){
//     const resultDisplayArray = []
//     for (let i = 0; i < arr.length; i++){
//         resultDisplayArray.push(`<li class ="text-warning">${arr[i]}</li>`);
//     }
//     return resultDisplayArray;
// }

// const resultDisplayArray = makeList()


// const createPerson = (name, age, gender) => ({ name, age, gender});
// let person = createPerson("shichaofeng",56,"male");
// console.log(person);

// const bicycle = {
//     gear: 2,
//     setGear(newGear){
//         "use strict";
//         this.gear = newGear;
//     }
// };
// bicycle.setGear(3);
// console.log(bicycle.gear);


// class SpaceShuttle{
// constructor(targetPlanet){
//     this.targetPlanet = targetPlanet;
// }
// }
// var zeus = new SpaceShuttle('Jupiter');

// console.log(zeus.targetPlanet);



// function makeClass(){
    
//     class Vegetable{
//         constructor(name){
//             this.name = name;
//         }
//     }
    
//     return Vegetable;
// }

// const Vegetable = makeClass();
// const carrot = new Vegetable('carrot');
// console.log(carrot.name);


// 

// import {capitalizeString} from "./string_function"
// const cap = capitalizeString("hello");
// console.log(cap);
// const capitalizeString  = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }
// export {capitalizeString};
// export const foo = "bar";
// export const bar = "foo";

import subtract from "./string_function";
console.log(subtract(7,6))
