//import getResponseFromAPI from './0-promise';
//
// return a Promise

function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve();
    reject();
  });
}

getResponseFromAPI();

const response = getResponseFromAPI();
console.log(response instanceof Promise);
