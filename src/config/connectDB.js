// get the client
import mysql from "mysql2/promise";
require("dotenv").config();

// create the connection to database
const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE,
});

export default pool;
