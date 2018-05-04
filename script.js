// Primitives vs objects

// Example one (PRIMITIVES)
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);


// Example two (OBJECTS)
var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;
obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);


// Example three (Function)
