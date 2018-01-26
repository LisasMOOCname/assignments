function disemvowel(originalString) {
    let str = "";
    let vowels = "";
    let output = { str: str, vowels: vowels};
    let origString = originalString.toLowerCase();
    for (let i = 0; i < origString.length; i++) {
       if(origString[i] != "a" && origString[i] != "e" && origString[i] != "i" && origString[i] != "o" && origString[i] != "u" && origString[i] != " ") {
            str = str.concat(origString[i]);
        }
        else if (origString[i] == " ") {
            continue;
        }
        else {
            vowels = vowels.concat(origString[i]);
        }
    }
    output.str = str;
    output.vowels = vowels;
    return output;
}


console.log(disemvowel("Pickle Rick"));