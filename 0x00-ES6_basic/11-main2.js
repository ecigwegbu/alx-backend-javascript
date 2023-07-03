import createEmployeesObject from './11-createEmployeesObject';

console.log(createEmployeesObject('Software', ['Bob', 'Sylvie']));

console.log("@@@@@@@@@@@@@@@@@@@@");

const engineering = ['John Doe', 'Guillaume Salva'];
const marketing = ['Agatha Christie', 'Jason Leverson'];

    const employees = {
      ...createEmployeesObject('engineering', engineering),
      ...createEmployeesObject('marketing', marketing),
    };

    const holbertonEmployees = {
      engineering,
      marketing,
    };

console.log("employees: ", employees);
console.log("holberton employees: ", holbertonEmployees);
console.log(employees == holbertonEmployees);
