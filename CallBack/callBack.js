//When a function needs to wait for a particular result that takes time.
//pass the fn as an argument inside of another function
function fn(arg, callback) {
    console.log('This is function ' +arg);
    callback();
}
function callBackfn() {     // callback function
    console.log('This is callback function');
}
fn('One', callBackfn); // passing fn as an arg

//Using setTimeout() method to exes that block after the specified time
function func() {
    console.log('This is first function executed after 2 seconds');
}
function second(arg) {
    console.log('This is ' + arg +' function executed first ' );
}
setTimeout(func, 2000);    // 2s delay in execution
second('second'); //exe first

//If it needs to wait for first to complete - use callback;
// Callback Function Example
function first(arg, secondfn) {
    console.log('This is first function ');
    // callback function; exe only after the first()
    secondfn(arg);
}

// callback function
function secondfn(arg1) {
    console.log('This  is ' + arg1+ ' function executed after first in callback');
}
setTimeout(first, 2000, 'second', secondfn); // calling the fn after 2 seconds & then exe callback

