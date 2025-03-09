// In JavaScript, a method is basically a function that belongs to an object. When we put a function inside an object, it becomes a method.

// ------------------------------------
// Defining a method outside the object
// function greet() {
//   return `Hello, my name is ${person.name} and I am ${person.age} years old.`;
// }

// const person = {
//   name: "John",
//   age: 30,
//   greet,
// };

// console.log(person.greet());

// ------------------------------------

const person = {
    name: "Jhon Wick",
    age: 29,
    greet: function greet() {
      return `Hello, my name is ${person.name} and I am ${person.age} years old.`;
    },
  };
  
  console.log(person.greet());
  // ------------------------------------