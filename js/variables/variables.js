//VAR - (GLOBAL SCOPE)

{
    var a; //declaration
    a = 40; //intialization
    console.log(a);

    var a = 60; // redeclaration and initialization
    console.log(a);

    a = 120;
    console.log(a);
}

console.log(a);

//LET - (BLOCK)
{
    let b; //declaration
    b = 60; //initialization
    console.log(b);

    b = 100; //re-initialization
    console.log(b);

    b = 200; //re-initialization
    console.log(b);

}

// console.log(b); // error - accessing the let variable outside the block

//CONST - (BLOCK)
//BOTH THE DECLARATION AND INITIALISATION SHOULD BE DONE WITHIN THE SAME LINE

const c = 40; // declaration and initialization
console.log(c);
