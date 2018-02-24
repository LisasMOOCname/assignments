const express = require("express");


const app = express();

let port = 8080;

app.get("/", (req, res) => {
    res.send("server is running.");
});

app.listen(port, () => {
    console.log("Listening on port 8080.");
});