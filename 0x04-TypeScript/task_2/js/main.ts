// Task 5: Advanced types Part 1

interface DirectorInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workDirectorTasks(): string,
}

interface TeacherInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workTeacherTasks(): string,
}

class Director implements DirectorInterface {
  constructor() {
    // code here
  }
  workFromHome(): string {
    return "Working from Home";
  }
  getToWork(): string {
    return "Getting a coffee break";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to directory tasks";
  }
  toString(): string {
    return `${this.constructor.name}`;
  }
}	
class Teacher implements TeacherInterface {
  constructor() {
    // code here
  }
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
  toString(): string {
    return `${this.constructor.name}`;
  }
}	

function createEmployee(salary: number | string): string {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher().toString();
  } else {
    return new Director().toString();
  }
}

// test task 5
console.log(createEmployee(200));  // Teacher
console.log(createEmployee(1000));  // Director
console.log(createEmployee('$500'));  // Director
