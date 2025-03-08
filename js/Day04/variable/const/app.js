/* <--------------------------Const--------------------->
    
    What it does: const is used when you never want to change the value of the variable after setting it.
    Where it's used: Like let, it’s also used inside a block of code.
    Can you change it? No! You cannot change its value after it’s been set.
    What if it's an object or array? You can still change the content inside objects or arrays, but you can’t change the object or array itself.
*/

const country = "USA";
// country = "Canada";  // This will give an error because you can't change a const
console.log(country);  // Output: USA

// But if you have an array or object:

const person = { name: "Alice" };
person.name = "Bob";         // You can change the content inside the object
console.log(person.name);    // Output: Bob
