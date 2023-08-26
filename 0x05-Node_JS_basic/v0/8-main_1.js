import readDatabase from './full_server/utils.js';

readDatabase('database.csv')
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
