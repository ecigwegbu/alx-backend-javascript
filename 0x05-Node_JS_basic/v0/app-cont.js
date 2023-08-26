const express = require('express');
const AppController = require('./full_server/controllers/AppController');

const app = express();
const port = 3000;

app.get('/', AppController.getHomepage);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

