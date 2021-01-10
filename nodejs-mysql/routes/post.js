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
    console.log("Connected");
});

router.post('/post', async function(req, res) {
    var posting = {
        "productName": req.body.productName,
        "amount": req.body.amount,
        "time": req.body.time,
        "detail": req.body.detail
    }
    con.query('INSERT INTO post SET ?', posting, function(err, results, fields) {
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