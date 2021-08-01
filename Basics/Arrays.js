var a = [12,4,32,9,2,7,1];

console.log(typeof(a));  

console.log("Array Elements :["+a+"]");

a[2] = 95;
console.log("Changed Value at index 2 : "+a[2]);
console.log("Try to print index 11 : "+a[11]);
a[11]= 11;
console.log(a);

a.push =55;
console.log(a);

a[4] = "Index 4";
console.log(a);

let toys = new Array('car','doll','videogame');
console.log(toys);

var names = ["Vechicle","Bus","Truck","Van","Car","Taxi","Bike"];
console.log(names);
console.log(names.sort());
console.log("Slice :"+names.slice(2,4)); //slice from 2;4th index not included;
console.log("Splice :"+names.splice(1,2));  //remove from 1 to 2
console.log(names.splice(2,0,'compact','SUV')); //Adds 2 ele w/o deleting any no. of ele(o remove)
console.log(names);
console.log("POP :"+names.pop()); // removes last ele
console.log("Shift :"+names.shift());  //removes first ele
console.log("Push :"+names.push('Plane')); //adds at last
console.log("UnShift :"+names.unshift('Rocket')); //adds at beginning;
console.log("Delete at index 1 :"+ delete names[1]); // deletes at specified index
console.log(names);

// console.log(a.sort());  //sort as String

// console.log(a.sort(function(a,b){
//     return a-b;
// }))

// let x;
// for(x in names) {
//     console.log(names[x]);
// }
// for(x of names) {
//     console.log(x);
// }

let even = [2,4,6,8];
let odd = [1,3,5,7,9];
let other = [0,'>','?'];
let num = odd.concat(even,other);
console.log(num);



