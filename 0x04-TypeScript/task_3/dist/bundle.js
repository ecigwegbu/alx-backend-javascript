/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/crud.js":
/*!********************!*\
  !*** ./js/crud.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteRow: () => (/* binding */ deleteRow),
/* harmony export */   insertRow: () => (/* binding */ insertRow),
/* harmony export */   updateRow: () => (/* binding */ updateRow)
/* harmony export */ });
function insertRow(row) {
  console.log('Insert row', row);
  return Math.floor(Math.random() * Math.floor(1000));
}

function deleteRow(rowId) {
  console.log('Delete row id', rowId);
  return;
}

function updateRow(rowId, row) {
  console.log(`Update row ${rowId}`, row);

  return rowId;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _crud_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crud.js */ "./js/crud.js");

const row = {
    firstName: 'Guillaume',
    lastName: 'Salva',
};
const newRowID = _crud_js__WEBPACK_IMPORTED_MODULE_0__.insertRow(row);
row.age = 23;
const updatedRow = row;
_crud_js__WEBPACK_IMPORTED_MODULE_0__.updateRow(newRowID, updatedRow);
_crud_js__WEBPACK_IMPORTED_MODULE_0__.deleteRow(newRowID);
// Test Task 8
// const obj = {firstName: "Guillaume", lastName: "Salva"};
// CR UD.insertRow(obj)  // Insert row {firstName: "Guillaume", lastName: "Salva"}
// const updatedRow2: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
// CRUD.updateRow(newRowID, updatedRow2);
// Update row 125? {firstName: "Guillaume", lastName: "Salva", age: 23}
// CRUD.deleteRow(125);
// Delete row id 125

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQLDRCQUE0QixNQUFNOztBQUVsQztBQUNBOzs7Ozs7O1VDZEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ0hpQztBQUVqQyxNQUFNLEdBQUcsR0FBZTtJQUN0QixTQUFTLEVBQUUsV0FBVztJQUN0QixRQUFRLEVBQUUsT0FBTztDQUNsQixDQUFDO0FBQ0YsTUFBTSxRQUFRLEdBQVUsK0NBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUU1QyxHQUFHLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNiLE1BQU0sVUFBVSxHQUFlLEdBQUcsQ0FBQztBQUduQywrQ0FBYyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUNyQywrQ0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBR3pCLGNBQWM7QUFDZCwyREFBMkQ7QUFDM0Qsa0ZBQWtGO0FBRWxGLDBGQUEwRjtBQUMxRix5Q0FBeUM7QUFDekMsdUVBQXVFO0FBRXZFLHVCQUF1QjtBQUN2QixvQkFBb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL2NydWQuanMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGluc2VydFJvdyhyb3cpIHtcbiAgY29uc29sZS5sb2coJ0luc2VydCByb3cnLCByb3cpO1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcigxMDAwKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVSb3cocm93SWQpIHtcbiAgY29uc29sZS5sb2coJ0RlbGV0ZSByb3cgaWQnLCByb3dJZCk7XG4gIHJldHVybjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVJvdyhyb3dJZCwgcm93KSB7XG4gIGNvbnNvbGUubG9nKGBVcGRhdGUgcm93ICR7cm93SWR9YCwgcm93KTtcblxuICByZXR1cm4gcm93SWQ7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vVGFzayA4XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9jcnVkLmQudHNcIi8+XG5pbXBvcnQgeyBSb3dJRCwgUm93RWxlbWVudCB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCAqIGFzIENSVUQgZnJvbSAnLi9jcnVkLmpzJ1xuXG5jb25zdCByb3c6IFJvd0VsZW1lbnQgPSB7XG4gIGZpcnN0TmFtZTogJ0d1aWxsYXVtZScsXG4gIGxhc3ROYW1lOiAnU2FsdmEnLFxufTtcbmNvbnN0IG5ld1Jvd0lEOiBSb3dJRCA9IENSVUQuaW5zZXJ0Um93KHJvdyk7XG5cbnJvdy5hZ2UgPSAyMzsgXG5jb25zdCB1cGRhdGVkUm93OiBSb3dFbGVtZW50ID0gcm93O1xuXG5cbkNSVUQudXBkYXRlUm93KG5ld1Jvd0lELCB1cGRhdGVkUm93KTtcbkNSVUQuZGVsZXRlUm93KG5ld1Jvd0lEKTtcblxuXG4vLyBUZXN0IFRhc2sgOFxuLy8gY29uc3Qgb2JqID0ge2ZpcnN0TmFtZTogXCJHdWlsbGF1bWVcIiwgbGFzdE5hbWU6IFwiU2FsdmFcIn07XG4vLyBDUiBVRC5pbnNlcnRSb3cob2JqKSAgLy8gSW5zZXJ0IHJvdyB7Zmlyc3ROYW1lOiBcIkd1aWxsYXVtZVwiLCBsYXN0TmFtZTogXCJTYWx2YVwifVxuXG4vLyBjb25zdCB1cGRhdGVkUm93MjogUm93RWxlbWVudCA9IHsgZmlyc3ROYW1lOiBcIkd1aWxsYXVtZVwiLCBsYXN0TmFtZTogXCJTYWx2YVwiLCBhZ2U6IDIzIH07XG4vLyBDUlVELnVwZGF0ZVJvdyhuZXdSb3dJRCwgdXBkYXRlZFJvdzIpO1xuLy8gVXBkYXRlIHJvdyAxMjU/IHtmaXJzdE5hbWU6IFwiR3VpbGxhdW1lXCIsIGxhc3ROYW1lOiBcIlNhbHZhXCIsIGFnZTogMjN9XG5cbi8vIENSVUQuZGVsZXRlUm93KDEyNSk7XG4vLyBEZWxldGUgcm93IGlkIDEyNVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9