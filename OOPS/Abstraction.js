//Every function's property is called prototype;Every function has empty prototype;
// JS has prototype based inheritance

let Dept_Details = function(deptName,deptID,deptSavings) { // Constructor w/o creating a class;
    this.deptName =deptName;
    this.deptID=deptID;
    this.deptSavings =deptSavings;

    //only accessible within this function;
    let funding = 1000 ; 
    let calcDeptSavings = function(){
        let total = deptSavings *2 +funding;
        console.log("Total funds :" +total);
    }
    
    this.getdeptName = function(){  //This constructor has its own methods
        console.log("Name : "+this.deptName);
        calcDeptSavings();
    }   
}
//Instead of giving inside prototype:
Dept_Details.prototype.getdeptId=function(){
    return this.deptID;
}

function prototypeFunc(){
    //console.log("prototype");
 }
 console.log(prototypeFunc.prototype);  //{}
 
let d1 = new Dept_Details("ECE",'D1',100);
d1.getdeptName();
console.log(d1.getdeptId());
console.log(d1.calcDeptSavings); //undefined