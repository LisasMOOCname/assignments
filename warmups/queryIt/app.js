// Assignment: Write a function that returns an array of items that 
// match the query to a query object.
// If the query object is empty, return the entire array.
// If the array contains no matches, return an empty array.

let data = [
    {a: 1, b: 1, c: 2},
    {a: 0, b: 0, c: 2},
    {a: 0, b: 1, c: 0},
    {a: 1, b: 2, c: 2}
];

let queryObj = {
    a: 3,
    b: 1
};

function queryIt(query, arr) {
    return data.filter(resource => {
        for(let key in query) {
            if(query[key] !== resource[key]) {
                return false;
            }
        }
        return true;
    }
}

console.log(queryIt(queryObj, data));