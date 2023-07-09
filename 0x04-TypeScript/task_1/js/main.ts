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

// Task 3: Printing teachers

function printTeacher(firstName: string, lastName: string): string {
  // code here
  return (`${firstName[0]}. ${lastName}`);
}
// test the function:
console.log(printTeacher('John', 'Doe'));

// Task4: writing a class
interface StudentConstructorInterface {
  firstName: string;
  lastName: string;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor({ firstName, lastName }: StudentConstructorInterface) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
// Test the Code for task4:
const studentObject: StudentConstructorInterface = {
  firstName: "John",
  lastName: "Doe",
};
const student = new StudentClass(studentObject);
console.log(student.workOnHomework()); // Currently working
console.log(student.displayName()); // John
