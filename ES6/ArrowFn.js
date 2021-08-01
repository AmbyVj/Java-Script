//Simplifies function creation without a name.

let fn = function(x, y) { //As an expression
    return x * y;
 }
 let arrow = (x, y) => x * y;
console.log(fn(2,3));
console.log(arrow(2,3));

let amt = 500; //dynamically create a function and used it 
let account = (amt < 100) ?
  () => console.log('Less than Minimum Balance') :
  () => console.log('Met Minimum Balance');
  account(); 

function Account() {
    this.name = 'US101',
    this.id = 101,
    this.display = function () {
        console.log(this.id); //accessible -method of an object
                    
        // function innerFunction() { //Function inside the fn
        //     console.log(this.id); // global object - undefined
        //     console.log(this);  //Like window object  in browser
        // }
        
        let innerFunc = () => {
            console.log(this.id); //refers parent scope
        }
       // innerFunction();
        innerFunc();
    }
}
let x = new Account();
x.display();

