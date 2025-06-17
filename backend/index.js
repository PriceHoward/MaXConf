require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'mysql',
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) throw err;
  console.log('Database is oonline.');
});

app.get('/', (req, res) => {
  res.send('The backend is online.');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});