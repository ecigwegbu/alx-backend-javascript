const expect = require('chai').expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payments');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  const spy = sinon.spy(Utils, "calculateNumber");
  payment = sendPaymentRequestToApi(100, 20);
  it("was  called once", function () {
    expect(spy.calledOnce).to.be.true;
  });
  it("was called with 'SUM', 100, 20", function () {
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;
  });
  spy.restore();
});
