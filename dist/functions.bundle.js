"use strict";
(self["webpackChunktop_imageslider"] = self["webpackChunktop_imageslider"] || []).push([["functions"],{

/***/ "./src/funcs.js":
/*!**********************!*\
  !*** ./src/funcs.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domEleGen": () => (/* binding */ domEleGen)
/* harmony export */ });

const domEleGen = (function() {

    const makeEle = function() {
        let argArr = [...arguments];

        if (typeof(argArr[0]) != 'string') {
            return alert("First argument must be a valid HTML element in string format. Example: 'div' ");
        } else if (typeof(argArr[1]) != "string" && argArr.length === 2) {
            return alert("Invalid Argument Type. The second argument must be a string");
        } else if (typeof(argArr[2]) != "object" && argArr.length === 3) {
            return alert("Invalid Arg. Third argument accepts an array or a nested array of arrays.");
        }

        let newEle = document.createElement(`${argArr[0]}`);
        newEle.textContent = argArr[1];
        
        if (argArr.length === 3 && typeof(argArr[2][0]) === "object"){
            for (let i in argArr[2]){                
                let tempArr = [...argArr[2][i]];

                newEle.setAttribute(...tempArr);
            }
        } else if (typeof(argArr[2]) === "object") {
            newEle.setAttribute(...argArr[2]);
        }
        

        return newEle;   
    }

    return { makeEle };
})();



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/funcs.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25zLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBLCtDQUErQyxVQUFVO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcF9pbWFnZXNsaWRlci8uL3NyYy9mdW5jcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IGRvbUVsZUdlbiA9IChmdW5jdGlvbigpIHtcblxuICAgIGNvbnN0IG1ha2VFbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGFyZ0FyciA9IFsuLi5hcmd1bWVudHNdO1xuXG4gICAgICAgIGlmICh0eXBlb2YoYXJnQXJyWzBdKSAhPSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHZhbGlkIEhUTUwgZWxlbWVudCBpbiBzdHJpbmcgZm9ybWF0LiBFeGFtcGxlOiAnZGl2JyBcIik7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mKGFyZ0FyclsxXSkgIT0gXCJzdHJpbmdcIiAmJiBhcmdBcnIubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoXCJJbnZhbGlkIEFyZ3VtZW50IFR5cGUuIFRoZSBzZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZ1wiKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YoYXJnQXJyWzJdKSAhPSBcIm9iamVjdFwiICYmIGFyZ0Fyci5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgIHJldHVybiBhbGVydChcIkludmFsaWQgQXJnLiBUaGlyZCBhcmd1bWVudCBhY2NlcHRzIGFuIGFycmF5IG9yIGEgbmVzdGVkIGFycmF5IG9mIGFycmF5cy5cIik7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbmV3RWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHthcmdBcnJbMF19YCk7XG4gICAgICAgIG5ld0VsZS50ZXh0Q29udGVudCA9IGFyZ0FyclsxXTtcbiAgICAgICAgXG4gICAgICAgIGlmIChhcmdBcnIubGVuZ3RoID09PSAzICYmIHR5cGVvZihhcmdBcnJbMl1bMF0pID09PSBcIm9iamVjdFwiKXtcbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gYXJnQXJyWzJdKXsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IHRlbXBBcnIgPSBbLi4uYXJnQXJyWzJdW2ldXTtcblxuICAgICAgICAgICAgICAgIG5ld0VsZS5zZXRBdHRyaWJ1dGUoLi4udGVtcEFycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mKGFyZ0FyclsyXSkgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIG5ld0VsZS5zZXRBdHRyaWJ1dGUoLi4uYXJnQXJyWzJdKTtcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICByZXR1cm4gbmV3RWxlOyAgIFxuICAgIH1cblxuICAgIHJldHVybiB7IG1ha2VFbGUgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGRvbUVsZUdlbiB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9