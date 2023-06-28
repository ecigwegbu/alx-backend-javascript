// return a Promise

function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 300);
    reject();
  });
}

console.log(getResponseFromAPI);
