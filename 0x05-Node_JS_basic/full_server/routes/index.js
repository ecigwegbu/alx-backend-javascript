// index.js - main page
import express from 'express';
import AppController from '../controllers/AppController.js';
import StudentsController from '../controllers/StudentsController.js';

// const app = express();
// const port = 1245;
const router = express.Router();
export default router;

router.get('/', AppController.getHomepage);
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

// module.exports = router;
