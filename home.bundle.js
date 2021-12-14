/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* <body class="background">
    <header class="header">
        <h1>Generic Breakfast and Bad Coffee</h1>
        <div class="button-wrapper">
            <button id="homeTab" class="menu" type="button">Home</button>
            <button id="menuTab" class="menu" type="button">Menu</button>
            <button id="aboutTab" class="menu" type="button">About</button>
        </div>
    </header>
    <div class="content-wrapper-wrapper">
    <div class="content-wrapper">
        <h2>This diner is really rundown and is used almost exclusivly for money laundering!</h2>
        <p>Don't order here today!</p>
    </div>
    </div> */

function makeHome() {
    let contentWrapperer = document.querySelector('.content-wrapper-wrapper');
    contentWrapperer.innerHTML = "";

    let contentWrapper = document.createElement('div');
    contentWrapper.classList.add('content-wrapper');
    contentWrapperer.appendChild(contentWrapper);

    let sectionHeader = document.createElement('h2');
    sectionHeader.innerText = 'This diner is really rundown and is used almost exclusivly for money laundering!';
    contentWrapper.appendChild(sectionHeader);

    let sectionPara = document.createElement('p');
    sectionPara.innerText = "Don't order here today!";
    contentWrapper.appendChild(sectionPara);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeHome);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiA8Ym9keSBjbGFzcz1cImJhY2tncm91bmRcIj5cbiAgICA8aGVhZGVyIGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgIDxoMT5HZW5lcmljIEJyZWFrZmFzdCBhbmQgQmFkIENvZmZlZTwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b24td3JhcHBlclwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImhvbWVUYWJcIiBjbGFzcz1cIm1lbnVcIiB0eXBlPVwiYnV0dG9uXCI+SG9tZTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm1lbnVUYWJcIiBjbGFzcz1cIm1lbnVcIiB0eXBlPVwiYnV0dG9uXCI+TWVudTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImFib3V0VGFiXCIgY2xhc3M9XCJtZW51XCIgdHlwZT1cImJ1dHRvblwiPkFib3V0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXdyYXBwZXItd3JhcHBlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXdyYXBwZXJcIj5cbiAgICAgICAgPGgyPlRoaXMgZGluZXIgaXMgcmVhbGx5IHJ1bmRvd24gYW5kIGlzIHVzZWQgYWxtb3N0IGV4Y2x1c2l2bHkgZm9yIG1vbmV5IGxhdW5kZXJpbmchPC9oMj5cbiAgICAgICAgPHA+RG9uJ3Qgb3JkZXIgaGVyZSB0b2RheSE8L3A+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+ICovXG5cbmZ1bmN0aW9uIG1ha2VIb21lKCkge1xuICAgIGxldCBjb250ZW50V3JhcHBlcmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtd3JhcHBlci13cmFwcGVyJyk7XG4gICAgY29udGVudFdyYXBwZXJlci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgbGV0IGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudC13cmFwcGVyJyk7XG4gICAgY29udGVudFdyYXBwZXJlci5hcHBlbmRDaGlsZChjb250ZW50V3JhcHBlcik7XG5cbiAgICBsZXQgc2VjdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgc2VjdGlvbkhlYWRlci5pbm5lclRleHQgPSAnVGhpcyBkaW5lciBpcyByZWFsbHkgcnVuZG93biBhbmQgaXMgdXNlZCBhbG1vc3QgZXhjbHVzaXZseSBmb3IgbW9uZXkgbGF1bmRlcmluZyEnO1xuICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKHNlY3Rpb25IZWFkZXIpO1xuXG4gICAgbGV0IHNlY3Rpb25QYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHNlY3Rpb25QYXJhLmlubmVyVGV4dCA9IFwiRG9uJ3Qgb3JkZXIgaGVyZSB0b2RheSFcIjtcbiAgICBjb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZChzZWN0aW9uUGFyYSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VIb21lOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==