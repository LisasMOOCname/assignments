const express = require("express");
const ismsRouter = express.Router();
const ismModel = require("../models/isms.js");

ismsRouter.route("/")
    .post((req, res) => {
        let newIsm = new ismModel(req.body);
        newIsm.save((err, savedIsm) => {
            if(err) {
                console.error(err);
            } else {
                res.send(savedIsm);
            }
        });
    }) // no semi-colon cos it's part of the method chain

    .get((req, res) => {
        ismModel.find((err, foundIsms) => {
            if (err) {
                console.error(err);
            } else {
                res.send(foundIsms);
            }
        });
    })

    //see .get with findOne on GH

    .delete ((req, res) => {
        let {id} = req.params;
        ismModel.findByIdAndRemove(id, (err, removedIsm) => {
            if (err) { 
                console.error(err);
            }else {
                res.send(deletedIsm);
            }
        });
    })

    .put((req, res) => {
        let {id} = req.params;
        ismModel.findByIdAndUpdate(id, req.body, (err, updatedIsm) => {
            if (err) {
                console.error(err);
            } else {
                res.send(updatedIsm);
            }
        }
    })

}); // end of method chain

module.exports = ismsRouter;