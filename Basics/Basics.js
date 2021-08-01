
console.log("JavaScript");

// (diff)empty an array in JS
let a = [1,2,3,4,5];
//a=[];

//a.length =0;

//a.splice(0,a.length);

console.log(a);
while(a.length) {
    a.shift(); 
  }
console.log("Array after Shift() : " +a);

let b = [6,7,8,9,10];
console.log(b);
while(b.length) {
    b.pop();
}
console.log("Now array after pop() : "+b);

// considering as string after str concat: 'text'+1
console.log('text' +2+2);
console.log(2+2+ 'text');

// 10+20+'30' =3030
console.log(10+20+'30');




