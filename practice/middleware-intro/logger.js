//pretend this is a Node module like bodyParser.

module.exports = (req, res, next) => {
    console.log("Logged on " + new Date().toLocaleTimeString());
    next();
}