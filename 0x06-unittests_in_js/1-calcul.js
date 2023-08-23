// function to add a and b, rounded

function calculateNumber(type, a, b) {
  const ra = Math.round(a); // rounded a
  const rb = Math.round(b); // rounded b
  if (!type || (typeof type !== 'string')) {
    return 'Error';
  }
  if (type === 'SUM'){
    return (Math.round(ra) + Math.round(rb));
  }
  if (type === 'SUBTRACT'){
    return (Math.round(ra) - Math.round(rb));
  }
  if (type === 'DIVIDE'){
    return (rb === 0) ? ('Error') : (Math.round(a) / Math.round(b));
  }

}
module.exports = calculateNumber;
