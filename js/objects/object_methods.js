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

