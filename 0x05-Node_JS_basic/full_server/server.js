// server.js
import express from 'express';
import router from './routes/index.js';
// const path = require('path');

const app = express();
export default app;
const port = 1245;
const dbFile = process.argv[2];
// const dbFile = path.resolve(__dirname, process.argv[2]);
process.env.DB_FILE = dbFile; // process.argv[2];
// console.log(`Using database file at: ${dbFile}`);
app.use('/', router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// module.exports = app;
