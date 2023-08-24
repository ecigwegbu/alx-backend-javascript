// 3-payments.js
const Utils = require('./utils'); // [class Utils]
// total = Utils.calculateNumber('SUM', 2.9, 4.2);

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  total = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${total}`);
}

module.exports = sendPaymentRequestToApi;
