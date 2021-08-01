let fn = function () {
    console.log(arguments);
}
fn('a','b','c'); //  access them using the 'arguments' keyword :[Arguments] { '0': 'a', '1': 'b', '2': 'c' }

//Arrow fns has no arguments binding.
// let arrowFn = () => {
//     console.log(arguments);
// }
// arrowFn(1,2,3);   // Arguments] { '0': {}, '1': [Function: require] resolve: [Function: resolve].....

// cannot use as a constructor
let Acc = () => {};
let Acc = new Acc(); // TypeError: Foo is not a constructor