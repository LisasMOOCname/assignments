// My inefficient way. Could use modulo.
function lastDigit(n1, n2) {
    if(n1 < 0 || n2 < 0) {
        return "Invalid input. Numbers must be non-negative.";
        // Instead could do: throw "Inputs cannot be less than zero.";
    }
    let num1 = n1.toString();
    let num2 = n2.toString();
   if(num1[num1.length - 1] === num2[num2.length - 1]) {
        return true;
    }
    else {
        return false;
    }

}

console.log(lastDigit(313, 41));

//best answer:
/* function shareDigits(int1, in2) {
    return int1 % 10 === int2 % 10; // dividing by 10 always gives the last digit
} */