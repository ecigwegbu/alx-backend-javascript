const fs = require('fs');

// Read the file
const fileContent = fs.readFileSync('database.csv', 'utf8');

// Split the file content by lines
const lines = fileContent.split('\n').filter(line => line.trim() !== '');

// Extract headers from the first line
const headers = lines[0].split(',');

// Process the remaining lines
const records = lines.slice(1).map(line => {
    const values = line.split(',');
    const record = {};
    headers.forEach((header, index) => {
        record[header.trim()] = values[index].trim();
    });
    console.log('REC', record);
    return record;
});

console.log(`Total records: ${records.length}`);

// Example: Count records for field type 'SWE'
const SWECount = records.filter(record => record.field === 'SWE').length;
console.log(`Total SWEs: ${SWECount}`);

