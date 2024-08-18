//understanding of var,let and const
//var declaration
//scope declaration
//global declaration
var globalVar = "I am global";
console.log(globalVar);

//local declaration
function abc(){
    var localVar = "I am local";
    console.log(localVar);
}
abc();

//Redecalaration is allowed in var
function a(){
    var q = 45;
    var q = 3;
    console.log(q);
}
a();

//Reassignment in var
function xyz(){
    var e = 78;
    e = 8;
    console.log(e);
}
xyz();

//Hoisting

//a variable can be used before declare 
//declaration moves to top

function H(){
    console.log("Before declaration: ",v);
    var v = 45;
    console.log("After declaration: ",v);
}
H();


//Let Variable
//scope declaration
let globalLet = "It is Global 'let'";
console.log(globalLet);

//local declaration
function x(){
    let localLet = "It is local 'let'";
    console.log(localLet);
    console.log(globalLet);
}
x();

function redevBylet(){
    let z=30;
//    let z=55; //redeclaration is not allowed in let keyword;
    console.log(z);
}
redevBylet();

function reAssignmentBylet(){
    let y = 20;
    y = 77;
    console.log(y); //reassignment is allowed in let keyword;
}
reAssignmentBylet();

//hoisting by let
function Hois(){
    console.log("before declaration: ",m);
    let m = 78;
    console.log("After declaration: ",m);
    //this function will give error because
    //Hoisting is not allowed in let keyword
}

//Hois(); //it will give error 

//const declaration
//scope declaration

const globalConst = "I am global 'const'";
console.log(globalConst);

//local declaration
function localConst(){
    const a ="I am local 'const'";
    console.log(a);
    console.log(globalConst);
}
console.log(a);
localConst();

//ReDeclaration by const
function G(){
    const b = 10;
//    const b = 45;//Redeclaration is not possible in const keyword
    console.log(b);
}
G();

//reAssignment by const
function D(){
    const j = 4;
//    j = 5; //ReAssignment is not possible in const keyword;
    console.log(j);
}
D();

function hoistingInConst(){
    console.log("Before declaration: ",v);
    const v = 45;
    console.log("After declaration: ",v);
    //Hoisting is not allowed in const keyword so it will give an error;
}
//hoistingInConst(); //this functin will give error