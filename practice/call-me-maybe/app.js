let names = ["Alexander", "Brianne", "Chris", "Danielle", "Evan", "Fiona", "Gary", "Hayley", "Ian", "Jesse"];

//callbacks
let dontCall = name => {
    console.log("You did not call " + name + "!"); // or ` You did not call ${name} !` backticks let you use the ${}
}

let call = name => {
    console.log("You called " + name + "!"); // or ` You did not call ${name} !` backticks let you use the ${}
}

let sendText = name => {
    console.log("You sent " + name + " a text.");
}

//helper function
let checkForAs = str => {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i].toLowerCase() === "a") {
            count++;
            if (count ===2) {
                return true;
            }
        }
    }
    return false;
}


let attemptCall = (name, dontCall, call, sendText) => {
    if(checkForAs(name)) {
        sendText(name);
    }
    
    else if (name.length % 2 !== 0) {
        dontCall(name);
    }
    else {
        call(name);
    }
}

for(let i = 0; i < names.length; i++) {
    attemptCall(names[i], call, dontCall, sendText);
}