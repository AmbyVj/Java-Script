const b = true;

let chkValue = new Promise(function (resolve, reject) {
    if (b) {
        resolve("This is correct value");
    } else {
        reject("This is not a value");
    }
});
console.log(chkValue);


let value = new Promise(function (resolve, reject) {
    reject('Promise rejected'); // returns a promise
 });
   
 value.then(   // executes when promise resolved
     function successValue(result) {
         console.log(result);
     },
  ) 
 .catch(  //exe when rejects
     function errorValue(result) {
         console.log(result);
     }
 )
 .finally(
    function finalBlock() {
        console.log('This finally block is executed.');
    }
);