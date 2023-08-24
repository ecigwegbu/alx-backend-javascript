// asyncFunction.js
module.exports = function asyncFunction(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Completed in ${time} ms`);
    }, time);
  });
};


