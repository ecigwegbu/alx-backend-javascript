// Create a function updateStudentGradeByCity that returns an array of
// students for a specific city with their new grade
//
// It should accept a list of students (from getListStudents), a city (String)
// and newGrades (Array of “grade” objects) as parameters.

// newGrades is an array of objects with this format:

//   {
//     studentId: 31,
//     grade: 78,
//   }
// If a student doesn’t have grade in newGrades, the final grade should be N/A

// You must use filter and map combined.

export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  // code here
  if (!Array.isArray(listStudents) || !city || !newGrades) {
    return [];
  }
  const studentsOfCity = listStudents.filter((student) => student.location === city);
  const studentsOfCityWithGrades = studentsOfCity.map((student) => grade(student));
  return studentsOfCityWithGrades;
}
