const readDatabase = require('./full_server/utils');

readDatabase('database.csv')
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
