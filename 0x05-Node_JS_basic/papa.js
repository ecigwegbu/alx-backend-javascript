const fs = require('fs');
const Papa = require('papaparse');

const filePath = 'path_to_your_file.csv';

const fileContent = fs.readFileSync(filePath, 'utf8');

Papa.parse(fileContent, {
    header: true,
    skipEmptyLines: true,
    complete: function(results) {
        const records = results.data;

        console.log(`Total records: ${records.length}`);

        // Example: Count records for job type 'Engineer'
        const engineerCount = records.filter(record => record.job === 'Engineer').length;
        console.log(`Total engineers: ${engineerCount}`);
    }
});

