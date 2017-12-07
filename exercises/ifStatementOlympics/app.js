// Preliminaries 1
if(5 > 3) {
    console.log("is greater than");
}

// Preliminaries 2
if("cat".length === 3) {
    console.log("is the length");
}

// Preliminaries 3
if("cat" === "dog") {
    console.log("the same");
}
else {
    console.log("not the same");
}

// Bronze medal 1
var person = {
    name: "Bobby",
    age: 12
}

if(person.age > 18) {
    console.log(person.name + " is allowed to go to the movie");
}
else {
    console.log(person.name + " is not allowed to go to the movie");
}

// Bronze medal 2
if(person.name[0] === "B") {
    console.log(person.name + " is allowed to go to the movie");
}

// Bronze medal 3
if(person.name[0] === "B" && person.age > 18) {
    console.log(person.name + " is allowed to go to the movie");
}

// Silver medal 1
if(1 === "1") {
    console.log("strict");
}
else if(1 == "1") {
    console.log("loose")
}
else {
    console.log("not equal at all");
}

// Silver medal 2
if((1 <= 2 && 2 === 4) || ((3 * 4 > 10) && (5 + 10 > 10))) {
    console.log("yes");
}

// Gold medal 1
if(typeof "dog" === "string") {
    console.log("It's a string.");
}

// Gold medal 2
if(typeof "true" === Boolean) {
    console.log("It's a Boolean.");
}
else {
    console.log("not Boolean");
}

// Gold medal 3
var newVariable;
if (newVariable !== undefined) {
    console.log("The variable is defined.");
}
else {
    console.log("It's undefined.");
}

// Gold medal 4
if("m" > 3) {
    console.log("m > 3");
}
else {
    console.log("m < 3");
}

// Gold medal 5
switch(4) {
    case 1:
        console.log("one");
        break;
    case 2:
        console.log("two");
        break;
    case 3:
        console.log("three");
        break;
    case 4:
        console.log("four");
        break;
    case 5:
        console.log("five");
        break;
    case 6:
        console.log("six");
        break;
    case 7:
        console.log("seven");
        break;
    case 8:
        console.log("eight");
        break;
    case 9:
        console.log("nine");
        break;
    case 10:
        console.log("ten");
}

