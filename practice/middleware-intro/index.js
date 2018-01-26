const express = require("express");
let database = require("./database.js");
let logger = require("./logger.js");
let sizer = require("./sizer.js");

const app = express();
let port = 8000;

app.use(logger);
app.use(sizer(database));
//app.use(bodyparser.json());

app.get("/", (req, res) => {
    res.send({
        data: database,
        msg: res.size
    });
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})