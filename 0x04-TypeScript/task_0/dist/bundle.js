/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
// task 0: 0. Creating an interface for a student
const student1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 24,
    location: 'Enugu'
};
const student2 = {
    firstName: 'Michael',
    lastName: 'Jackson',
    age: 43,
    location: 'London'
};
// array containing two students
const studentList = [student1, student2];
// Table of Students
console.log('List of Students:');
console.log('First Name      Location');
studentList.forEach((student) => console.log(`${student.firstName}\t\t${student.location.padStart(30, '')}`));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsaURBQWlEO0FBU2pELE1BQU0sUUFBUSxHQUFZO0lBQ3hCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsR0FBRyxFQUFFLEVBQUU7SUFDUCxRQUFRLEVBQUUsT0FBTztDQUNsQjtBQUVELE1BQU0sUUFBUSxHQUFZO0lBQ3hCLFNBQVMsRUFBRSxTQUFTO0lBQ3BCLFFBQVEsRUFBRSxTQUFTO0lBQ25CLEdBQUcsRUFBRSxFQUFFO0lBQ1AsUUFBUSxFQUFFLFFBQVE7Q0FDbkI7QUFFRCxnQ0FBZ0M7QUFDaEMsTUFBTSxXQUFXLEdBQXVCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBRTdELG9CQUFvQjtBQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBQ3hDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQzFDLEdBQUcsT0FBTyxDQUFDLFNBQVMsT0FBTyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLEVBQUUsQ0FDOUQsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHRhc2sgMDogMC4gQ3JlYXRpbmcgYW4gaW50ZXJmYWNlIGZvciBhIHN0dWRlbnRcblxuaW50ZXJmYWNlIFN0dWRlbnQge1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbiAgYWdlOiBudW1iZXI7XG4gIGxvY2F0aW9uOiBzdHJpbmdcbn1cblxuY29uc3Qgc3R1ZGVudDE6IFN0dWRlbnQgPSB7XG4gIGZpcnN0TmFtZTogJ0pvaG4nLFxuICBsYXN0TmFtZTogJ0RvZScsXG4gIGFnZTogMjQsXG4gIGxvY2F0aW9uOiAnRW51Z3UnXG59XG5cbmNvbnN0IHN0dWRlbnQyOiBTdHVkZW50ID0ge1xuICBmaXJzdE5hbWU6ICdNaWNoYWVsJyxcbiAgbGFzdE5hbWU6ICdKYWNrc29uJyxcbiAgYWdlOiA0MyxcbiAgbG9jYXRpb246ICdMb25kb24nXG59XG5cbi8vIGFycmF5IGNvbnRhaW5pbmcgdHdvIHN0dWRlbnRzXG5jb25zdCBzdHVkZW50TGlzdDogW1N0dWRlbnQsIFN0dWRlbnRdID0gW3N0dWRlbnQxLCBzdHVkZW50Ml07XG5cbi8vIFRhYmxlIG9mIFN0dWRlbnRzXG5jb25zb2xlLmxvZygnTGlzdCBvZiBTdHVkZW50czonKTtcbmNvbnNvbGUubG9nKCdGaXJzdCBOYW1lICAgICAgTG9jYXRpb24nKTtcbnN0dWRlbnRMaXN0LmZvckVhY2goKHN0dWRlbnQpID0+IGNvbnNvbGUubG9nKFxuICBgJHtzdHVkZW50LmZpcnN0TmFtZX1cXHRcXHQke3N0dWRlbnQubG9jYXRpb24ucGFkU3RhcnQoMzAsJycpfWBcbikpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9