"use strict";
(self["webpackChunktop_imageslider"] = self["webpackChunktop_imageslider"] || []).push([["functions"],{

/***/ "./src/funcs.js":
/*!**********************!*\
  !*** ./src/funcs.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domEleGen": () => (/* binding */ domEleGen),
/* harmony export */   "nextImg": () => (/* binding */ nextImg),
/* harmony export */   "prevImg": () => (/* binding */ prevImg)
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
        } else if (argArr.length > 3) {
            return alert("Too many arguments.")
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

let getStart = (ele) => {
    let tarEle = ele;
    let startingPoint = 0;

    for (let i = 0; i < tarEle.children.length; i++){
        if (tarEle.children[i].classList.value !== "hide"){
            startingPoint = i;
        }
    }

    return startingPoint;
}

let nextImg = () => {
    let imgCnt = document.querySelector(".img_container");
    let curImgNum = getStart(imgCnt);

    imgCnt.children[curImgNum].classList = 'hide';

    if (curImgNum + 1 >= imgCnt.children.length) {
        curImgNum = 0;
        imgCnt.children[curImgNum].classList = "show";
    } else {
        imgCnt.children[curImgNum + 1].classList = "show";
    }

    return;
}

let prevImg = () => {
    let imgCnt = document.querySelector(".img_container");
    console.log(imgCnt);
    let curImgNum = getStart(imgCnt);
    console.log(curImgNum);

    imgCnt.children[curImgNum].classList = 'hide';

    if (curImgNum - 1 === -1) {
        curImgNum = 4;
        imgCnt.children[curImgNum].classList = "show";
    } else {
        imgCnt.children[curImgNum - 1].classList = "show";
    }

    return;
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/funcs.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25zLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUEsK0NBQStDLFVBQVU7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGFBQWE7QUFDYixDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wX2ltYWdlc2xpZGVyLy4vc3JjL2Z1bmNzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgZG9tRWxlR2VuID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgbWFrZUVsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgYXJnQXJyID0gWy4uLmFyZ3VtZW50c107XG5cbiAgICAgICAgaWYgKHR5cGVvZihhcmdBcnJbMF0pICE9ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoXCJGaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgdmFsaWQgSFRNTCBlbGVtZW50IGluIHN0cmluZyBmb3JtYXQuIEV4YW1wbGU6ICdkaXYnIFwiKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YoYXJnQXJyWzFdKSAhPSBcInN0cmluZ1wiICYmIGFyZ0Fyci5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgIHJldHVybiBhbGVydChcIkludmFsaWQgQXJndW1lbnQgVHlwZS4gVGhlIHNlY29uZCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZihhcmdBcnJbMl0pICE9IFwib2JqZWN0XCIgJiYgYXJnQXJyLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiSW52YWxpZCBBcmcuIFRoaXJkIGFyZ3VtZW50IGFjY2VwdHMgYW4gYXJyYXkgb3IgYSBuZXN0ZWQgYXJyYXkgb2YgYXJyYXlzLlwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChhcmdBcnIubGVuZ3RoID4gMykge1xuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiVG9vIG1hbnkgYXJndW1lbnRzLlwiKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5ld0VsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7YXJnQXJyWzBdfWApO1xuICAgICAgICBuZXdFbGUudGV4dENvbnRlbnQgPSBhcmdBcnJbMV07XG4gICAgICAgIFxuICAgICAgICBpZiAoYXJnQXJyLmxlbmd0aCA9PT0gMyAmJiB0eXBlb2YoYXJnQXJyWzJdWzBdKSA9PT0gXCJvYmplY3RcIil7XG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIGFyZ0FyclsyXSl7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCB0ZW1wQXJyID0gWy4uLmFyZ0FyclsyXVtpXV07XG5cbiAgICAgICAgICAgICAgICBuZXdFbGUuc2V0QXR0cmlidXRlKC4uLnRlbXBBcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZihhcmdBcnJbMl0pID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBuZXdFbGUuc2V0QXR0cmlidXRlKC4uLmFyZ0FyclsyXSk7XG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgcmV0dXJuIG5ld0VsZTsgICBcbiAgICB9XG5cbiAgICByZXR1cm4geyBtYWtlRWxlIH07XG59KSgpO1xuXG5sZXQgZ2V0U3RhcnQgPSAoZWxlKSA9PiB7XG4gICAgbGV0IHRhckVsZSA9IGVsZTtcbiAgICBsZXQgc3RhcnRpbmdQb2ludCA9IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhckVsZS5jaGlsZHJlbi5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmICh0YXJFbGUuY2hpbGRyZW5baV0uY2xhc3NMaXN0LnZhbHVlICE9PSBcImhpZGVcIil7XG4gICAgICAgICAgICBzdGFydGluZ1BvaW50ID0gaTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGFydGluZ1BvaW50O1xufVxuXG5sZXQgbmV4dEltZyA9ICgpID0+IHtcbiAgICBsZXQgaW1nQ250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbWdfY29udGFpbmVyXCIpO1xuICAgIGxldCBjdXJJbWdOdW0gPSBnZXRTdGFydChpbWdDbnQpO1xuXG4gICAgaW1nQ250LmNoaWxkcmVuW2N1ckltZ051bV0uY2xhc3NMaXN0ID0gJ2hpZGUnO1xuXG4gICAgaWYgKGN1ckltZ051bSArIDEgPj0gaW1nQ250LmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICBjdXJJbWdOdW0gPSAwO1xuICAgICAgICBpbWdDbnQuY2hpbGRyZW5bY3VySW1nTnVtXS5jbGFzc0xpc3QgPSBcInNob3dcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpbWdDbnQuY2hpbGRyZW5bY3VySW1nTnVtICsgMV0uY2xhc3NMaXN0ID0gXCJzaG93XCI7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xufVxuXG5sZXQgcHJldkltZyA9ICgpID0+IHtcbiAgICBsZXQgaW1nQ250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbWdfY29udGFpbmVyXCIpO1xuICAgIGNvbnNvbGUubG9nKGltZ0NudCk7XG4gICAgbGV0IGN1ckltZ051bSA9IGdldFN0YXJ0KGltZ0NudCk7XG4gICAgY29uc29sZS5sb2coY3VySW1nTnVtKTtcblxuICAgIGltZ0NudC5jaGlsZHJlbltjdXJJbWdOdW1dLmNsYXNzTGlzdCA9ICdoaWRlJztcblxuICAgIGlmIChjdXJJbWdOdW0gLSAxID09PSAtMSkge1xuICAgICAgICBjdXJJbWdOdW0gPSA0O1xuICAgICAgICBpbWdDbnQuY2hpbGRyZW5bY3VySW1nTnVtXS5jbGFzc0xpc3QgPSBcInNob3dcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpbWdDbnQuY2hpbGRyZW5bY3VySW1nTnVtIC0gMV0uY2xhc3NMaXN0ID0gXCJzaG93XCI7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xufVxuXG5leHBvcnQgeyBkb21FbGVHZW4sIG5leHRJbWcsIHByZXZJbWcgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==