class student{

    constructor(){
        console.log("Called when  gets instantiated")
    }

    student_Details(name,id){
        this.name =name;
        this.id=id;
    }
}
let s1 = new student(); //creates object for the class student;
s1.student_Details('Ava','101');
console.log("Student name :"+s1.name);

//Prototype;
let Dept_Details = function(deptName,deptID) {
    //This is a constructor w/o creating a class;
    this.deptName =deptName;
    this.deptID=deptID;

    //This constructor has its own methods
    this.getdeptName = function(){
        return this.deptName;
    }
   
}
Dept_Details.prototype.getdeptId=function(){
    return this.deptID;
}

let d1 = new Dept_Details("ECE",'D1');
console.log(d1.getdeptName());
console.log(d1.getdeptId());