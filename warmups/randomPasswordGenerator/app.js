// Write a random password generator that 
// takes an argument giving the number of characters
// the password should be. The password can include
// uppercase, lowercase, numeric and symbol characters.

// Using ASCII character codes to get range from which to randomly pull.

var passwordGenerator = function(num) {
    var password = "";
    for(let i = 0; i < num; i++) {
        password += String.fromCharCode(Math.floor((Math.random() * 93) + 33));
    }
    return password;
}

console.log(passwordGenerator(7));