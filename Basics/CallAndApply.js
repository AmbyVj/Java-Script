//The call() and apply() methods are predefined JavaScript methods.
//They can both be used to call an object method with another object as argument.
// call()-- takes arguments separately; apply() --takes arguments as an array;

var lang = {
  sub_name: function() {
    return this.fName + " " + this.lName;
  }
}
var first = {
  fName:"Java",
  lName: "Basics"
}
var second = {
  fName:"Python",
  lName: "Basics"
}
console.log("Call the function with First object as an argument : "+lang.sub_name.call(first));
//console.log("Apply the function with First object as an array argument : "+lang.sub_name.apply(first));
//console.log("Call the function with First object as an argument : "+lang.sub_name.call(second));
console.log("Apply the function with First object as an array argument : "+lang.sub_name.apply(first));