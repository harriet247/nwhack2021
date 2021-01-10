const express = require('express');
const router = express.Router();
const registers = require('../services/register');
const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

// todo: change to post request

router.post('/register', async function(req, res) {
    var register = {
        "companyName": req.body.companyName,
        "location": req.body.location,
        "ownerName": req.body.ownerName,
        "email": req.body.email,
        "category": req.body.category,
        "description": req.body.description,
        "productName": req.body.productName,
        "amount": req.body.amount,
        "detail": req.body.detail
    }
    con.query('INSERT INTO register SET ?', register, function(err, results, fields) {
        if (error) {
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