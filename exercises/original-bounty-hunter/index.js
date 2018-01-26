const express = require("express");
const app = express();
const bounties = require("./bounties");
const bodyParser = require("body-parser");
const uuid = require("uuid");

let port = 8080;

app.listen(port, () => {
    console.log("Listening on port " + port);
})

app.use(bodyParser.json());


app.get("/", (req, res) => {
    res.send(bounties);
})

app.post("/", (req, res) => {
    let newBounty = req.body;
    newBounty._id = uuid();
    bounties.push(newBounty);
    res.send({data: newBounty,
    message: "Added successfully."});
});

app.delete("/bounties/:id", (req, res) => {
    let {id} = req.params;
    let found = false;
    for(let i = 0; i < bounties.length; i++) {
        if(bounties[i]._id === id) {
            bounties.splice(i, 1);
            found = true;
            break;
        }
    }
    if(found) {
        res.send({
            msg: `Item ${id} has been removed.`
        });
    }
    else {
        res.send({
            msg: `Item ${id} was not found.`
        })
    }
});

app.put("/bounties/:id", (req, res) => {
    let {id} = req.params;
    let updatedBounty = req.body;
    let found = false;
    for(let i = 0; i < bounties.length; i++) {
        if(bounties[i]._id === id) {
            bounties[i] = Object.assign(bounties[i], updatedBounty);
            updatedBounty = bounties[i]; 
            found = true;
            break;
        }
    }
    if(found) {
        res.send({
            msg: `Item ${id} has been updated.`,
            data: updatedBounty
        });
    }
    else {
        res.send({
            msg: `Item ${id} not found.`
        });
    }
});


