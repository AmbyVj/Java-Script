class College{
    constructor(){
        console.log("Called when  gets instantiated")
    }

    college_Details(col_name,rank){
        this.col_name =col_name;
        this.rank=rank;
    }
}
/***********************/
class student extends College{ 

    student_Details(name,id){
        this.name =name;
        this.id=id;
    }
}
let s1 = new student();
s1.college_Details("UC",3);
s1.student_Details("Ava",101);
console.log(s1);