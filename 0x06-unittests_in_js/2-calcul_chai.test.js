const assert = require('chai').assert;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
  it("('SUM', 2.3, 3.7) => 6", function () {
    assert.strictEqual(calculateNumber('SUM', 2.3, 3.7), 6);
  });
  it("('SUBTRACT', 2.6, 3.2) => 0", function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 2.6, 3.2), 0);
  });
  it("('DIVIDE',-2.3, 3.7) => -0.5", function () {
    assert.strictEqual(calculateNumber('DIVIDE', -2.3, 3.7), -0.5);
  });
  it("('DIVIDE',-2.3, 0.4) => 'Error'", function () {
    assert.strictEqual(calculateNumber('DIVIDE', -2.3, 0.4), 'Error');
  });
  it("('sum', 2.0, -0.7) => 'Error'", function () {
    assert.strictEqual(calculateNumber('sum', 2.0, -0.7), 'Error');
  });
});
