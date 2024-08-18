"use strict";
//globally
console.log(this); //return window object for browser


//this key within the function
function a(){
    console.log(this);

}
//in strict mode
//non deleted, read only
a();

//the value of 'this' also depends on strict mode
//also depends on how the function is called
a(); //in strict mode -> undefined
//if it is in non strict mode it will give you window object
//'this' keyword is behaved like global object
window.a();
//if it is called with reference then it will again give u window object in strict mode
//also depends on how the function is called

const obj = {
    y : 5,
    //function
    x : function() {  //x is a method when creating a function inside an object
        console.log(this);
        //this key will refer to obj, this.y -> obj of y
    },
};
obj.x();

//call apply and bind (sharing method)
const Student = {
    name: 'Ayush',
    printName : function(){
        console.log(this);
    },
};
Student.printName();

const Student2 = {
    name: 'Rahul',
};
Student.printName.call(Student2);
Student.printName.apply(Student2);

//bind to create new function with this set for student2
const printNameForStudent2 = Student.printName.bind(Student2);
