// Template strings, also known as template literals, are a feature in JavaScript that allows you to create strings with embedded expressions. They are denoted by backticks `` instead of single or double quotes. Template strings provide a more flexible and concise way to construct strings, especially when they involve variables or expressions.

let firstName = "Jhon";
let lastName = "Wick";

function intro() {
  return "Hello my name is Jhon Wick & i'm 28 years old";
}

console.log(
  `Hello my name is ${firstName} ${lastName} & i'm ${28 + 1000} years old.`
);