//Will give the size of the database.

module.exports = (database) => {
    return (database, req, res, next) => {
        res.size = database.length;
        next();
    }
}