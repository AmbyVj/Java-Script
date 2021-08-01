// This is a function constructor:
function myFunction(arg1, arg2) {
  this.firstName = arg1;
  this.lastName  = arg2;
}
// This creates a new object
var x = new myFunction("Tim", "Bay");
console.log(x.firstName); //Tim


//creates an object with two properties & a method
var myObject = {
    firstName:"Ava",
    lastName: "VA",
    name: function () {  //The name method is a function.
      console.log("Name: "+this.firstName + " " + this.lastName);  // Will return "Ava VA"
      return this;    //Will return [object Object] [the owner object]
    }
  }
  console.log(myObject.name());



  var y = myFunc(); 
  console.log(y);         // y will be the window object

  function myFunc() {
    return this;
  }