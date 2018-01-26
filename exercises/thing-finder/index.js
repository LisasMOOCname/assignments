const express = require("express");
const books = require("./books.js");
//let genre = require("./genre.js");

const app = express();
let port = 8080;

app.listen(port, () => {
    console.log("Listening on port " + port);
});

//app.use(genre(books)); <-- This is middleware. It's not part of the query.

app.get("/books", (req, res) => {
    let query = req.query;
    let filteredBooks = books.filter((book) => {
        let found = true;
        for(let key in query) {
            if(book[key] != query[key]) {
                found = false;
                break;
            }
        }
        return found;
    })
    res.send({
        data: filteredBooks,
        msg: "Yes, this works."
    });
})

