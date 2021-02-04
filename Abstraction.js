
let Dept_Details = function(deptName,deptID,deptSavings) {
    //This is a constructor w/o creating a class;
    this.deptName =deptName;
    this.deptID=deptID;
    this.deptSavings =deptSavings;

    //only accessible within this function;
    let funding = 1000 ; 
    let calcDeptSavings = function(){
        let total = deptSavings *2 +funding;
        console.log("Total funds :" +total);
    }
    //This constructor has its own methods
    this.getdeptName = function(){
        console.log("Name : "+this.deptName);
        calcDeptSavings();

    }
   
}
Dept_Details.prototype.getdeptId=function(){
    return this.deptID;
}

let d1 = new Dept_Details("ECE",'D1',100);
d1.getdeptName();
console.log(d1.getdeptId());
console.log(d1.calcDeptSavings); //undefined