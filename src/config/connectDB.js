// get the client
import mysql from "mysql2";
require("dotenv").config();

// create the connection to database
const connection = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE,
});

// simple query
connection.query("SELECT * FROM users", function (err, results, fields) {
  console.log(results); // results contains rows returned by server
  console.log(fields); // fields contains extra meta data about results, if available
});

export default connection;
