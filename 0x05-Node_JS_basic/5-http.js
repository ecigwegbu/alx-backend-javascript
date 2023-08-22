// Create a more complex HTTP server using Node's HTTP module
const http = require('http');
const process = require('process');
const fs = require('fs').promises;

let outText = '';
async function countStudents(path) {
  try {
    // Read the file asynchronously
    const fileContent = await fs.readFile(path, 'utf8');

    // Split the file content by lines
    const lines = fileContent.split('\n').filter((line) => line.trim() !== '');

    // Extract headers from the first line
    const headers = lines[0].split(',');

    // Process the remaining lines
    const records = lines.slice(1).map((line) => {
      const values = line.split(',');
      const record = {};
      headers.forEach((header, index) => {
        record[header.trim()] = values[index].trim();
      });
      return record;
    });

    // Print the total count of records
    outText = `Number of students: ${records.length}\n`;

    // Group by field type and collect names
    const fieldGroups = {};

    records.forEach((record) => {
      if (!fieldGroups[record.field]) {
        fieldGroups[record.field] = [];
      }
      fieldGroups[record.field].push(record.firstname);
    });

    // Output the results by field type
    for (const field in fieldGroups) {
      if (Object.prototype.hasOwnProperty.call(fieldGroups, field)) {
        outText += `Number of students in ${field}: ${fieldGroups[field].length}. List: ${fieldGroups[field].join(', ')}\n`;
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
// exports.countStudents = countStudents;

const database = process.argv[2];
const port = 1245;

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    // res.write('This is the list of our students\n');
    countStudents(database)
      .then(() => res.setHeader('Content-Type', 'text/plain'))
      .then(() => res.write('This is the list of our students\n'))
      .then(() => { res.statusCode = 200; })
      .then(() => res.end(outText.slice(0, -1)))
      .catch((error) => res.end(`Error: ${error.message}`));
  }
});

app.listen(port);

module.exports = app;
