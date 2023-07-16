import handleResponseFromAPI from './2-then2';

const promise = Promise.resolve();
console.log(handleResponseFromAPI(promise));

