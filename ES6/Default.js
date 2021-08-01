// if no args passed, it will take default values;

//Passing Fn Value as def Value
const num = () => 5;
const calculate = function( x, y = x * num() ) { //x is passing value; y is calc fn value
    return x + y; 
}
const ans = calculate(10);
console.log("Default Value passed as a function value : " +ans);   //60      

//if it pass undefined to a default arg function,then it takes def value;
function undef(x = 10) {
    console.log("Printing default value when 'undefined' is passed " +x);
  }   
  undef(undefined); // takes default value 1 

// Expr as def values;
function calc(x = 2, y = x,  z = x * y) {
    console.log("Printing calculated expression with default value: "+(x + y + z ));
}
calc(); 