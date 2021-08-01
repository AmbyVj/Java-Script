//Tagged template is written like a function defn- do not pass () when calling the literal.

// function tagExample(strings) {
//     return strings;
// }
// const result = tagExample('US Bank');// passing argument

console.log("Tagged Template")
function taggedTemplate(strings) {
    return strings;
    }//[An array of string values are passed] - can pass the values and expr too as the remaining arguments
const op = taggedTemplate`US Bank`; // instead of passing arg,create tagged template
console.log(op);


// passing multiple args in the tagged temaplate
const str = 'USB ';
const msg = true;

function taggedTemplate1(strings, service) {
    let str0 = strings[0]; // wc
    let str1 = strings[1]; // , OLB
    if(msg) {
        return `${str0}${service}${str1}`;
    }
}
const output = taggedTemplate1`Welcome to ${str}- Online Banking Service`; // passing arg
console.log(output);


//simple to include var and expr inside a str -interpolation
const account = 'USB';
console.log(`Welcome to ${account}`); 

const result = `\nThe sum of  4 + 5 is ${7 + 5}`; // expr
console.log(result); 

console.log(`${result < 10 ? 'Lesser': ' Greater'}`) //lambda


const txt = `\nThis is a multi -line 
text without using "+" sign
but with template literals (backticks)
in the code.`
console.log(txt);

const st = 'The "difference" inside a string'; // different quotes
const st1 = 'A \'quote\' inside a string'; //same in backslash



