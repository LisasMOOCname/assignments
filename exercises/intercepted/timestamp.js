module.exports = function(req, res, next) {
    req.timestamp = new Date().toLocaleTimeString();
    next();
}