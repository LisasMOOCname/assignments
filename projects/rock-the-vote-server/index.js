const express = require("express");
const app = express();
const issues = require("./issues");
const bodyParser = require("body-parser");
const uuid = require("uuid");

let port = 8080;

app.listen(port, () => {
    console.log("Listening on port 8080.");
})

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send(issues);
})

app.post("/", (req, res) => {
    let newIssue = req.body;
    newIssue._id = uuid();
    bounties.push(newIssue);
    res.send({
        data: newIssue,
    message: "Added issue."});
});

app.delete("/issues/:id", (req, res) => {
    let {id} = req.params;
    let found = false;
    for(let i = 0; i < issus.length; i++) {
        if(issues[i]._id === id) {
            issues.splice(i, 1);
            found = true;
            break;
        }
    }
    if(found) {
        res.send({
            msg: `Issue ${id} has been removed.`
        });
    }
    else {
        res.send({
            msg: `Issue ${id} was not found.`
        })
    }
});

app.put("/issues/:id", (req, res) => {
    let {id} = req.params;
    let updatedIssue = req.body;
    let found = false;
    for(let i = 0; i < issues.length; i++) {
        if(issues[i]._id === id) {
            issues[i] = Object.assign(bounties[i], updatedIssue);
            updatedIssue = issues[i]; 
            found = true;
            break;
        }
    }
    if(found) {
        res.send({
            msg: `Issue ${id} has been updated.`,
            data: updatedIssue
        });
    }
    else {
        res.send({
            msg: `Issue ${id} not found.`
        });
    }
});