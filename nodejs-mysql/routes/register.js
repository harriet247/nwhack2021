const express = require('express');
const router = express.Router();
const registers = require('../services/register');

// todo: change to post request
const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected");
});

router.post('/register', async function(req, res) {
    var record = {
        "companyName": req.body.companyName,
        "location": req.body.location,
        "ownerName": req.body.ownerName,
        "email": req.body.email,
        "category": req.body.category,
        "desceription": req.body.desceription,
        "productName": req.body.productName,
        "amount": req.body.amount,
        "time": req.body.time,
        "detail": req.body.detail
    };
    con.query('INSERT INTO register SET ?', record, function(err, results, fields) {
        if (err) {
            res.send({
                "code": 400,
                "failed": "error ocurred"
            })
        } else {
            res.send({
                "code": 200,
                "success": "user registered sucessfully"
            });
        }
    });
});

module.exports = router;