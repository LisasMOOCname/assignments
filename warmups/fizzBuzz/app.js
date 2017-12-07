function fizzBuzz(n) {
    var str;
    var output = [];
    for(var i = 1; i <= n; i++) {
        str = i.toString();
        if(i % 3 === 0 && i % 5 === 0) { // cd do i % 15 === 0 instead
            str = "FizzBuzz"; // cd do output.push("Fizzbuzz"); and save a step
        }
        else if(i % 3 === 0) {
            str = "Fizz";
        }
        else if (i % 5 === 0) {
            str = "Buzz";
        }
        output.push(str);
    }
    return output;
}

console.log(fizzBuzz(16));