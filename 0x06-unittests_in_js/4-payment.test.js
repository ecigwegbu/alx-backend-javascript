const expect = require('chai').expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  const stub = sinon.stub(Utils, "calculateNumber");
  stub.returns(10);
  const payment = sendPaymentRequestToApi(100, 20);
  it("was  called once", function () {
    expect(stub.calledOnce).to.be.true;
  });
  it("was called with 'SUM', 100, 20", function () {
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
  });
  it("was called once with exactly 'SUM', 100, 20", function () {
    expect(stub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
  });
  it("returned 120", function () {
    expect(stub.returned(10)).to.be.true;
  });
  stub.restore();
});
