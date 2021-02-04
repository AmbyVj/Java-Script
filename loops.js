var a=5,c=5;
var b="5";
console.log(a==c)
console.log(a===c)
console.log(a==b); //value comparison -true
console.log(a===b);  //value & datatype comparison =false

console.log(5<6>9>8);   //false 5<6 =1>9 =0>8 =false
console.log(5<6>9>-1);  //true  5<6=1>9 =0>-1 =true

var i=1;
do {
    console.log(i);
    i++;
}while(i<3);

switch(5)
{
    case 1:
        console.log("value is 1")
        break;
    case 5:
        console.log("value is 5")
        break;
}

for(i=1;i<5;i++)
    console.log(i);
    