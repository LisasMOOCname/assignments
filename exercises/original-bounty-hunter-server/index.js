const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid");

const bountyRoute = require("./routes/bounties.js");

const app = express();

let port = 8080;

app.use(bodyParser.json());
app.use("/", bountyRoute);

app.listen(port, () => {
    console.log("Listening on port " + port);
})


