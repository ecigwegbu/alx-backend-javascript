// server.js
const express = require('express');
const path = require('path');
const router = require('./routes/index');

const app = express();
const port = 1245;
const dbFilename = process.argv[process.argv.length - 1];
const projectRoot = path.parse(__dirname).dir;
process.env.DB_FILE = path.resolve(projectRoot, dbFilename);
// console.log(`Using database file at: ${process.env.DB_FILE}`);
app.use('/', router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
