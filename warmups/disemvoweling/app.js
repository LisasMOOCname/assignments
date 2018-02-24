function disemvowel(originalString) {
    // let str = "";
    // let vowels = "";
    let output = { str: "", vowels: "" };
    let origString = originalString.toLowerCase();
    for (let i = 0; i < origString.length; i++) {

        // if(!"aeiou".includes(origString[i])){

        // }
        if (origString[i] != "a" && origString[i] != "e" && origString[i] != "i" && origString[i] != "o" && origString[i] != "u" && origString[i] != " ") {
            output.str = str.concat(origString[i]);
            // output.str += origString[i];
        }
        else if (origString[i] == " ") {
            continue;
        }
        else {
            vowels = vowels.concat(origString[i]);
            // output.vowels += origString[i];
        }
    }
    output.str = str;
    output.vowels = vowels;
    return output;
}


console.log(disemvowel("Pickle Rick"));