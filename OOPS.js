class Student{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    //method to show student's details
    displayInfo(){
        console.log("The name of student: ",this.name);
        console.log("The age of student: ",this.age);
    }
}

//create an instance for the class student
const student = new Student("John Elia", 15);
student.displayInfo();