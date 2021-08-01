//Chaining promises with then
let value = new Promise(function (resolve, reject) {
    resolve("Promise resolved"); // returns a promise
  });
  
  value    // exe when promise is resolved  
    .then(function successValue(result) {
      console.log(result);
    })
  
    .then(function successValue1() {
      console.log("This is next function after resolved");
    })

    .then(function successValue2() {
        console.log("This is next function in the chain");
    })

    .then(function successValue2() {
      console.log("Can call multiple functions in this chain");
  });