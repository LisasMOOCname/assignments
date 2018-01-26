function antiCaps(str) {
    var newStr = "";
    for(let i = 0; i < str.length; i++) {
        if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
            newStr += str[i].toLowerCase();
        }
        else {
            newStr += str[i].toUpperCase();
        }
    }
    console.log(newStr);
}

antiCaps("AliceInWonderland");

// Can instead tell whether a character is upper or lower case
// using this function:
// function isCaps(letter) {
// return letter === letter.toUpperCase();
// }