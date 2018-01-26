// Function 1 accepts two numbers and returns the sum.
function sum(a, b) {
    return a + b;
}

console.log(sum(17, 3));

// Function 2 accepts three numbers and returns the largest one.
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

console.log(largestNumber(17, 12, 18));


// Function 3 tells whether a number is even or odd.
function oddOrEven(num) {
    if(num % 2 === 0) {
        return "even";
    }
    else {
        return "odd";
    }
}

console.log(oddOrEven(30));


// Function 4 concatenates a string with itself if the string is <= 20 characters; 
// otherwise, it returns the first half of the string.
var stringFun = function(str) {
    if (str.length <= 20) {
        return str + str;
    }
    else {
        return str.slice(0, str.length/2);
    }
}

console.log(stringFun("anything you might ever want"));


// Optional challenge 1 prints the first "n" numbers and their sum.
function fibonacci(n) {
    var sum = 0;
    for(var i = 0; i <= n; i++) {
		console.log(i);
        sum += i;
    }
    return sum;
}

console.log(fibonacci(5));

// Optional challenge 2 solves the quadratic equation and returns the x values in an array.
function quadratic(a, b, c) {
    var x1 = -b + Math.sqrt((b ** 2) - (4 * a * c) / (2 * a));
    var x2 = -b - Math.sqrt((b**2) - (4 * a *c)/ (2 * a));
    var x = [];
    x.push(x1, x2);
    return x;
}

console.log(quadratic(3, 4, 5));


// Optional challenge 3 returns the most frequently occurring letter in a string.
function mostFrequentLetter(str) {
	var count = 0;
	var frequency = 0;
	var mostFrequent = "";
	str = str.toLowerCase();
    for(var i = 0; i < str.length; i++) {
		count = 1;
        for(var j = 1; j < str.length;j++) {
			if (str[i] >= "a" && str[i] <= "z" && str[i] === str[j]) {
				count++;
			}
		    if (count > frequency) {
			    frequency = count;
			    mostFrequent = str[i];
		    }		
        }
	}
	console.log("Most frequently occurring letter: " + mostFrequent +" at " + frequency + " occurrences.");
	return mostFrequent;
}

mostFrequentLetter("I wonder which letter in this sentence occurs the most.");