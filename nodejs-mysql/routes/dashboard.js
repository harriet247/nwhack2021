// get

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
    console.log("Connected");
});

router.get('/display', async function(req, res) {
    con.query('SELECT * FROM post', async function(err, results, fields) {
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