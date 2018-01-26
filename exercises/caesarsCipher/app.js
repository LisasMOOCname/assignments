// Define the problem: Encode a text input by replacing each letter with the letter
// x places to the right of it in the alphabet.
// Make a plan: 
// 1. Get the text input.
// 2. Get the number of places to shift letters.
// 3. Read each letter, and change each letter into its code equivalent. Don't change
// non-alphabetic characters such as punctuation and spaces. Letters at the end of the
// alphabet change to letters at the start (alphabet restarts).
// 4. Start a new string, and save each coded letter into it.

var readline = require('readline-sync');  
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();  
var shift = parseInt(readline.question('How many letters would you like to shift? '));  

function caesarsCipher(input) {
    let inputCharacter;
    let codedCharacter;
    let newString = "";
    if (shift < 0 || shift > 26) {
        console.log("Please specify a shift amount of between 0 and 26.");
        return false;
    }
    for(let i = 0; i < input.length; i++) {
        inputCharacter = input[i].toLowerCase(); //charCodeAt doesn't iterate with input[i]
        if(inputCharacter >= "a" && inputCharacter <= "z") {
            codedCharacter = inputCharacter.charCodeAt(input[i]) + shift;
            if(codedCharacter > 122) {
                codedCharacter = codedCharacter - 26;
            }
            newString = newString.concat(String.fromCharCode(codedCharacter));
        }
        else {
            newString = newString.concat(input[i]);
        }
    }
    console.log(newString);
}

caesarsCipher(input);