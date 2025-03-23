// The rest parameter syntax allows a function to accept an indefinite number of arguments
// as an array, providing a way to represent variadic functions in JavaScript.
function user(...userData) {
    console.log(userData);
  }
  
  user("Jhon", 32, "Male", "fighter");
  
  // ---------------------------
  double = (...numbers) => numbers.map((num) => num * 2);
  console.log(double(1, 2, 3, 4, 5));
  // ---------------------------
  
  function person(firstName, lastName, ...hobbies) {
    console.log("First Name: ", firstName);
    console.log("Last Name: ", lastName);
    console.log("Hobbies: ", hobbies);
  }
  
  person("Jhon", "Wick", "Fighter", "Legend");