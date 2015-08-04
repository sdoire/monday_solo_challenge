/**
 * Created by sarahdoire on 8/3/15.
 */
var express = require('express');
var router = express.Router();
var peopleData = require('../public/assets/data/people.json')


var path = require('path');

router.get("/data", function(req, res){
    res.json(peopleData);
});

router.get("/*", function(req, res){
    var file = req.params[0] || "views/index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;