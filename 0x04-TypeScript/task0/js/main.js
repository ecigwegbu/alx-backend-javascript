// task 0: 0. Creating an interface for a student
var student1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 24,
    location: 'Enugu'
};
var student2 = {
    firstName: 'Michael',
    lastName: 'Jackson',
    age: 43,
    location: 'London'
};
// array containing two students
var studentList = [student1, student2];
// Table of Students
console.log('List of Students:');
console.log('First Name      Location');
studentList.forEach(function (student) { return console.log("".concat(student.firstName, "\t\t").concat(student.location.padStart(30, ''))); });
