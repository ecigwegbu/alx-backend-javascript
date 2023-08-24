const expect = require('chai').expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payments');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  const spy = sinon.spy(Utils, "calculateNumber");
  const payment = sendPaymentRequestToApi(100, 20);
  it("was  called once", function () {
    expect(spy.calledOnce).to.be.true;
  });
  it("was called with 'SUM', 100, 20", function () {
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;
  });
  it("was called once with exactly 'SUM', 100, 20", function () {
    expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
  });
  it("returned 120", function () {
    expect(spy.returned(120)).to.be.true;
  });
  spy.restore();
});
