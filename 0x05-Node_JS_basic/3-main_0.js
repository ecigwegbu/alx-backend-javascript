const countStudents = require('./3-read_file_async');

countStudents("nope.csv")
  .then(() => {
    console.log("Done!");
  })
  .catch((error) => {
    console.log("\n---nnn----ERROR BLOCK");
    console.log(error);
  });
