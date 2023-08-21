// Reading a file synchronously with Node JS
const fs = require('fs');

function countStudents(path) {
  let fileText;
  try {
    // Read the file
    fileText = fs.readFileSync(path, 'utf8');
  } catch (_) {
    // in case of any error reading the database
    throw new Error('Cannot load the database');
  }

  // Trim content and split into lines
  const lines = fileText.split('\n').filter((line) => line.trim() !== '');

  // Parse the first line into fieldNames
  const fieldNames = lines[0].split(',');

  // Parse the lines into entries containing objects
  const records = lines.slice(1).map((line) => {
    const values = line.split(',');
    const record = {};
    fieldNames.forEach((header, index) => {
      record[header.trim()] = values[index].trim();
    });
    return record;
  });

  // Output number of students
  console.log(`Number of students: ${records.length}`);

  // Now group the data
  const fieldGroups = {};

  records.forEach((record) => {
    if (!fieldGroups[record.field]) {
      fieldGroups[record.field] = [];
    }
    fieldGroups[record.field].push(record.firstname);
  });

  // Output results by group
  for (const field in fieldGroups) {
    if (Object.prototype.hasOwnProperty.call(fieldGroups, field)) {
    // if (fieldGroups.hasOwnProperty(field)) {
      console.log(`Number of students in ${field}: ${fieldGroups[field].length}. List: ${fieldGroups[field].join(', ')}`);
    }
  }
}

module.exports = countStudents;
