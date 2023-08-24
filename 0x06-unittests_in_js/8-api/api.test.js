const request = require('request');
const expect = require('chai').expect;
// const sinon = require('sinon');
const port = 7865;
describe('Index page', function () {
  it('displays "Welcome to the payment system" at route GET /', function (done) {
    // const spy = sinon.spy("getPaymentTokenFromAPI");
    request(`http://localhost:${port}/`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
