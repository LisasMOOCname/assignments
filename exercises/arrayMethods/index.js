var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// 1. Remove the last item from the vegetable array.
vegetables.pop();
console.log("vegetables: ", vegetables);

// 2. Remove the first item from the fruit array.
fruit.shift();
console.log("fruit: ", fruit);

// 3. Find the index of "orange."
console.log(fruit.indexOf("orange"));

// 4. Add that number to the end of the fruit array.
fruit.push(fruit.indexOf("orange"));
console.log("fruit: ", fruit);

// 5. Use the length property to find the length of the vegetable array. Log that to the console.
console.log("vegetables.length: ", vegetables.length);

// 6. Add that number to the end of the vegetable array.
vegetables.push(vegetables.length);
console.log("vegetables: ", vegetables);

// 7. Put the two arrays together into one array, fruit first. Call the new array "Food."
var food = fruit.concat(vegetables);
console.log("food: " + food);

// 8. Remove two elements from your array starting at index 4 with one method.
food.splice(4, 2);
console.log("food: " + food);

// 9. Reverse your array.
food.reverse();
console.log("food: " + food);

// 10. Log your array as a string to the console.
console.log(food.join(", "));



