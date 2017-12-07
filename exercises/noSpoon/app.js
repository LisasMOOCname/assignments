// Object 1
var satchel = {
    purpose: "container",
    color: "brown",
    material: "leather",
    buckles: 2,
    itemsInside: ["computer", "keys", "cord"],
    store: function (item) {
        this.itemsInside.push(item);
    }
}
satchel.store("charger");
console.log(satchel.itemsInside);


// Object 2
var cup = {
    color: "red",
    material: "plastic",
    amtOuncesFull: 4,
    isFull: false,
    fillCup: function () {
        for(var i = this.amtOuncesFull; i < 9; i++) {
            if(i < 8){
                this.amtOuncesFull++;
                this.isFull = false;
                console.log("Ounces full: " + this.amtOuncesFull);
            }
            this.isFull = true;
        }
    }
}

cup.fillCup();

// Object 3
var laptop = {
    brand: "MacBook Air",
    color: "silver",
    year: 2011,
    apps: ["Google Chrome", "Slack", "VS Code", "Trello"],
    calculate: function (a, b) {
        return a + b;
    }
}

console.log(laptop.calculate(8, 3));


// Object 4
var tissueBox = {
    tissueCount: 90,
    decoration: "geometric",
    shape: "cubical",
    location: "desk",
    dispenseTissue: function () {
        this.tissueCount--;
        return this.tissueCount;
    }
}

console.log(tissueBox.dispenseTissue());

// Object 5
var receipt = {
    source: "Carl's Jr",
    total: 5.39,
    lengthInInches: 5,
    date: "11/30/2017",
    charges: ["cheeseburger", "hot dog", "small fries", "cookie"],
    fold: function () {
       return this.lengthInInches / 2;
    }
}

console.log(receipt.fold());

// Object 6
var person = {
    name: "Eric",
    cap: true,
    location: "Utah",
    ageOver21: true,
    speak: function () {
        console.log("Hi");
    }
}

person.speak();


// Object 7
var lightString = {
    totalBulbs: 45,
    deadBulbs: 2,
    lightColor: "golden",
    onOffState: false,
    turnOn: function () {
        onOffState = true;
    }
}



// Object 8
var window = {
    positionFromFront: 2,
    hasCovering: false,
    isOpen: false,
    sillItems: ["books", "flowerVase", "star"],
    checkIfOpen: function () {
        if(this.isOpen){
            return true;
        }
        else {
            return false;
        }
    }
}

console.log(window.checkIfOpen());

// Object 9
var lightSwitch = {
    color: "white",
    switches: 3,
    switchesOn: 2,
    brightness: "dim",
    brighten() {
        if(this.brightness === "dim") {
            this.brightness = "bright";
        }
        else if(this.brightness === "bright") {
            this.brightness = "brighter";
        }
        else if(this.brightness === "brighter") {
            this.brightness = "dim";
        }
        return this.brightness;
    }
}

console.log(lightSwitch.brighten());

// Object 10
var myTable = {
    surfaceMaterial: "wood",
    monitors: 2,
    hasDrawers: false,
    knockOnWood() {
        return "Who's there?";
    }
}

console.log(myTable.knockOnWood());
