class Student{

    setStudent(name,id,dept) {
        this.name =name;
        this.id=id;
        this.dept=dept;
    }
    getStudentName(){
        return this.name;
    }
    getStudentID(){
        return this.id;
    }
    getStudentdept(){
        return this.dept;
    }

}
let st = new Student();
st.setStudent('Ava',101,'IT');
console.log(st.getStudentName());
console.log(st.getStudentdept());