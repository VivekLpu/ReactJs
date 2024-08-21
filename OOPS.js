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

//Inheritance 
class Car{
    constructor (brand){
        this.brand = brand;
    }

    Present(){
        return "I have a "+this.brand;
    }
}

class Model extends Car{
    constructor(brand, model){
        super(brand); //call the parent class 'Car'
        this.model = model;
    }

    Show(){
        return this.Present() + ". This  is a "+this.model + " model.";
    }
}

const myCar = new Model("Ford","Mustang");
console.log(myCar.Show());

