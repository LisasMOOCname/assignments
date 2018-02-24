const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const ismsRouter = require("./routes/isms.js");

const app = express();
let port = 8080;

//middleware
app.use(bodyParser.json());
app.use("/isms", ismsRouter);

mongoose.connect("mongodb://localhost:27017", () => {console.log("Connected to MongoDB.")
});

app.listen(port, () => {
    console.log(`Listening on port 8080.`);
})
