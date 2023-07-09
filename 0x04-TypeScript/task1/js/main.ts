// Interfaces, etc

// Task 1: Teacher interface
interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string, 
  [key: string]: unknown,  // any,
}
// test the Teacher interface
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London', 
  contract: false,
};
console.log(teacher3);

// Task2: Directors interface
interface Directors extends Teacher {
  numberOfReports: number,
}
// Test the Directors interface
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);
