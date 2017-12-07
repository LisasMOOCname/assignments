// Preliminaries 1
for(var i = 0; i < 10; i++) {
    console.log(i);
}

// Preliminaries 2
for(var i = 9; i >= 0; i--) {
    console.log(i);
}

// Preliminaries 3
var fruit = ["banana", "orange", "apple", "kiwi"];
for(var i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}

// Bronze medal 1
var myArray = [];
for(var i = 0; i < 10; i++) {
    myArray.push(i);
}
console.log(myArray);

// Bronze medal 2
for(var i = 0; i <= 100; i++) {
    if(i % 2 === 0) {
        console.log(i);
    }
}

// Bronze medal 3
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
var newArray = [];
for(var i = 0; i < fruit.length; i += 2) {
    newArray.push(fruit[i]);
}
console.log(newArray);

// Silver medal 1
var peopleArray = [
    {
        name: "Harrison Ford",
        occupation: "Actor"
    },
    {
        name: "Justin Bieber",
        occupation: "Singer"
    },
    {
        name: "Vladimir Putin",
        occupation: "Politician"
    },
    {
        name: "Oprah",
        occupation: "Entertainer"
    
    }
]

for(var i = 0; i < peopleArray.length; i++) {
    console.log(peopleArray[i].name);
}

// Silver medal 2
var names = [];
var occupations = [];
for(var i = 0; i < peopleArray.length; i++) {
    names.push(peopleArray[i].name);
    occupations.push(peopleArray[i].occupation);
}
console.log(names);
console.log(occupations);

// Silver medal 3
// Per Marcus, it's all going into ONE array.
// Rewriting, as per Ben, it's two separate arrays.
/* Coded Marcus's way:
var newPeople = [];
for(var i = 0; i < peopleArray.length; i++) {
    if(i % 2 === 0) {
    newPeople.push(peopleArray[i].name);
    }
    else {
        newPeople.push(peopleArray[i].occupation);
    }
}

console.log(newPeople); */

var evenNames = [];
var oddOccupations = [];
for(var i = 0; i < peopleArray.length; i++) {
    if(i % 2 === 0) {
        evenNames.push(peopleArray[i].name);
    }
    else {
        oddOccupations.push(peopleArray[i].occupation);
    }
}

console.log(evenNames);
console.log(oddOccupations);



// Gold medal 1
var grid = [];
for(var i = 0; i < 3; i++) {
    grid.push([]);
    for(var j = 0; j < 3; j++) {
        grid[i].push(0);
    }
}
console.log(grid);

// Gold medal 2
var grid2 = [];
for(var i = 0; i < 3; i++) {
    grid2.push([]);
    for(var j = 0; j < 3; j++) {
        grid2[i].push(i);
    }
}
console.log(grid2);

// Gold medal 3
var grid3 = [];
for(var i = 0; i < 3; i++) {
    grid3.push([]);
    for(var j = 0; j < 3; j++) {
        grid3[i].push(j);
    }
}
console.log(grid3);

// Gold medal 4
var grid4 = [];
for(var i = 0; i < 3; i++) {
    grid4.push([]);
    for(var j = 0; j < 3; j++) {
        grid4[i].splice(j, 1, "x");
    }
}
console.log(grid4);