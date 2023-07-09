// task 0: 0. Creating an interface for a student

interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string  
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 24,
  location: 'Enugu'  
}

const student2: Student = {
  firstName: 'Michael',
  lastName: 'Jackson',
  age: 43,
  location: 'London'  
}

// array containing two students
const studentList = [student1, student2];

// Table of Students
console.log('List of Students:');
console.log('First Name      Location');
studentList.forEach((student) => console.log(
  `${student.firstName}\t\t${student.location.padStart(30,'')}`
));
