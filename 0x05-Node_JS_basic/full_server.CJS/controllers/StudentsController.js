// Students controller
const readDatabase = require('../utils');

class StudentsController {
  // First static method
  static getAllStudents(request, response) {
    // readDatabase('database.csv')
    readDatabase(process.env.DB_FILE)
      .then((result) => {
        const fieldGroups = result;
        response.write('This is the list of our students');
        // console.log("----FGs", fieldGroups);
        const fields = Object.keys(fieldGroups).sort();
        // console.log(fields);
        for (const field of fields) {
          response.write(`\nNumber of students in ${field}: ${fieldGroups[field].length}. List: ${fieldGroups[field].join(', ')}`);
        }
        response.status(200).end();
      })
      // .catch((err) => response.status(500).send('Cannot load the database'));
      .catch((err) => response.status(500).send(err.message));
  }

  // Second static method
  static getAllStudentsByMajor(request, response) {
    const fields = ['CS', 'SWE'];
    // const major = request.params.major;
    const { major } = request.params; // object destructuring recomm by ESLint
    if (major && fields.includes(major)) {
      // readDatabase('database.csv')
      readDatabase(process.env.DB_FILE)
        .then((result) => {
          const fieldGroups = result;
          // response.write('This is the list of our students');
          // console.log("----FGs", fieldGroups);
          // const fields = Object.keys(fieldGroups).sort();
          // console.log(fields);
          response.write(`List: ${fieldGroups[major].join(', ')}`);
          response.status(200).end();
        })
        // .catch((err) => response.status(500).send('Cannot load the database'));
        .catch((err) => response.status(500).send(err.message));
    } else {
      response.status(500).send('Major parameter must be CS or SWE');
    }
  }
}

module.exports = StudentsController;
