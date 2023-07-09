// Tasks 5-6:

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
    return "Getting to director tasks";
  }
  toString(): string {
    return `${this.constructor.name}`;
  }
}	
class Teacher implements TeacherInterface {
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

function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}
// test task 5
console.log(createEmployee(200).toString());  // Teacher
console.log(createEmployee(1000).toString());  // Director
console.log(createEmployee('$500').toString());  // Director

// Task 6: Creating functions specific to employees
function isDirector(employee: Teacher | Director){
  if (employee instanceof Director) {
    return true;
  }
  return false;
}

function executeWork(employee: Teacher | Director): void {
  if(isDirector(employee)) {
    console.log((employee as Director).workDirectorTasks());
  } else {
    console.log((employee as Teacher).workTeacherTasks());
  }
}
// test Task 6
executeWork(createEmployee(200));  // Getting to work
executeWork(createEmployee(1000));  // Getting to director tasks
