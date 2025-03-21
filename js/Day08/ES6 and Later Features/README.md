# ES6 let and const Explanation

## Introduction
ES6 introduced two important keywords for variable declaration: `let` and `const`. Both of these provide more control and clarity in variable declaration, compared to the older `var`.

## Key Differences

### let:
- **Scope**: `let` has block-level scope, meaning it is confined to the block in which it is defined.
- **Reassignment**: The value of a `let` variable can be reassigned.

### const:
- **Scope**: `const` also has block-level scope.
- **Immutability**: The value of a `const` variable cannot be reassigned once it is initialized.

## Example:
```js
// Example using 'let' for variable declaration
let message = "Hello, World!";


// 'let' allows reassignment

message = "Hello, ES6!";
console.log(message);    // Output: Hello, ES6!

// Example using 'const' for variable declaration
const greeting = "Good Morning!";


// 'const' does not allow reassignment
// greeting = "Good Night!";  // Uncommenting this line will cause an error

console.log(greeting);  // Output: Good Morning!

// let allows variables to be updated, whereas const doesn't.
```