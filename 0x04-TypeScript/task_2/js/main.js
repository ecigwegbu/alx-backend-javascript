// Tasks 5-6:
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from Home";
    };
    Director.prototype.getToWork = function () {
        return "Getting a coffee break";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    Director.prototype.toString = function () {
        return "".concat(this.constructor.name);
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    Teacher.prototype.toString = function () {
        return "".concat(this.constructor.name);
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
// test task 5
console.log(createEmployee(200).toString()); // Teacher
console.log(createEmployee(1000).toString()); // Director
console.log(createEmployee('$500').toString()); // Director
// Task 6: Creating functions specific to employees
function isDirector(employee) {
    if (employee instanceof Director) {
        return true;
    }
    return false;
}
function executeWork(employee) {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    }
    else {
        console.log(employee.workTeacherTasks());
    }
}
// test Task 6
executeWork(createEmployee(200)); // Getting to work
executeWork(createEmployee(1000)); // Getting to director tasks
