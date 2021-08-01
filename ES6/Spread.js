//[...] used to expand or spread an iterable or an array -> arguments are not possible in ES6
const spreadArr = ['US', 'Bank', 'Online', 'Services'];
//console.log(spreadArr);   // ['US', 'Bank', 'Online', 'Services']
console.log(...spreadArr); // [US Bank Online Services]
const concat = ["Welcome", "to",...spreadArr]
concat.push('!');
console.log(...concat);

//Spread operator is used as a arg -Rest Parameter;
let func = function(...args) {
    console.log(args);
}
func('U', 'S', 'B'); // [U,S,B]


function sum(x, y ,z) {
    console.log(x + y + z); //ignores the rest
}
const num1 = [1,3,5,7,10]; 
sum(...num1); //Pass multiple args 

//[...] with Object
const obj1 = { x : 'U', y : "S" };
const obj2 = { z : 'B' };
const obj3 = {...obj1, ...obj2}; // add both obj members to obj3

console.log(obj3); // {x: U, y: S, z: B}