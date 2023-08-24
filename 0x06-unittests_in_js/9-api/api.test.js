const request = require('request');
const expect = require('chai').expect;
// const sinon = require('sinon');
const port = 7865;
describe('Express App Unittesting', function () {
  it('displays "Welcome to the payment system" at route GET /', function (done) {
    // const spy = sinon.spy("getPaymentTokenFromAPI");
    request(`http://localhost:${port}/`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
  it('displays "Payment methods for cart :id" at route GET /carte/:id', function (done) {
    // const spy = sinon.spy("getPaymentTokenFromAPI");
    request(`http://localhost:${port}/cart/12`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal(`Payment methods for cart 12`);
      done();
    });
  });
  it('displays "404 When the id is not a number on GET /carte/:id', function (done) {
    // const spy = sinon.spy("getPaymentTokenFromAPI");
    request(`http://localhost:${port}/cart/NaN`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
