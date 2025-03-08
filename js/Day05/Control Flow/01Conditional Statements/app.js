// if (condition) {...}
// else if (condition_2) {...}
// else {...}
// ------------------------

let a = 10,
  b = 20;
if (a > b) {
  console.log("a is greater than b");
} else if (a < b) {
  console.log("a is less than b");
} else {
  console.log("a is equal to b");
}

// ------------------------
let time = 8;
if (time < 10) {
  greeting = "Good morning";
  console.log(greeting)
  
} else if (time < 20) {
  greeting = "Good day";
  console.log(greeting)

} else {
  greeting = "Good evening";
  console.log(greeting)

}
// ------------------------

// ------------------------
let password;

if (password === 8) {
  console.log("Welcome");
} else if (password <= 8) {
  console.log("Password is too short");
} else if (password >= 8) {
  console.log("Too long password");
  console.log("Password should be 8 characters");
} else {
  console.log("Please provide a password");
}