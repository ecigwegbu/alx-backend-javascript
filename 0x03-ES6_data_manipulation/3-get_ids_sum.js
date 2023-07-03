// Create a function getStudentIdsSum that returns the sum of all the
// student ids.

// It should accept a list of students (from getListStudents) as a parameter.

// You must use the reduce function on the array.

export default function getStudentIdsSum(listStudents) {
  // code here
  if (!Array.isArray(listStudents)) {
    return [];
  }
  function getSum(total, elt) {
    // return total + Math.round(num);
    // console.log('Total: ', total, 'elt: ', elt);
    return total + elt.id;
  }

  return listStudents.reduce(getSum, 0);
}
