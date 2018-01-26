module.exports = (books) => {
    return (books, req, res, next) => {
        res.genre = books.genre;
        next();
    }
}