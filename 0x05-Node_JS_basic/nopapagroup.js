const fs = require('fs');

// Read the file
const fileContent = fs.readFileSync('/alx/alx-backend-javascript/0x05-Node_JS_basic/database.csv', 'utf8');

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
    return record;
});

// Group by job type and collect names
const jobGroups = {};

records.forEach(record => {
    if (!jobGroups[record.job]) {
        jobGroups[record.job] = [];
    }
    jobGroups[record.job].push(record.firstname);
});

// Output the results
for (let job in jobGroups) {
    console.log(`There are ${jobGroups[job].length} ${job}s, namely ${jobGroups[job].join(', ')}`);
}

