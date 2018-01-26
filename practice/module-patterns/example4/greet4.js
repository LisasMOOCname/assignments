function Greetr() (
    this.greeting = "Hey!";
    this.greet = function() {
        console.log(this.greeting);
    }
)

module.exports = Greetr;