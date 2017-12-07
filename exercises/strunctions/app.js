/* Implement the following string methods using
at least three unique functions:
concat(), indexOf(), lastIndexOf(), match(),
replace(), split(), toLowerCase(), toUpperCase(),
substr()*/

function makeOneString(str1, str2) {
    return str1.concat(str2);
}

console.log(makeOneString("That's what I'm ", "talkin' 'bout!"));


var str = "Check out this string!";

function getIndices(input) {
    var result = {
        firstIndex: "",
        lastIndex: ""
    }
    result.firstIndex = str.indexOf(input);
    result.lastIndex = str.lastIndexOf(input);
    return result;
}

console.log(getIndices("t"));


function matchRegExpr(input, pattern) {
    return input.match(pattern);
}

console.log(matchRegExpr("To be or not to be", /be/g));


var str3  = "V School is great!";

function replaceMyStr(inputA, inputB) {
    return str3.replace(inputA, inputB);
}

console.log(replaceMyStr("V School", "Lesa"));

function changeString(str4) {
    var lowerCaseStr = str4.toLowerCase();
    var upperCaseStr = str4.toUpperCase();
    return lowerCaseStr.substr(0, 3) + upperCaseStr.substr(3);
}

console.log(changeString("Oh Yeah"));