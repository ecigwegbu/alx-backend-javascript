import getResponseFromAPI from './test';

const response = getResponseFromAPI();
console.log(response instanceof Promise);
