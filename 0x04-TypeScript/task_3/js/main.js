"use strict";
exports.__esModule = true;
var CRUD = require("./crud.js");
var row = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};
var newRowID = CRUD.insertRow(row);
row.age = 23;
var updatedRow = row;
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
// Test Task 8
// const obj = {firstName: "Guillaume", lastName: "Salva"};
// CR UD.insertRow(obj)  // Insert row {firstName: "Guillaume", lastName: "Salva"}
// const updatedRow2: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
// CRUD.updateRow(newRowID, updatedRow2);
// Update row 125? {firstName: "Guillaume", lastName: "Salva", age: 23}
// CRUD.deleteRow(125);
// Delete row id 125
