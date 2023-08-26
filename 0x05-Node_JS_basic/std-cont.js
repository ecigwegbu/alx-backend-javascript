const express = require('express');
const StudentsController = require('./full_server/controllers/StudentsController');

const app = express();
const port = 3000;

app.get('/students', StudentsController.getAllStudents);
app.get('/students/:major', StudentsController.getAllStudentsByMajor);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
