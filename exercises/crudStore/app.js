const express = require("express");
const app = express();
const mongoose = require("mongoose");
const inventoryRoutes = require("./routes/inventory");
const bodyParser = require("body-parser");

let port = 8000;

app.use(bodyParser, json());
app.use("/inventory, inventoryRoutes");

mongoose.connect("mongoose://localhost/inventory", (err) => {
    if (err) throw err;
console.log("Connected to the DB.");
})

app.listen(port, () => {
    console.log("Listening on port 8000.");
});