const express = require("express");
const database = require("./database");
const bodyParser = require("body-parser");

const app = express();
let port = 8080; //localhost

//middleware
app.use(bodyParser.json());

//route
app.get("/", (req, res) => {
    res.send("I'm a server!!");
});

app.post("/", (req, res) => {
    database.push(req.body);
    res.send({
        msg: "Data added successfully",
        data: req.body
    });

});

app.listen(port, () => {
    console.log("Listening on port: " + port);
});