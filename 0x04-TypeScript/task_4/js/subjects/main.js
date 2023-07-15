"use strict";
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="./Cpp.ts" />
/// <reference path="./React.ts" />
/// <reference path="./Java.ts" />
exports.__esModule = true;
exports.cTeacher = exports.react = exports.java = exports.cpp = void 0;
// main
exports.cpp = new Subjects.Cpp();
exports.java = new Subjects.Java();
exports.react = new Subjects.React();
exports.cTeacher = {
    firstName: 'Chike',
    lastName: 'Okafor',
    experienceTeachingC: 10
};
console.log('C++');
exports.cpp.setTeacher(exports.cTeacher);
console.log(exports.cpp.getRequirements());
console.log(exports.cpp.getAvailableTeacher());
console.log('Java');
exports.cpp.setTeacher(exports.cTeacher);
console.log(exports.java.getRequirements());
console.log(exports.java.getAvailableTeacher());
console.log('C++');
exports.cpp.setTeacher(exports.cTeacher);
console.log(exports.react.getRequirements());
console.log(exports.react.getAvailableTeacher());
