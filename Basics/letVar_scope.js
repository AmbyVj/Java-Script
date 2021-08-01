//Variables let & var;
var a=5;
let x=10;
const c =2;
if(true) {
    let x=100;    
    console.log("Var A :" +a+ " & let X: "+x); //5,100
    console.log("constant :"+c);
    var a=50;
    //c=20;  //error -Assignment to constant variable.
    //let x=100;//Throws an error;
}
console.log(" outside the block : Var A  :" +a+ " & let X: "+x);  //50,10
console.log("constant :"+c);

var i = 5;				
for (var i = 3; i < 7; i++) {		
    console.log("Var "+i);	  //3,4,5		        
}					
console.log("Outside the block : Var :"+i);  //i value now is 7 ;

let j = 5;
for (let j = 3; j < 7; j++) {
    console.log("let "+j);			        
}					
console.log("Outside the block :let "+j); //j value now is 5;


