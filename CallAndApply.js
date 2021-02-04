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
  ftName:"Python",
  lName: "Basics"
}
console.log("Call the function with First object as an argument : "+lang.sub_name.call(first));
console.log("Apply the function with First object as an array argument : "+lang.sub_name.apply(second));