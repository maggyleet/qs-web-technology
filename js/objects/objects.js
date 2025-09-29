// CREATING AN OBJECT USING CONSTRUCTOR METHOD

let a = new Object();
a.name = "Raulconnect";
a.age = 23;
a.city = "london";
console.log(a);

// CREATING AN OBJECT USING VARIABLE DECLARATION AND DEFINITION

let b = {
    name: "guava",
    color: "green",
    seeded: true,
    sourceFor: "protein"
};

console.log(b);

// ACCESSING THE VALUE FROM THE OBJECT using . (dot notation)

console.log(a.city);

// ACCESSING THE VALUE FROM THE OBJECT using []

console.log(b['seeded']);

// ADDING KEYS TO THE OBJECT

a.job = "Content creator";
console.log(a.job);
console.log(a);

// DELETING KEY FROM THE OBJECT

delete b.color; // delete b['color'];
console.log(b);

