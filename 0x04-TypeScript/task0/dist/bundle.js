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
const studentList = [student1, student2];
console.log('List of Students:');
console.log('First Name      Location');
studentList.forEach((student) => console.log(`${student.firstName}\t\t${student.location.padStart(30, '')}`));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsaURBQWlEO0FBU2pELE1BQU0sUUFBUSxHQUFZO0lBQ3hCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsR0FBRyxFQUFFLEVBQUU7SUFDUCxRQUFRLEVBQUUsT0FBTztDQUNsQjtBQUVELE1BQU0sUUFBUSxHQUFZO0lBQ3hCLFNBQVMsRUFBRSxTQUFTO0lBQ3BCLFFBQVEsRUFBRSxTQUFTO0lBQ25CLEdBQUcsRUFBRSxFQUFFO0lBQ1AsUUFBUSxFQUFFLFFBQVE7Q0FDbkI7QUFFRCxNQUFNLFdBQVcsR0FBRyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBQ3hDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQzFDLEdBQUcsT0FBTyxDQUFDLFNBQVMsT0FBTyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLEVBQUUsQ0FDOUQsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHRhc2sgMDogMC4gQ3JlYXRpbmcgYW4gaW50ZXJmYWNlIGZvciBhIHN0dWRlbnRcblxuaW50ZXJmYWNlIFN0dWRlbnQge1xuICBmaXJzdE5hbWU6IHN0cmluZyxcbiAgbGFzdE5hbWU6IHN0cmluZyxcbiAgYWdlOiBudW1iZXIsXG4gIGxvY2F0aW9uOiBzdHJpbmcgIFxufVxuXG5jb25zdCBzdHVkZW50MTogU3R1ZGVudCA9IHtcbiAgZmlyc3ROYW1lOiAnSm9obicsXG4gIGxhc3ROYW1lOiAnRG9lJyxcbiAgYWdlOiAyNCxcbiAgbG9jYXRpb246ICdFbnVndScgIFxufVxuXG5jb25zdCBzdHVkZW50MjogU3R1ZGVudCA9IHtcbiAgZmlyc3ROYW1lOiAnTWljaGFlbCcsXG4gIGxhc3ROYW1lOiAnSmFja3NvbicsXG4gIGFnZTogNDMsXG4gIGxvY2F0aW9uOiAnTG9uZG9uJyAgXG59XG5cbmNvbnN0IHN0dWRlbnRMaXN0ID0gW3N0dWRlbnQxLCBzdHVkZW50Ml07XG5jb25zb2xlLmxvZygnTGlzdCBvZiBTdHVkZW50czonKTtcbmNvbnNvbGUubG9nKCdGaXJzdCBOYW1lICAgICAgTG9jYXRpb24nKTtcbnN0dWRlbnRMaXN0LmZvckVhY2goKHN0dWRlbnQpID0+IGNvbnNvbGUubG9nKFxuICBgJHtzdHVkZW50LmZpcnN0TmFtZX1cXHRcXHQke3N0dWRlbnQubG9jYXRpb24ucGFkU3RhcnQoMzAsJycpfWBcbikpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9