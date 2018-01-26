const express = require("express");
const careers = require("./careers");
const bodyParser = require("body-parser");
const uuid = require("uuid");

const app = express();
let port = 5050

app.use(bodyParser.json());

app.get("/careers", (req, res) => {
    let query = req.query;
    let filteredCareers = careers.filter((career) => {
        let found = true;
        for(let key in query) {
            if(career[key] != query[key]) {
                found = false;
                break;
            }
        }
        return found;
    })
    res.send(filteredCareers);
});

app.post("/", (req, res) => {
    let newDatum = req.body;
    newDatum._id = uuid();
    careers.push(newDatum);
    res.send({data: newDatum,
    message: "Added successfully."});
});

app.get("/careers/:id", (req, res) => {
    let {id} = req.params;
    let found = false;
    let foundCareer;
    for(let i = 0; i < careers.length; i++) {
        if(careers[i]._id === id) {
            found = true;
            foundCareer = careers[i];
            break;
        }
    }
    if(found) {
        res.send({
            msg: `Item ${id} was found.`,
            data: foundCareer
        })
    }
    else {
        res.send({
            msg: `Item ${id} not found.`
        })
    }
});

app.delete("/careers/:id", (req, res) => {
    let {id} = req.params;
    let found = false;
    for(let i = 0; i < careers.length; i++) {
        if(careers[i]._id === id) {
            careers.splice(i, 1);
            found = true;
            break;
        }
    }
    if(found) {
        res.send({
            msg: `Item ${id} was successfully removed!`
        });
    }
    else {
        res.send({
            msg: `Item ${id} was not found!`
        })
    }
});

app.put("/careers/:id", (req, res) => {
    let {id} = req.params;
    let updatedCareer = req.body;
    let found = false;
    for(let i = 0; i < careers.length; i++) {
        if(careers[i]._id === id) {
            careers[i] = Object.assign(careers[i], updatedCareer);
            updatedCareer = careers[i]; 
            found = true;
            break;
        }
    }
    if(found) {
        res.send({
            msg: `Item ${id} was updated.`,
            data: updatedCareer
        });
    }
    else {
        res.send({
            msg: `Item ${id} not found.`
        });
    }
});

app.listen(port, () => {
    console.log("Listening on port " + port);
});
