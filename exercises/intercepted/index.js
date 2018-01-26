const express = require("express");
const gmo = require("./gmos.js");
const bodyParser = require("body-parser");
let timestamp = require("./timestamp.js");

const app = express();

let port = 5000;

app.listen(port, () => {
    console.log("Listening on port " + port);
});

app.use(timestamp);

app.get("/", (req, res, next) => {
    console.log(req.timestamp);
    res.send({
        data: gmo,
        msg: res.func
    });
})

//app.use(gmo(gmos));
//app.use(bodyParser.json());
