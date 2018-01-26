function Location() {
    this.IsShip = whetherShip();  // 1 out of 5 times should be true
    this.isHit = false;
    this.display = "~"; // when ship presence/hit status is unknown
}

function whetherShip() {
    let randomNumber = Math.floor(Math.random() * 10);
    return randomNumber === 0;  // returns Boolean value
}

// Can only do an 8 x 8 grid, as that's the most that Node will keep on one line per Jacob

function Grid() {
    this.grid = [];
    this.shipsSunk = 0;
    this.totalShips = 0;
}

Grid.prototype.genGrid = function() {
    for(let i = 0; i < 8; i++) {
        this.grid.push([]);
        for(let j = 0; j < 8; j++) {
            let location = new Location;
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
            this.totalShips();
            coord.display = "x";
        }
        else {
            coord.display = "o";
        }
    }

    let game = new Grid;
    game.genGrid();
    game.grid[3][2].display = "x";
    game.displayGrid();

    let turnCounter = 20;
    console.log("Welcome to Battleship!");
    game.displayGrid();
    while(true) {
        let x = rs.keyIn("Choose an X coordinate between 0 and " + game.grid.length - 1);
        let y = rs.keyIn("Choose a Y coordinate between 0 and " + game.grid.length - 1);
        if (!validateCoord) {
            console.log ("Invalid coordinate.");
            continue;
        }
        if (validateAttack (x, y)) {
            console.log("You already attacked that location.");
        }
    }

    function validateCoord(x, y) {
        x = Number(x);
        y = Number(y);
        if(x >= 0 && x < game.grid.length - 1 && y >= 0 && y < game.grid.length -1){
            return true;
        }
    }

    function validateAttack(x, y) {
        x = Number(x);
        y = Number(y);
        return game.grid[y][x].isHit;
    }