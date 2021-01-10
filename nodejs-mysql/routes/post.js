const express = require('express');
const router = express.Router();

const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE mydb", function(err, result) {
        if (err) throw err;
        console.log("Database created");
    });
});
router.post('/post', async function(req, res, next) {
    var post = {
        "productName": req.body.productName,
        "amount": req.body.amount,
        "time": req.body.time,
        "detail": req.body.detail
    }
    con.query('INSERT INTO post SET ?', post, function(err, results, fields) {
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