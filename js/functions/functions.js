//NAMED FUNCTION

function namedFunction() {
    console.log("I am a named function!");
}
namedFunction();

// NAMED FUCNTION - STORING THE RETURN VALUE 
function multiply(a, b) {
    return a * b;
}
let a = 20, b = 40;
console.log("The multiplication of " + a + " and " + b + " is " + multiply(a, b));


//FUNCTION EXPRESSION

let divideBy10 = function reduceUnitDigit(m) {
    console.log("The answer is " + (m / 10));
}
divideBy10(40);


//ANONYMOUS FUNCTION

let addFive = function (a) {
    console.log("The answer is " + (a + 5));
}
addFive(40);


//NESTED FUNCTION

function nestedFunction() {
    console.log("I'm the parent function!")
    function childFunction() {
        console.log("I'm the child function!")
    }
    childFunction();
}
nestedFunction();