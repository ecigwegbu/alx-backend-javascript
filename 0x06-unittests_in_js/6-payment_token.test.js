const expect = require('chai').expect;
// const sinon = require('sinon');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('returns "{data: \'Successful response from the API\' }" when called with true', function (done) {
    // const spy = sinon.spy("getPaymentTokenFromAPI");
    getPaymentTokenFromAPI(true)
      .then((data) => {
        expect(data).to.deep.equal({data: 'Successful response from the API' });
        // expect(spy.called).to.be.true;
        // spy.restore();
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
