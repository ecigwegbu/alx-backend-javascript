const getPaymentTokenFromAPI = require('./6-payment_token');

getPaymentTokenFromAPI(true)
  .then(data => {console.log(data)});
