var rs = require("readline-sync");

// 1
var output = rs.question("hello".toUpperCase());

// 2
var result = rs.question("What is your name?");
console.log(result.length);

// 3
var firstName = rs.question("What is your first name?");
var lastName = rs.question("What is your last name?");
console.log("Your full name is " + firstName + " " + lastName);

// 4
var longMessage = rs.question("Say something with more than 20 characters.");
var sliceStart = longMessage.length / 2;
console.log(longMessage.slice(sliceStart));

// 5
console.log(longMessage);
var userChoice = rs.question("Where should I start this message from? Give the index.");
console.log(longMessage.slice(Number(userChoice)));



