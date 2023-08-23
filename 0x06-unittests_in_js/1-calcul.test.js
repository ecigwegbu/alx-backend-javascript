const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  it("('SUM', 2.3, 3.7) => 6", function () {
    assert.equal(calculateNumber('SUM', 2.3, 3.7), 6);
  });
  it("('SUBTRACT', 2.6, 3.2) => 0", function () {
    assert.equal(calculateNumber('SUBTRACT', 2.6, 3.2), 0);
  });
  it("('DIVIDE',-2.3, 3.7) => -0.5", function () {
    assert.equal(calculateNumber('DIVIDE', -2.3, 3.7), -0.5);
  });
  it("('DIVIDE',-2.3, 0.4) => 'Error'", function () {
    assert.equal(calculateNumber('DIVIDE', -2.3, 0.4), 'Error');
  });
  it("('sum', 2.0, -0.7) => 'Error'", function () {
    assert.equal(calculateNumber('sum', 2.0, -0.7), 'Error');
  });
});
