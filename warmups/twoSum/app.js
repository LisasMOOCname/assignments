// Assignment: Given an array of integers and a target integer,
// return the indices of the two numbers which add up to the target.
// Assume there is exactly one solution, and that the same element
// may not be used twice.

//My unsuccessful attempt.
function twoSum(arr, int) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === int) {
                return [i, j];
            }
        }
    }
}

//Ben's code:
module.exports = (arr, target) => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
}

console.log(twoSum([1, 2, 3], 4));