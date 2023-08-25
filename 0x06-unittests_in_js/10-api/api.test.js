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
  it('displays a welcome message on login: GET /login', function (done) {
    // const spy = sinon.spy("getPaymentTokenFromAPI");
    const options = {
      url: `http://localhost:${port}/login`,
      method: 'POST',
      json: true,
      body: { userName: 'Guillaume' }
    };
    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.equal(`Welcome Guillaume`);
      done();
    });
  });
  it('displays payment_methods object on endpoint GET /available_payments', function (done) {
    // const spy = sinon.spy("getPaymentTokenFromAPI");
    responseObject = {
      payment_methods: {
        credit_cards: true,
        paypal: false,
      },
    };
    request(`http://localhost:${port}/available_payments`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.deep.equal(JSON.stringify(responseObject));
      done();
    });
  });
});
