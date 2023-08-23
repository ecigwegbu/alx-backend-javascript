// STudents controller
import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(request, response) {
    try {
      const fieldGroups = readDatabase('database.csv');
      response.write('This is the list of our students');
      for (const field in fieldGroups) {
        if (Object.prototype.hasOwnProperty.call(fieldGroups, field)) {
          response.write(`Number of students in ${field}: ${fieldGroups[field].length}. List: ${fieldGroups[field].join(', ')}`);
        }
      }
      response.end();
    } catch (error) {
      response.statusCode = 500;
      throw new Error('Cannot load the database');
    }
  }

  static getAllStudentsByMajor(request, response) {
    response.end();
  }
}
