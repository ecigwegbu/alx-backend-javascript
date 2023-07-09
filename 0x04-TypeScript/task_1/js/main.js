// Interfaces, etc
// test the Teacher interface
var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false
};
console.log(teacher3);
// Test the Directors interface
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17
};
console.log(director1);
// Task 3: Printing teachers
function printTeacher(firstName, lastName) {
    // code here
    return ("".concat(firstName[0], ". ").concat(lastName));
}
// test the function:
console.log(printTeacher('John', 'Doe'));
var StudentClass = /** @class */ (function () {
    function StudentClass(_a) {
        var firstName = _a.firstName, lastName = _a.lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
// Test the Code for task4:
var studentObject = {
    firstName: "John",
    lastName: "Doe"
};
var student = new StudentClass(studentObject);
console.log(student.workOnHomework()); // Currently working
console.log(student.displayName()); // John
