//immediate invokable fuction
(function(){
    console.log("Immediately invokable function");
})();

// function
function myfunc(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
myfunc('Ava', callMe);


let x= function(a,b)  { 
     return a+b;
 }
 console.log("Passing arguments : "+x(5,3));


function add(a,b)  { 
     return a+b;
 }
 console.log(add(5,5));

 console.log(SumAll([20,40,60,10,5,7,3,4,1]));
 
 function SumAll(n){
    var total=0;
     for(var i=0;i<n.length;i++)
         total += n[i];
     }
      

 