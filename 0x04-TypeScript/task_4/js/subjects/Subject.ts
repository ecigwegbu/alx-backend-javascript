/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/triple-slash-reference */
/* eslint-disable @typescript-eslint/no-namespace */
/// <reference path="./Teacher.ts" />

namespace Subjects {
  export class Subject {
    teacher: Teacher;
    setTeacher(teacher: Teacher): void {
      //
      this.teacher = {firstName: teacher.firstName, lastName: teacher.lastName};
    } 
  }
}
