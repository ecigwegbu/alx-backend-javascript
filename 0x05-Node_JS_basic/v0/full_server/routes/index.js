// index.js - main page
const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

// const app = express();
// const port = 1245;
const router = express.Router();

router.get('/', AppController.getHomepage);
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = router;
