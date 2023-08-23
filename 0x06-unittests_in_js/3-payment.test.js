const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('sendPaymentRequestToApi', function () {
  it("('SUM', 2.3, 3.7) => 6", function () {
    expect(calculateNumber('SUM', 2.3, 3.7)).to.equal(6);
  });
  it("('SUBTRACT', 2.6, 3.2) => 0", function () {
    expect(calculateNumber('SUBTRACT', 2.6, 3.2)).to.equal(0);
  });
  it("('DIVIDE',-2.3, 3.7) => -0.5", function () {
    expect(calculateNumber('DIVIDE', -2.3, 3.7)).to.equal(-0.5);
  });
  it("('DIVIDE',-2.3, 0.4) => 'Error'", function () {
    expect(calculateNumber('DIVIDE', -2.3, 0.4)).to.equal('Error');
  });
  it("('sum', 2.0, -0.7) => 'Error'", function () {
    expect(calculateNumber('sum', 2.0, -0.7)).to.equal('Error');
  });
});
