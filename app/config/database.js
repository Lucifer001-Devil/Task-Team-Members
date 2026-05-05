const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  // password: "YES",
  database: "employe",
});

module.exports = connection;
