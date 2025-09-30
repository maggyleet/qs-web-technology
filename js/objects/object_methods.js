let b = { name: 'guava', color: 'green', seeded: true, sourceFor: 'protein' };

// keys() - return the array of keys separately from the object

console.log(Object.keys(b)); // [ 'name', 'color', 'seeded', 'sourceFor' ]

// values() - return the array of values separately from the object

console.log(Object.values(b)); // [ 'guava', 'green', true, 'protein' ]

// entries - return the array of keys and values separately from the object

console.log(Object.entries(b));

// seal - when the object is sealed we can update the existing values inside the object but we cannot add any key & values to the object

console.log(b);
b.color = "yellow";
console.log(b);

console.log(b);
b.biologicalName = "Psidium guajava";
console.log(b);

console.log(Object.seal(b));
b.eaten = "raw"; // wont get added since it is sealed
console.log(b);

// isSealed - returns whether the object is sealed or not 

console.log(Object.isSealed(b)); //true


// Freeze - when the object is freezed we cannot update the existing values as well as we cannot add the key, values also
console.log(b);

// If you need a modifiable version for a sealed object, create a new object:
const b1 = { ...b };

b1.sweet = "Laddu";
console.log(b1);

b1.game = "Plucking";
console.log(b1);

console.log(Object.freeze(b1));

b1.color = "red";
console.log(b1); // wont change, since the obj is freezed

console.log(Object.isFrozen(b1));

//unfreeze
//Using the spread syntax (...) for objects: This creates a new object with the same properties as the original, but the new object is not frozen.

const frozenObject = Object.freeze({ a: 1, b: 2 });
const unfrozenCopy = { ...frozenObject };
unfrozenCopy.c = 3; // This will work on the copy
console.log(unfrozenCopy); // { a: 1, b: 2, c: 3 }