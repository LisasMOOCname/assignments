const express = require("express");
const bountyRoute = express.Router();
const app = express();

let bounties = require("../bounties/bountiesDB.js");