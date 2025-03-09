// Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript. 
// There are two types of scopes in JavaScript. 
// Global Scope variables are those declared outside of a block. 
// Local Scope variables are those declared inside of a block.


//<-----------------------Global Scope------------------->

let globalVar = "I am a global variable"; // This is in the global scope

function displayGlobalVar() {
  console.log(globalVar);  // It can be accessed inside the function as well
}

displayGlobalVar();  // Output: "I am a global variable"
console.log(globalVar); // Output: "I am a global variable"

//<------------------------Local Scope--------------------->

function myFunction() {
    let localVar = "I am a local variable"; // localVar is local to myFunction
    console.log(localVar);  // Output: "I am a local variable"
  }
  
  myFunction();  // This works because localVar is inside the function
  
  console.log(localVar);  // Error! localVar is not accessible here because it's local to the function
  