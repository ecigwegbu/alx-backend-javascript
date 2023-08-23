// utils.js
const fs = require('fs').promises;

export default async function readDatabase(path) {
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
    // console.log(`Number of students: ${records.length}`);

    // Group by field type and collect names
    const fieldGroups = {};

    records.forEach((record) => {
      if (!fieldGroups[record.field]) {
        fieldGroups[record.field] = [];
      }
      fieldGroups[record.field].push(record.firstname);
    });

    return fieldGroups;
  } catch (err) {
    // throw err;
    throw new Error('Cannot load the database');
  }
}
// module.exports = readDatabase;
