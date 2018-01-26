class Player {
    constructor(name) {
        this.name = name;
        this.totalCoins = 0;
        this.status = "Small";
        this.star = false;
        setName = function(namePicked) { // this. may not be needed?
            this.namePicked = name.Picked;
        }

        gotHit = function() {
            switch(this.status) {
                case "Powered Up":
                    this.status = "Big";
                    break;
                case "Big":
                    this.status = "Small";
                    break;
                case "Small":
                    this.status = "Dead";
                    this.gameActive = false;
            }
        }

        gotPowerup = function() {
            switch(this.status) {
                case "Small":
                    this.status = "Big";
                    break;
                case "Big":
                    this.status = "Powered Up";
            }
        }

addCoin = function() {
    this.totalCoins++;
}

function print() {
    for(let key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}

let michelle = new Player("Michelle");
michelle.setName("Luigi");

function randomRange() {
    return Math.floor((Math.random() * 3));
}

/* function playGame() {
    randomRange();
    if(randomRange === 2) {
        player.gotHit();
    }
    else if(randomRange === 1) {
        player.gotPowerup(0);
    }
    else {
        player.addCoin();
    }
} */

playGame();
print();

playGame();
print();

playGame();
print();