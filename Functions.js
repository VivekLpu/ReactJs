//Simple Function
function greet(){
    console.log("Hello Everyone!");
}
greet();

//functions with loop, parameter
function printNumber(n){
    for(let i=0; i<n; i++){
        console.log(i)
    }
}

printNumber(5);

//functions with multiple parameters
function add(a, b){
    let sum = a + b;
    console.log("Sum of two numbers: ",sum);
}
add(4,5);

//function with 'return'
function square(number){
    return number * number;
}

result = square(5);
console.log("Square of the number: ",result);

//Arrow Functions
//Arrow function with no input argument
const helloWorld=() => {
    console.log("Hello World!");
}

helloWorld();

//Arrow function with single input argument
const s=x => x*x ;
console.log(s(6));

//Arrow function with single line function body
const area = (l,b) => l * b;
console.log(area(5,6));

//Arrow function with single expression broken over multiple line
const message = (name, age) => (
    `Hello, ${name} you are ${age} years old`
);
console.log(message('Vivek',20));

//object literals return value

const createPerson = (name, age) => ({
    name: name,
    age: age
});
const person = createPerson('Rahul',25);
console.log(person);

