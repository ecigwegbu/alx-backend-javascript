// Task 5: Advanced types Part 1
var Director = /** @class */ (function () {
    function Director() {
        // code here
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
        return "Getting to directory tasks";
    };
    Director.prototype.toString = function () {
        return "".concat(this.constructor.name);
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
        // code here
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
        return new Teacher().toString();
    }
    else {
        return new Director().toString();
    }
}
// test task 5
console.log(createEmployee(200)); // Teacher
console.log(createEmployee(1000)); // Director
console.log(createEmployee('$500')); // Director
