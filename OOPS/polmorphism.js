class student{
    constructor(name){
        this.name = name;
    }
    readingBook(){
        console.log(this.name +" read a book");
    }
}
let s1 = new student('Ava');
console.log(s1.readingBook());

//********************/
class dept extends student{
    readingBook(){
        super.readingBook();
        console.log(this.name +" wrote a book");
    }
}
let d1=new dept('Anne');
console.log(d1.readingBook());