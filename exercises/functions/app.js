// Function 1
function sum(a, b) {
    return a + b;
}

console.log(sum(2, 3));

// Function 2
var largestNumber = function(a, b, c) {
    let largest;
    if(a > b) {
        largest = a;
    }
    else {
        largest = b;
    }
    if(c > largest) {
        return c;
    }
    else {
        return largest;
    }
}

console.log(largestNumber(12, 17, 14));


// Function 3
function oddOrEven(num) {
    if(num % 2 === 0) {
        return "even";
    }
    else {
        return "odd";
    }
}

console.log(oddOrEven(3));


// Function 4
var stringFun = function(str) {
    if (str.length <= 20) {
        return str + str;
    }
    else {
        return str.slice(0, str.length/2);
    }
}

console.log(stringFun("anything you might ever want"));


// Optional challenge 1
function fibonacci(n) {
    var sum = 0;
    for(var i = n; i > 0; i--) {
        sum += i;
    }
    return sum;
}

console.log(fibonacci(5));

// Optional challenge 2
function quadratic(a, b, c) {
    var x1 = -b + Math.sqrt((b ** 2) - (4 * a * c) / (2 * a));
    var x2 = -b - Math.sqrt((b**2) - (4 * a *c)/ (2 * a));
    var x = [];
    x.push(x1, x2);
    return x;
}

console.log(quadratic(3, 4, 5));


// Optional challenge 3
function mostFrequentLetter(str) {
    var count = 0;
    for(var i = 0; i < str.length; i++) {
        str[i] 
    }
}