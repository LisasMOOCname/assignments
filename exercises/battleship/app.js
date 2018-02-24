const rs = require("readline-sync");

// Three components: the grid, a location object with info re a coordinate, and the game loop.

function whetherShip() {
    let randomNumber = Math.floor(Math.random() * 10);
    return randomNumber === 0;  // returns Boolean value
}

function Location() {
    this.isShip = whetherShip();
    this.isHit = false;
    this.display = "~"; // when ship presence/hit status is unknown
}

// Can only do an 8 x 8 grid, as that's the most that Node will keep on one line per Jacob.

function Grid() {
    this.grid = [];
    this.totalShips = 0;
}

Grid.prototype.genGrid = function() {
    for(let i = 0; i < 8; i++) {
        this.grid.push([]);
        for(let j = 0; j < 8; j++) {
            let location = new Location();
            if(location.isShip) {
                this.totalShips++;
            }
            this.grid[i].push(location);
        }
    }
}

Grid.prototype.displayGrid = function() {
    // Prints grid to the screen
    for(let i = 0; i < this.grid.length; i++) {
        let row = [];
        for(let j = 0; j < this.grid[i].length; j++) {
            row.push(this.grid[i][j].display);
        }
        console.log(row.join(" "));
    }
}

    Grid.prototype.attack = function(x, y) {
        let coord = this.grid[y][x];
        coord.isHit = true;
        if(coord.isShip) {
            coord.display = "x";
            this.totalShips--;
        }
        else {
            coord.display = "o";
        }
    }

    let game = new Grid;
    game.genGrid();

    // Game loop helper functions.
    function validateCoord(x, y) {
        x = Number(x);
        y = Number(y);
        if(x >= 0 && x < game.grid.length && y >= 0 && y < game.grid.length) {
            return true;
        }
    }

    function validateAttack(x, y) {
        x = Number(x);
        y = Number(y);
        return !game.grid[y][x].isHit; // why the not (!)?
    }

    let turnCounter = 20;
    console.log("Welcome to Battleship!\n");
    game.displayGrid();


    while(true) {
        let x = rs.keyIn("Choose an X coordinate between 0 and " + (game.grid.length - 1) + "\n", {limit: "$<0-" + (game.grid.length - 1) + ">"});
        let y = rs.keyIn("Choose a Y coordinate between 0 and " + (game.grid[0].length - 1) + "\n", {limit: "$<0-" + (game.grid[0].length - 1) + ">"});
        if (!validateCoord(x, y)) {
            console.log ("Invalid coordinates.");
            continue;
        }
        if (validateAttack (x, y)) {
            console.log("You already attacked that location.");
            continue;
        }
        game.attack(x, y);
        turnCounter--;
        if(game.totalShips === 0) {
            break;
        }
        if(turnCounter === 0) {
            break;
        }
        game.displayGrid();
    }

   // game.displayGrid();
    if(turnCounter > 0) {
        console.log("Victory!!");
        }
    else {
        console.log("Your chances are up. You lose!");
    }
    
