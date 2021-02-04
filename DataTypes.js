//DataTypes: number,String, Boolean,NULL,Undefined
console.log("A is of type : "+ typeof(a));  //Undefined

var a=10;
console.log("Var A is declared & initialized :" +a);

a="Ava";
console.log("Now A holds a String value : "+a);

a=true;
console.log("Now A is of type : "+ typeof(a));

a=null;  //object
console.log("Now A is of type : "+ typeof(a));

const b=20;
console.log("Now A is of type : "+ typeof(b)+"- with constant value :"+b);
b="string1";//TypeError: Assignment to constant variable.
console.log("Try assigning string to B :" +b);


