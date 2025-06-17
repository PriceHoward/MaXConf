//Loads env variables.
require('dotenv').config();
// Checking for express/mysql and creating the app and port.
const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Creates initial connection to the mysql DB.
const db = mysql.createConnection({
  host: 'mysql',
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

// If error on connection throw the error else print DB online.
db.connect(err => {
  if (err) throw err;
  console.log('Database is online.');
});
// This is the setup for the backend routing.
app.get('/', (req, res) => {
  res.send('The backend is online.');
});
// This is showing the app is online and listening.
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
