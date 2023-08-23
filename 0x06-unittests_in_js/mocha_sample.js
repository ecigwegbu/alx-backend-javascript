describe('Array tests', function() {
  
  before(function() {
    // runs once before the first test in this block
    console.log('Setting up...');
  });

  after(function() {
    // runs once after the last test in this block
    console.log('Cleaning up...');
  });

  beforeEach(function() {
    // runs before each test in this block
  });

  afterEach(function() {
    // runs after each test in this block
  });

  // test cases
  it('should return -1 when the value is not present', function() {
    assert.equal([1, 2, 3].indexOf(4), -1);
  });

  it('should return the correct index when the value is present', function() {
    assert.equal([1, 2, 3].indexOf(2), 1);
  });
});

