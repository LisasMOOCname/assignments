// Player is in a locked room. To escape the room and win the game, player must find the key
// and unlock the door.
// Player loses and game ends if player puts hand in the hole or causes the lamp to fall over.

const rs = require("readline-sync");

// Initial game blurb.
console.log("You are trapped in a room. \nThe only way out is through a door, but it is locked. A key that will unlock the door is hidden somewhere in the room. \nLooking around the room, you can see:");
console.log(" -- the door");
console.log(" -- a green velour armchair");
console.log(" -- a side table next to the armchair");
console.log(" -- a small bookcase");
console.log(" -- a hole in one wall with a sign under it.");
console.log(" \n");
console.log("What do you want to do? \nYou can check inventory, check menu, inspect, move, open, put, quit, read, scream, sit, take, or use things.");

let inventory = [];
let isAlive = true;
let gumCount = 0;

// Once an item is in inventory, it remains in inventory.
function showInventory(){
    for(let i = 0; i < inventory.length; i++) {
        console.log("\n" + inventory[i]);
    }
}

while(isAlive) {
    let userInput = rs.question("What do you want to do?");
    userInput.toLowerCase();
    // gameTurn();
    
/*function gameTurn() {

}*/

if(userInput.includes("menu")) {
    console.log("You can check menu, inspect, move, open, put, quit, read, scream, sit, take, or use things.");
}
else if(userInput.includes("quit")) {
    let response = rs.question("Are you sure you want to quit? (Answer yes or no.)");
    response.toLowerCase();
        if(response === "yes") {
            console.log("You are a quitter AND you're still stuck in that room. Good thing you have books to read.");
            break;
        else if(response === "no") {
            console.log("That's right, YOU'RE no quitter! What do you want to do?");
        else {
            console.log("Do you want to quit or not???? Answer yes or no.");
        }
}
else if(userInput.includes("inventory")) {
    console.log("You have the following in your inventory:" + showInventory());
}
else if(userInput.includes("inspect")) {
    if(userInput.includes("armchair") || userInput.includes("chair")) {
        console.log("You see a green velour armchair.");
    }
    else if(userInput.includes("bookcase")) {
        console.log("The bookcase holds several hardcover books from the mid-twentieth century. On the top is a framed photograph, a wire coat hanger, and a snow globe.");
    }
    else if(userInput.includes("books")) {
        console.log("The book titles include The Seekers, Exodus, and Escape from Alcatraz.");
    }
    else if(userInput.includes("door")) {
        console.log("The door is closed and locked. It has a keyhole below the doorknob.");
    }
    else if(userInput.includes("drawer")) {
        console.log("The drawer is closed. It has a small handle on it.");
    }
    else if(userInput.includes("gum")) {
        console.log("There are three sticks of chewing gum and two empty wrappers in the package.");
    }
    else if(userInput.includes("hanger")) {
        console.log("The hanger is made of thin, easily bendable wire.");
    }
    else if(userInput.includes("hole")) {
        console.log("The hole in the wall is large enough to fit your hand in. There is a sign underneath it, but the print is too small to read. You think you see something golden glinting at the back of the hole.");
    }
    else if(userInput.includes("lamp")) {
        console.log("The lamp is turned on. It provides the only light in the room.");
    }
    else if((userInput.includes("photo")) || (userInput.includes("photograph")) || 
    (userInput.includes("picture"))) {
        console.log("The photograph shows a rather silly-looking brown-and-white dog.");
    }
    else if(userInput.includes("snow globe")) {
        console.log("Inside the snow globe is an island with a palm tree and hula dancers. Small colored beads in the sand spell out "Hawaii." The snowflakes are blue to match the water around the island.");
    }
    else if(userInput.includes("table")) {
        console.log("The table has a small drawer in it and a lamp on it.");
    }
}
else if(userInput.includes("move")) {
    if(userInput.includes("chair") || userInput.includes("armchair")) {
        console.log("You find a package of chewing gum with most of the gum still in it.");
    }
    else if(userInput.includes("door")) {
        console.log("You can't move the door until you unlock it.");
    }
    else if(userInput.includes("table")) {
        console.log("Moving the table causes the lamp to fall and the light bulb to break. You are now stuck in the dark. \nYou have five seconds to say your prayers before you are eaten by a Zorkian grue. Game over.");
    }
    else if(userInput.includes("lamp")) {
        console.log("Moving the lamp reveals nothing.");
    }
    else if(userInput.includes("drawer")) {
        console.log("You cannot move the drawer; you must open it.");
    }
    else if(userInput.includes("Moving the bookcase results in several books falling out. The framed picture falls to the floor \nand the glass shatters, dooming you to seven years of bad luck. The hanger also falls. The snow globe falls, too, but miraculously does not break.");
    }
    else if(userInput.includes("hole")) {
        console.log("You cannot move the hole.");
    }
    else if(userInput.includes("books")) {
        console.log("Moving the books reveals nothing.");
    }
    else if(userInput.includes("photo")) {
        console.log("Turning the photo over, you see black felt backing and the frame stand.");
    }
    else if(userInput.includes("snow globe")) {
        console.log("Shaking the snow globe makes the blue \"snowflakes\" swirl around inside.");
    }
    else {
         console.log("What do you want to move?");
    }
} // end of "move" section
    
if(userInput.includes("open")) {
    if(userInput.includes("armchair") || userInput.includes("chair")) {
        console.log("There is nothing to open on the armchair.");
    }
    else if(userInput.includes("door")) {
        if(inventory.includes("key") === false) {
        console.log("You cannot open the door without the key.");
        }
        else {
            console.log("You did it! You escaped the room! A songbird chirps with delight, and your guardian angels are high-fiving one another. You may continue on your way. Have a nice day.");
            break;
        }
    }
    else if(userInput.includes("drawer")) {
        console.log("Opening the drawer reveals a magnifying glass and a bottle of aspirin.");
    }
    else if(userInput.includes("table")) {
        console.log("You cannot open the table, except for the drawer.");
    }
    else if(userInput.includes("lamp")) {
        console.log("There is nothing to open on the lamp.");
    }
    else if(userInput.includes("bookcase")) {
        console.log("There is nothing to open on the bookcase.");
    }
    else if(userInput.includes("hole")) {
        console.log("The hole is already an open hole.");
    }
    else if(userInput.includes("books")) {
        console.log("You begin to read...");
    }
    else if((userInput.includes("photo")) || (userInput.includes("photograph"))) {
        console.log("Removing the dog's photo from its frame, you see the name \"Rover\" lovingly written on the back.");
    }
    else if(userInput.includes("snow globe")) {
        console.log("The snow globe remains impervious to your efforts to pull it apart.");
    }
    else if(userInput.includes("gum")) {
        console.log("You remove a piece of gum from its wrapper.");
    }
    else {
        console.log("What do you want to open?");
    }
} // end of "open" section

else if(userInput.includes("put")) {
    if(userInput.includes("hand in hole")) {
        console.log("You feel a shock and hear a sizzling sound. Pain travels up your arm, and your entire body is throttled by an electrical force. Oh, woe is you! Didn't you read the sign? Well, no matter now. You are no more. Game over.");
        break;
    }
    else if(userInput.includes("hanger in hole")) {
        console.log("The narrow end of the hanger fits into the hole, but you can't hook the glinting metal thing with it.");
    }
    else if(userInput.includes("hanger with gum in hole")) {        
        console.log("The narrow end of the hanger fits into the hole, and the golden glinting thing sticks to it. When you pull it out, you see that it is... a key!!!!");
    }
    else if(userInput.includes("key in door")) || (userInput.includes("key in lock")) {
        console.log("You did it! You escaped the room! A songbird chirps with delight, and your guardian angels are high-fiving one another. You may continue on your way. Have a nice day.");
    }
    else if(userInput.includes("on")) {
        console.log("Okay, it's on there.");
    } 
    else if(userInput.includes("hanger with gum in hole")) {
        console.log("The hanger now has a blob of gum on it.");
    }
} // end of "put" section
            
if(userInput.includes("read")) {
    if(userInput.includes("book")) {
        console.log("You read, \"About four o\' clock Abraham Kent woke from a fitful sleep and realized he couldn\'t rest again until the day\'s action was concluded...\"");
    }
}
    else if(userInput.includes("sign") && !inventory.includes("magnifying glass")) {
    console.log("The print is too small for you to make out.");
    }
    else if(userInput.includes("sign") && inventory.includes("magnifying glass")) {
        console.log("With the magnifying glass you see the message, \"Under pain of death, DO NOT put your hand in this hole!\" ");
    }
    else {
        console.log("What do you want to read? There is nothing to read here.");
    }
} // end of "read" section
        
if(userInput.includes("scream")) {
    console.log("No one hears you scream.");
} // end of "scream" section

if(userInput.includes("sit")) {
    if(userInput.includes("chair") || userInput.includes("armchair")) {
        console.log("The armchair, though slightly tacky-looking, is quite comfortable.");
    }
    else {
        console.log("Why would you do that?");
    }
} // end of "sit" section

if(userInput.includes("take")) {
    if(userInput.includes("book")) {
        console.log("You begin to read...");
        inventory.push("book");
    }
    else if((userInput.includes("photo")) || (userInput.includes("picture"))) {
        console.log("The dog in the photo seems to look at you soulfully.");
        inventory.push("dog photo");
    }
    else if(userInput.includes("snow globe")) {
        console.log("Sure, yeah, take somebody's Hawaiian souvenir.");
        inventory.push("snow globe");
    }
    else if(userInput.includes("magnifying glass")) {
        console.log("You take the magnifying glass.");
        inventory.push("magnifying glass");
    }
    else if(userInput.includes("gum")) {
        if(!inventory.includes("gum")) {
            console.log("You pick up the packet of chewing gum.");
        }
        else {
            if(gumCount <= 3) {
                console.log("You pop a piece of gum into your mouth. It has a clean, minty flavor."); // Player can reuse gum on hanger.
                gumCount++; //counting gum used/taken, not gum left in pack
            }
            else {
                console.log("There is no gum left in the pack. What did you do with the gum you already chewed?");
        }
    else if(userInput.includes("
    everything else - You cannot take that.
    else if(userInput.includes("
    aspirin - You take two aspirin and soon you feel better. (Can take up to four. The second time: You take the last two aspirin. The bottle is now empty. Further attempts: You're out of aspirin.) 
    else if(userInput.includes("
    hanger - You take the hanger.
    key - How are you going to take the key?
    else if(userInput.includes("
    key with hanger - The narrow end of the hanger fits into the hole, and the golden glinting thing sticks to it. When you pull it out, you see that it is... a key!!!!
} // end of "take" section

if(userInput.includes("use")) {


} // end of "use" section

else {
     // verb (or not) with no action object
     console.log("What do you do that with?");
    }
 }

 else {
    console.log("I don't understand. Please try again.");
} 
} // end of while loop
