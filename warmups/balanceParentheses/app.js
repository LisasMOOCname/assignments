// Assignment: Given a string that includes parentheses, write a function
// that returns true if every opening parenthesis has a closing parenthesis.
// Every closing parenthesis must have an opening partner before it.

function checkParentheses(str) {
    let balancedStr = "";
    for (let i=0; i < str.length -1; i++) {
        if (str[i] === "(") {
            for (let j=1; j < str.length; j++) {
                if (str[j] === ")") {
                    balancedStr = str.slice(str[i], str[i]);
                    console.log(str);
                    console.log(balancedStr);
                    balancedStr = str.slice(str[j], str[j] + 1);
                }
            }
        }
    }
    if (str === "") {
        return true;
    }
    return false;
}

console.log(checkParentheses("(())"));