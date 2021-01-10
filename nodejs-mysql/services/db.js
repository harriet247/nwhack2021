const mysql = require('mysql2/promise');
const config = require('../config');

const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});

const createTBRegister = "CREATE TABLE register (companyName TEXT NOT NULL, location TEXT NOT NULL, ownerName TEXT NOT NULL, email TEXT NOT NULL, category TEXT NOT NULL DEFAULT 'By-product', description TEXT, productName TEXT NOT NULL, amount INT, time TEXT, detail TEXT, PRIMARY KEY (`companyName`))";
const createTBPost = "CREATE TABLE post (productName TEXT NOT NULL, amount INT, time TEXT, detail TEXT))";
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(createTBRegister, function (err, result) {
    if (err) throw err;
    console.log("Table register created");
  });
});

const pool = mysql.createPool(config.db);


async function query(sql, params) {
  const [rows, fields] = await pool.execute(sql, params);

  return rows;
}

module.exports = {
  query
}