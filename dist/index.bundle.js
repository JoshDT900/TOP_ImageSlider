"use strict";
(self["webpackChunktop_imageslider"] = self["webpackChunktop_imageslider"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./src/fonts/SinkinSans-600SemiBold.otf */ "./src/fonts/SinkinSans-600SemiBold.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./src/fonts/SinkinSans-400Regular.otf */ "./src/fonts/SinkinSans-400Regular.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: \"SinkinSansBold\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"opentype\");\n    font-weight: 600;\n}\n\n@font-face {\n    font-family: \"SinkinSans\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"opentype\");\n    font-weight: 400;\n}\n\n* {\n    padding: 0px;\n    margin: 0px;\n    text-decoration: none;\n    font-family: 'SinkinSans', 'Courier New', Courier, monospace;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n    background-color: #A5C9CA;\n    display: flex;\n    flex-direction: column;\n}\n\n.main_nav {\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    background-color: #395B64;\n    border-bottom: 5px solid #2C3333;\n}\n\n.title_text {\n    font-family:  'SinkinSansBold', 'Courier New', Courier, monospace;\n    font-size: 24px;\n    color: #E7F6F2;\n}\n\n.page_title {\n    padding: 15px;\n}\n\n.git_img_wrap a {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    padding: 15px;\n}\n\n.git_img_wrap a > p {\n    font-family: 'SinkinSans', 'Courier New', Courier, monospace;\n    font-size: 12px;\n    color: #E7F6F2;\n}\n\n.git_img {\n    width: 45px;\n}\n\n.slider_wrap {\n    display: grid;\n    grid-template-columns: 1fr 3fr 1fr;\n    grid-template-rows: 9fr 1fr;\n    align-items: center;\n    justify-items: center;\n    height: 550px;\n    margin-top: 90px;\n}\n\n.img_bubbles {\n    grid-column: 1/4;\n    grid-row: 2/3;\n}\n\n.img_bubbles img {\n    width: 20px;\n    padding: 5px;\n}\n\n.left_arrow {\n    justify-self: flex-end;\n}\n\n.right_arrow {\n    justify-self: flex-start;\n}\n\n.img_container {\n    display: grid;\n}\n\n.img_container div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n    margin: 15px;\n}\n\n.img_container div img {\n    width: 750px;\n    height: 500px;\n    border: 4px solid #2C3333;\n}\n\n.img_container div.hide,\n.img_container div.hide > img{\n    grid-row: 2/3;\n    grid-column: 1/2;\n    opacity: 0;\n    width: 0px;\n    height: 0px;\n}\n\n.img_container div.show {\n    grid-row: 1/2;\n    grid-column: 1/2;\n    opacity: 1;\n    transition: opacity 0.75s linear;\n    animation-delay: 250ms;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,6BAA6B;IAC7B,+DAA8G;IAC9G,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;IACzB,+DAA6G;IAC7G,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,qBAAqB;IACrB,4DAA4D;AAChE;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,yBAAyB;IACzB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,yBAAyB;IACzB,gCAAgC;AACpC;;AAEA;IACI,iEAAiE;IACjE,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,4DAA4D;IAC5D,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,2BAA2B;IAC3B,mBAAmB;IACnB,qBAAqB;IACrB,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,yBAAyB;AAC7B;;AAEA;;IAEI,aAAa;IACb,gBAAgB;IAChB,UAAU;IACV,UAAU;IACV,WAAW;AACf;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,UAAU;IACV,gCAAgC;IAChC,sBAAsB;AAC1B","sourcesContent":["@font-face {\n    font-family: \"SinkinSansBold\";\n    src: url(\"/home/josh/Documents/repos/TOP_ImageSlider/src/fonts/SinkinSans-600SemiBold.otf\") format(\"opentype\");\n    font-weight: 600;\n}\n\n@font-face {\n    font-family: \"SinkinSans\";\n    src: url(\"/home/josh/Documents/repos/TOP_ImageSlider/src/fonts/SinkinSans-400Regular.otf\") format(\"opentype\");\n    font-weight: 400;\n}\n\n* {\n    padding: 0px;\n    margin: 0px;\n    text-decoration: none;\n    font-family: 'SinkinSans', 'Courier New', Courier, monospace;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n    background-color: #A5C9CA;\n    display: flex;\n    flex-direction: column;\n}\n\n.main_nav {\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    background-color: #395B64;\n    border-bottom: 5px solid #2C3333;\n}\n\n.title_text {\n    font-family:  'SinkinSansBold', 'Courier New', Courier, monospace;\n    font-size: 24px;\n    color: #E7F6F2;\n}\n\n.page_title {\n    padding: 15px;\n}\n\n.git_img_wrap a {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    padding: 15px;\n}\n\n.git_img_wrap a > p {\n    font-family: 'SinkinSans', 'Courier New', Courier, monospace;\n    font-size: 12px;\n    color: #E7F6F2;\n}\n\n.git_img {\n    width: 45px;\n}\n\n.slider_wrap {\n    display: grid;\n    grid-template-columns: 1fr 3fr 1fr;\n    grid-template-rows: 9fr 1fr;\n    align-items: center;\n    justify-items: center;\n    height: 550px;\n    margin-top: 90px;\n}\n\n.img_bubbles {\n    grid-column: 1/4;\n    grid-row: 2/3;\n}\n\n.img_bubbles img {\n    width: 20px;\n    padding: 5px;\n}\n\n.left_arrow {\n    justify-self: flex-end;\n}\n\n.right_arrow {\n    justify-self: flex-start;\n}\n\n.img_container {\n    display: grid;\n}\n\n.img_container div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n    margin: 15px;\n}\n\n.img_container div img {\n    width: 750px;\n    height: 500px;\n    border: 4px solid #2C3333;\n}\n\n.img_container div.hide,\n.img_container div.hide > img{\n    grid-row: 2/3;\n    grid-column: 1/2;\n    opacity: 0;\n    width: 0px;\n    height: 0px;\n}\n\n.img_container div.show {\n    grid-row: 1/2;\n    grid-column: 1/2;\n    opacity: 1;\n    transition: opacity 0.75s linear;\n    animation-delay: 250ms;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets.js":
/*!***********************!*\
  !*** ./src/assets.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "imageAssets": () => (/* binding */ imageAssets)
/* harmony export */ });
/* harmony import */ var _home_josh_Documents_repos_TOP_ImageSlider_src_images_arrow_back_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/images/arrow_back_FILL0_wght400_GRAD0_opsz48.svg */ "./src/images/arrow_back_FILL0_wght400_GRAD0_opsz48.svg");
/* harmony import */ var _home_josh_Documents_repos_TOP_ImageSlider_src_images_arrow_forward_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/images/arrow_forward_FILL0_wght400_GRAD0_opsz48.svg */ "./src/images/arrow_forward_FILL0_wght400_GRAD0_opsz48.svg");
/* harmony import */ var _home_josh_Documents_repos_TOP_ImageSlider_src_images_fiber_manual_record_FILL1_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/images/fiber_manual_record_FILL1_wght400_GRAD0_opsz48.svg */ "./src/images/fiber_manual_record_FILL1_wght400_GRAD0_opsz48.svg");
/* harmony import */ var _home_josh_Documents_repos_TOP_ImageSlider_src_images_fiber_manual_record_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/images/fiber_manual_record_FILL0_wght400_GRAD0_opsz48.svg */ "./src/images/fiber_manual_record_FILL0_wght400_GRAD0_opsz48.svg");
/* harmony import */ var _home_josh_Documents_repos_TOP_ImageSlider_src_images_GitHub_Mark_120px_plus_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/images/GitHub-Mark-120px-plus.png */ "./src/images/GitHub-Mark-120px-plus.png");
/* harmony import */ var _src_images_ismael_rodriguez_XjMrUsQtXxc_unsplash_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/images/ismael-rodriguez-XjMrUsQtXxc-unsplash.jpg */ "./src/images/ismael-rodriguez-XjMrUsQtXxc-unsplash.jpg");
/* harmony import */ var _src_images_job_savelsberg_E2Y4aju0n8U_unsplash_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/images/job-savelsberg-E2Y4aju0n8U-unsplash.jpg */ "./src/images/job-savelsberg-E2Y4aju0n8U-unsplash.jpg");
/* harmony import */ var _src_images_job_savelsberg_EvsVRfU9_p4_unsplash_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/images/job-savelsberg-EvsVRfU9_p4-unsplash.jpg */ "./src/images/job-savelsberg-EvsVRfU9_p4-unsplash.jpg");
/* harmony import */ var _src_images_marek_piwnicki_qee91c_o56s_unsplash_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/images/marek-piwnicki-qee91c-o56s-unsplash.jpg */ "./src/images/marek-piwnicki-qee91c-o56s-unsplash.jpg");
/* harmony import */ var _src_images_zetong_li_2XpVkLppH_o_unsplash_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/images/zetong-li-2XpVkLppH_o-unsplash.jpg */ "./src/images/zetong-li-2XpVkLppH_o-unsplash.jpg");











const imageAssets = (function() {
    let leftArrowImg = _home_josh_Documents_repos_TOP_ImageSlider_src_images_arrow_back_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_0__;
    let rightArrowImg = _home_josh_Documents_repos_TOP_ImageSlider_src_images_arrow_forward_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_1__;
    let bubbleFullImg = _home_josh_Documents_repos_TOP_ImageSlider_src_images_fiber_manual_record_FILL1_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_2__;
    let bubbleEmptyImg = _home_josh_Documents_repos_TOP_ImageSlider_src_images_fiber_manual_record_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_3__;
    let gitImg = _home_josh_Documents_repos_TOP_ImageSlider_src_images_GitHub_Mark_120px_plus_png__WEBPACK_IMPORTED_MODULE_4__;

    let imgObj = [
        {
            img: _src_images_ismael_rodriguez_XjMrUsQtXxc_unsplash_jpg__WEBPACK_IMPORTED_MODULE_5__,
            owner: "Ismael Rodriguez",
            link: "https://unsplash.com/@ismaelrguez?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
            unsplash: "https://unsplash.com/photos/XjMrUsQtXxc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            img: _src_images_job_savelsberg_E2Y4aju0n8U_unsplash_jpg__WEBPACK_IMPORTED_MODULE_6__,
            owner: "Job Savelsberg",
            link: "https://unsplash.com/@jobsavelsberg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
            unsplash: "https://unsplash.com/photos/E2Y4aju0n8U?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            img: _src_images_job_savelsberg_EvsVRfU9_p4_unsplash_jpg__WEBPACK_IMPORTED_MODULE_7__,
            owner: "Job Savelsberg",
            link: "https://unsplash.com/@jobsavelsberg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
            unsplash: "https://unsplash.com/photos/EvsVRfU9_p4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            img: _src_images_marek_piwnicki_qee91c_o56s_unsplash_jpg__WEBPACK_IMPORTED_MODULE_8__,
            owner: "Marek Piwnicki",
            link: "https://unsplash.com/@marekpiwnicki?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
            unsplash: "https://unsplash.com/photos/qee91c-o56s?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
        {
            img: _src_images_zetong_li_2XpVkLppH_o_unsplash_jpg__WEBPACK_IMPORTED_MODULE_9__,
            owner: "Zetong Li",
            link: "https://unsplash.com/@zetong?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
            unsplash: "https://unsplash.com/photos/2XpVkLppH_o?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        },
    ]


    return { leftArrowImg, rightArrowImg, bubbleEmptyImg, bubbleFullImg, gitImg, imgObj };
})();



/***/ }),

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



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _assets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets.js */ "./src/assets.js");
/* harmony import */ var _funcs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./funcs.js */ "./src/funcs.js");




let pageRender = () => {
    let bodyEl = document.querySelector("body");

    navRender(bodyEl);
    sliderEle(bodyEl);

    return bodyEl;
}

let navRender = (ele) => {
    let navEl = _funcs_js__WEBPACK_IMPORTED_MODULE_2__.domEleGen.makeEle("nav", "", ["class", "main_nav"]);
    ele.appendChild(navEl);

    let pTitleEle = _funcs_js__WEBPACK_IMPORTED_MODULE_2__.domEleGen.makeEle("div", "", ["class", "page_title"]);
    navEl.appendChild(pTitleEle);

    let pHoneEle = _funcs_js__WEBPACK_IMPORTED_MODULE_2__.domEleGen.makeEle("h1", "Image Slider - The Odin Project", ["class", "title_text"]);
    pTitleEle.appendChild(pHoneEle);

    let gitImgWrap = _funcs_js__WEBPACK_IMPORTED_MODULE_2__.domEleGen.makeEle("div", "", ["class", "git_img_wrap"]);
    navEl.appendChild(gitImgWrap);

    let gitAncAtr = [["href", "https://github.com/JoshDT900"], ["target", "_blank"]];
    let gitImgEle = _funcs_js__WEBPACK_IMPORTED_MODULE_2__.domEleGen.makeEle("a", "", gitAncAtr);
    gitImgWrap.appendChild(gitImgEle);

    let gitLogoAtr = [["src", _assets_js__WEBPACK_IMPORTED_MODULE_1__.imageAssets.gitImg], ["alt", "github logo"], ["class", "git_img"]]
    let gitLogoEle = _funcs_js__WEBPACK_IMPORTED_MODULE_2__.domEleGen.makeEle("img", "", gitLogoAtr);
    let gitTextEle = _funcs_js__WEBPACK_IMPORTED_MODULE_2__.domEleGen.makeEle("p", "Created by - David T.")
    gitImgEle.appendChild(gitTextEle);
    gitImgEle.appendChild(gitLogoEle);

    return ele;
}

let sliderEle = (ele) => {
    let slideWrap = _funcs_js__WEBPACK_IMPORTED_MODULE_2__.domEleGen.makeEle("div", "", ["class", "slider_wrap"]);
    ele.appendChild(slideWrap);

    let lArrow = _funcs_js__WEBPACK_IMPORTED_MODULE_2__.domEleGen.makeEle("div", "", ["class", "left_arrow"]);
    slideWrap.appendChild(lArrow);

    let lArrowArr = [["src", _assets_js__WEBPACK_IMPORTED_MODULE_1__.imageAssets.leftArrowImg], ["alt", "left arrow icon"]];
    let lArrImg = _funcs_js__WEBPACK_IMPORTED_MODULE_2__.domEleGen.makeEle("img", "", lArrowArr);
    lArrow.appendChild(lArrImg);

    
    let imgCntEle = _funcs_js__WEBPACK_IMPORTED_MODULE_2__.domEleGen.makeEle("div", "", ["class", "img_container"]);
    slideWrap.appendChild(imgCntEle);
    
    let imageObjArr = [..._assets_js__WEBPACK_IMPORTED_MODULE_1__.imageAssets.imgObj];
    genImg(imageObjArr, imgCntEle);
    
    let rArrow = _funcs_js__WEBPACK_IMPORTED_MODULE_2__.domEleGen.makeEle("div", "", ["class", "right_arrow"]);
    slideWrap.appendChild(rArrow);
    
    let rArrowArr = [["src", _assets_js__WEBPACK_IMPORTED_MODULE_1__.imageAssets.rightArrowImg], ["alt", "right arrow icon"]];
    let rArrImg = _funcs_js__WEBPACK_IMPORTED_MODULE_2__.domEleGen.makeEle("img", "", rArrowArr);
    rArrow.appendChild(rArrImg);
    
    lArrImg.addEventListener("click", _funcs_js__WEBPACK_IMPORTED_MODULE_2__.prevImg);
    rArrImg.addEventListener("click", _funcs_js__WEBPACK_IMPORTED_MODULE_2__.nextImg);

    // setInterval(nextImg, 5000)

    genBub(slideWrap);

    return slideWrap;
}

let genImg = (arr, ele) => {
    for (let i in arr){
        let divArr = [];

        if (i == 0) {
            divArr = [["class", `show`]];
        } else {
            divArr = [["class", `hide`]];
        }

        let newDiv = _funcs_js__WEBPACK_IMPORTED_MODULE_2__.domEleGen.makeEle("div", "", divArr);

        let divImgArr = [["src", arr[i].img]];
        let divImg = _funcs_js__WEBPACK_IMPORTED_MODULE_2__.domEleGen.makeEle("img", "", divImgArr);
        newDiv.appendChild(divImg);

        let pAncArrOne = [["target", "_blank"], ["href", arr[i].link]]
        let pAncArrTwo = [["target", "_blank"], ["href", arr[i].unsplash]]
        let pAncOne = _funcs_js__WEBPACK_IMPORTED_MODULE_2__.domEleGen.makeEle("a", arr[i].owner, pAncArrOne)
        let pAncTwo = _funcs_js__WEBPACK_IMPORTED_MODULE_2__.domEleGen.makeEle("a", "Unsplash", pAncArrTwo)
        let pEle = _funcs_js__WEBPACK_IMPORTED_MODULE_2__.domEleGen.makeEle("p", "Photo By ");
        pEle.appendChild(pAncOne);
        pEle.append(" on ");
        pEle.appendChild(pAncTwo);
        newDiv.appendChild(pEle)

        ele.appendChild(newDiv);
    }

    return;
}

let genBub = (ele) => {
    let bubEle = _funcs_js__WEBPACK_IMPORTED_MODULE_2__.domEleGen.makeEle("div", "", ["class", "img_bubbles"]);
    ele.appendChild(bubEle);

    let imgContiner = document.querySelector(".img_container")
    let imgCount = imgContiner.childNodes.length;
    console.log("The image count is", imgCount);

    for (let i = 0; i < imgCount; i++){
        let imgSrc = _assets_js__WEBPACK_IMPORTED_MODULE_1__.imageAssets.bubbleFullImg;
        
        if (i > 0){
            imgSrc = _assets_js__WEBPACK_IMPORTED_MODULE_1__.imageAssets.bubbleEmptyImg;
        }
        
        let imgEle = _funcs_js__WEBPACK_IMPORTED_MODULE_2__.domEleGen.makeEle("img", "", [["src", imgSrc], ["alt", "bubble for switching images"]])
        bubEle.appendChild(imgEle)
    }

    return bubEle;
}

(() => {
    pageRender();
})();

/***/ }),

/***/ "./src/fonts/SinkinSans-400Regular.otf":
/*!*********************************************!*\
  !*** ./src/fonts/SinkinSans-400Regular.otf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b43746214c35a2ca736f.otf";

/***/ }),

/***/ "./src/fonts/SinkinSans-600SemiBold.otf":
/*!**********************************************!*\
  !*** ./src/fonts/SinkinSans-600SemiBold.otf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6dcdcd970b9aaa2e37ab.otf";

/***/ }),

/***/ "./src/images/GitHub-Mark-120px-plus.png":
/*!***********************************************!*\
  !*** ./src/images/GitHub-Mark-120px-plus.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d8c6d6c90bdccf76d860.png";

/***/ }),

/***/ "./src/images/arrow_back_FILL0_wght400_GRAD0_opsz48.svg":
/*!**************************************************************!*\
  !*** ./src/images/arrow_back_FILL0_wght400_GRAD0_opsz48.svg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9933390d8fe945a2bdb2.svg";

/***/ }),

/***/ "./src/images/arrow_forward_FILL0_wght400_GRAD0_opsz48.svg":
/*!*****************************************************************!*\
  !*** ./src/images/arrow_forward_FILL0_wght400_GRAD0_opsz48.svg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc11826c4b2cfe4abc45.svg";

/***/ }),

/***/ "./src/images/fiber_manual_record_FILL0_wght400_GRAD0_opsz48.svg":
/*!***********************************************************************!*\
  !*** ./src/images/fiber_manual_record_FILL0_wght400_GRAD0_opsz48.svg ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8321e426a5ef268483c4.svg";

/***/ }),

/***/ "./src/images/fiber_manual_record_FILL1_wght400_GRAD0_opsz48.svg":
/*!***********************************************************************!*\
  !*** ./src/images/fiber_manual_record_FILL1_wght400_GRAD0_opsz48.svg ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d8447493bb59fa3efbc.svg";

/***/ }),

/***/ "./src/images/ismael-rodriguez-XjMrUsQtXxc-unsplash.jpg":
/*!**************************************************************!*\
  !*** ./src/images/ismael-rodriguez-XjMrUsQtXxc-unsplash.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f1fa339301dc9091c6a.jpg";

/***/ }),

/***/ "./src/images/job-savelsberg-E2Y4aju0n8U-unsplash.jpg":
/*!************************************************************!*\
  !*** ./src/images/job-savelsberg-E2Y4aju0n8U-unsplash.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "548508e8b53d1b2926e6.jpg";

/***/ }),

/***/ "./src/images/job-savelsberg-EvsVRfU9_p4-unsplash.jpg":
/*!************************************************************!*\
  !*** ./src/images/job-savelsberg-EvsVRfU9_p4-unsplash.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c890c40e3697757804fc.jpg";

/***/ }),

/***/ "./src/images/marek-piwnicki-qee91c-o56s-unsplash.jpg":
/*!************************************************************!*\
  !*** ./src/images/marek-piwnicki-qee91c-o56s-unsplash.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ef12a83acfe51618a374.jpg";

/***/ }),

/***/ "./src/images/zetong-li-2XpVkLppH_o-unsplash.jpg":
/*!*******************************************************!*\
  !*** ./src/images/zetong-li-2XpVkLppH_o-unsplash.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "905de5b622b8ae932c17.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bEMscUJBQXFCLGlFQUF5QjtBQUM5QztBQUNBO0FBQ0EscUJBQXFCLGtFQUEwQjtBQUMvQztBQUNBO0FBQ0EscUJBQXFCLHdEQUFpQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3BfaW1hZ2VzbGlkZXIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvcF9pbWFnZXNsaWRlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9wX2ltYWdlc2xpZGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b3BfaW1hZ2VzbGlkZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b3BfaW1hZ2VzbGlkZXIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9wX2ltYWdlc2xpZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvcF9pbWFnZXNsaWRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wX2ltYWdlc2xpZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvcF9pbWFnZXNsaWRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b3BfaW1hZ2VzbGlkZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b3BfaW1hZ2VzbGlkZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b3BfaW1hZ2VzbGlkZXIvLi9zcmMvYXNzZXRzLmpzIiwid2VicGFjazovL3RvcF9pbWFnZXNsaWRlci8uL3NyYy9mdW5jcy5qcyIsIndlYnBhY2s6Ly90b3BfaW1hZ2VzbGlkZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9ob21lL2pvc2gvRG9jdW1lbnRzL3JlcG9zL1RPUF9JbWFnZVNsaWRlci9zcmMvZm9udHMvU2lua2luU2Fucy02MDBTZW1pQm9sZC5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvaG9tZS9qb3NoL0RvY3VtZW50cy9yZXBvcy9UT1BfSW1hZ2VTbGlkZXIvc3JjL2ZvbnRzL1NpbmtpblNhbnMtNDAwUmVndWxhci5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2lua2luU2Fuc0JvbGRcXFwiO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJvcGVudHlwZVxcXCIpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTaW5raW5TYW5zXFxcIjtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdChcXFwib3BlbnR5cGVcXFwiKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6ICdTaW5raW5TYW5zJywgJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTVDOUNBO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubWFpbl9uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5NUI2NDtcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICMyQzMzMzM7XFxufVxcblxcbi50aXRsZV90ZXh0IHtcXG4gICAgZm9udC1mYW1pbHk6ICAnU2lua2luU2Fuc0JvbGQnLCAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgY29sb3I6ICNFN0Y2RjI7XFxufVxcblxcbi5wYWdlX3RpdGxlIHtcXG4gICAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuLmdpdF9pbWdfd3JhcCBhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4uZ2l0X2ltZ193cmFwIGEgPiBwIHtcXG4gICAgZm9udC1mYW1pbHk6ICdTaW5raW5TYW5zJywgJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGNvbG9yOiAjRTdGNkYyO1xcbn1cXG5cXG4uZ2l0X2ltZyB7XFxuICAgIHdpZHRoOiA0NXB4O1xcbn1cXG5cXG4uc2xpZGVyX3dyYXAge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDlmciAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA1NTBweDtcXG4gICAgbWFyZ2luLXRvcDogOTBweDtcXG59XFxuXFxuLmltZ19idWJibGVzIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLmltZ19idWJibGVzIGltZyB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5sZWZ0X2Fycm93IHtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLnJpZ2h0X2Fycm93IHtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uaW1nX2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5pbWdfY29udGFpbmVyIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG1hcmdpbjogMTVweDtcXG59XFxuXFxuLmltZ19jb250YWluZXIgZGl2IGltZyB7XFxuICAgIHdpZHRoOiA3NTBweDtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgIzJDMzMzMztcXG59XFxuXFxuLmltZ19jb250YWluZXIgZGl2LmhpZGUsXFxuLmltZ19jb250YWluZXIgZGl2LmhpZGUgPiBpbWd7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHdpZHRoOiAwcHg7XFxuICAgIGhlaWdodDogMHB4O1xcbn1cXG5cXG4uaW1nX2NvbnRhaW5lciBkaXYuc2hvdyB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC43NXMgbGluZWFyO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDI1MG1zO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksNkJBQTZCO0lBQzdCLCtEQUE4RztJQUM5RyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsK0RBQTZHO0lBQzdHLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLDREQUE0RDtBQUNoRTs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksaUVBQWlFO0lBQ2pFLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGFBQWE7QUFDakI7O0FBRUE7SUFDSSw0REFBNEQ7SUFDNUQsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IseUJBQXlCO0FBQzdCOztBQUVBOztJQUVJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixnQ0FBZ0M7SUFDaEMsc0JBQXNCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIlNpbmtpblNhbnNCb2xkXFxcIjtcXG4gICAgc3JjOiB1cmwoXFxcIi9ob21lL2pvc2gvRG9jdW1lbnRzL3JlcG9zL1RPUF9JbWFnZVNsaWRlci9zcmMvZm9udHMvU2lua2luU2Fucy02MDBTZW1pQm9sZC5vdGZcXFwiKSBmb3JtYXQoXFxcIm9wZW50eXBlXFxcIik7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIlNpbmtpblNhbnNcXFwiO1xcbiAgICBzcmM6IHVybChcXFwiL2hvbWUvam9zaC9Eb2N1bWVudHMvcmVwb3MvVE9QX0ltYWdlU2xpZGVyL3NyYy9mb250cy9TaW5raW5TYW5zLTQwMFJlZ3VsYXIub3RmXFxcIikgZm9ybWF0KFxcXCJvcGVudHlwZVxcXCIpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4qIHtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBmb250LWZhbWlseTogJ1NpbmtpblNhbnMnLCAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBNUM5Q0E7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5tYWluX25hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk1QjY0O1xcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgIzJDMzMzMztcXG59XFxuXFxuLnRpdGxlX3RleHQge1xcbiAgICBmb250LWZhbWlseTogICdTaW5raW5TYW5zQm9sZCcsICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBjb2xvcjogI0U3RjZGMjtcXG59XFxuXFxuLnBhZ2VfdGl0bGUge1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4uZ2l0X2ltZ193cmFwIGEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi5naXRfaW1nX3dyYXAgYSA+IHAge1xcbiAgICBmb250LWZhbWlseTogJ1NpbmtpblNhbnMnLCAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgY29sb3I6ICNFN0Y2RjI7XFxufVxcblxcbi5naXRfaW1nIHtcXG4gICAgd2lkdGg6IDQ1cHg7XFxufVxcblxcbi5zbGlkZXJfd3JhcCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogOWZyIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDU1MHB4O1xcbiAgICBtYXJnaW4tdG9wOiA5MHB4O1xcbn1cXG5cXG4uaW1nX2J1YmJsZXMge1xcbiAgICBncmlkLWNvbHVtbjogMS80O1xcbiAgICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4uaW1nX2J1YmJsZXMgaW1nIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmxlZnRfYXJyb3cge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4ucmlnaHRfYXJyb3cge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5pbWdfY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmltZ19jb250YWluZXIgZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgbWFyZ2luOiAxNXB4O1xcbn1cXG5cXG4uaW1nX2NvbnRhaW5lciBkaXYgaW1nIHtcXG4gICAgd2lkdGg6IDc1MHB4O1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjMkMzMzMzO1xcbn1cXG5cXG4uaW1nX2NvbnRhaW5lciBkaXYuaGlkZSxcXG4uaW1nX2NvbnRhaW5lciBkaXYuaGlkZSA+IGltZ3tcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgd2lkdGg6IDBweDtcXG4gICAgaGVpZ2h0OiAwcHg7XFxufVxcblxcbi5pbWdfY29udGFpbmVyIGRpdi5zaG93IHtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjc1cyBsaW5lYXI7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogMjUwbXM7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgbGVmdEFycm93IGZyb20gJy9ob21lL2pvc2gvRG9jdW1lbnRzL3JlcG9zL1RPUF9JbWFnZVNsaWRlci9zcmMvaW1hZ2VzL2Fycm93X2JhY2tfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6NDguc3ZnJztcbmltcG9ydCByaWdodEFycm93IGZyb20gJy9ob21lL2pvc2gvRG9jdW1lbnRzL3JlcG9zL1RPUF9JbWFnZVNsaWRlci9zcmMvaW1hZ2VzL2Fycm93X2ZvcndhcmRfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6NDguc3ZnJztcbmltcG9ydCBidWJibGVGdWxsIGZyb20gJy9ob21lL2pvc2gvRG9jdW1lbnRzL3JlcG9zL1RPUF9JbWFnZVNsaWRlci9zcmMvaW1hZ2VzL2ZpYmVyX21hbnVhbF9yZWNvcmRfRklMTDFfd2dodDQwMF9HUkFEMF9vcHN6NDguc3ZnJztcbmltcG9ydCBidWJibGVFbXB0eSBmcm9tICcvaG9tZS9qb3NoL0RvY3VtZW50cy9yZXBvcy9UT1BfSW1hZ2VTbGlkZXIvc3JjL2ltYWdlcy9maWJlcl9tYW51YWxfcmVjb3JkX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQ4LnN2Zyc7XG5pbXBvcnQgZ2l0TG9nbyBmcm9tICcvaG9tZS9qb3NoL0RvY3VtZW50cy9yZXBvcy9UT1BfSW1hZ2VTbGlkZXIvc3JjL2ltYWdlcy9HaXRIdWItTWFyay0xMjBweC1wbHVzLnBuZyc7XG5pbXBvcnQgZmlyc3RJbWcgZnJvbSAnLi4vc3JjL2ltYWdlcy9pc21hZWwtcm9kcmlndWV6LVhqTXJVc1F0WHhjLXVuc3BsYXNoLmpwZydcbmltcG9ydCBzZWNvbmRJbWcgZnJvbSAnLi4vc3JjL2ltYWdlcy9qb2Itc2F2ZWxzYmVyZy1FMlk0YWp1MG44VS11bnNwbGFzaC5qcGcnXG5pbXBvcnQgdGhpcmRJbWcgZnJvbSAnLi4vc3JjL2ltYWdlcy9qb2Itc2F2ZWxzYmVyZy1FdnNWUmZVOV9wNC11bnNwbGFzaC5qcGcnXG5pbXBvcnQgZm91cnRoSW1nIGZyb20gJy4uL3NyYy9pbWFnZXMvbWFyZWstcGl3bmlja2ktcWVlOTFjLW81NnMtdW5zcGxhc2guanBnJ1xuaW1wb3J0IGZpZnRoSW1nIGZyb20gJy4uL3NyYy9pbWFnZXMvemV0b25nLWxpLTJYcFZrTHBwSF9vLXVuc3BsYXNoLmpwZydcblxuY29uc3QgaW1hZ2VBc3NldHMgPSAoZnVuY3Rpb24oKSB7XG4gICAgbGV0IGxlZnRBcnJvd0ltZyA9IGxlZnRBcnJvdztcbiAgICBsZXQgcmlnaHRBcnJvd0ltZyA9IHJpZ2h0QXJyb3c7XG4gICAgbGV0IGJ1YmJsZUZ1bGxJbWcgPSBidWJibGVGdWxsO1xuICAgIGxldCBidWJibGVFbXB0eUltZyA9IGJ1YmJsZUVtcHR5O1xuICAgIGxldCBnaXRJbWcgPSBnaXRMb2dvO1xuXG4gICAgbGV0IGltZ09iaiA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaW1nOiBmaXJzdEltZyxcbiAgICAgICAgICAgIG93bmVyOiBcIklzbWFlbCBSb2RyaWd1ZXpcIixcbiAgICAgICAgICAgIGxpbms6IFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGlzbWFlbHJndWV6P3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiLFxuICAgICAgICAgICAgdW5zcGxhc2g6IFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL1hqTXJVc1F0WHhjP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGltZzogc2Vjb25kSW1nLFxuICAgICAgICAgICAgb3duZXI6IFwiSm9iIFNhdmVsc2JlcmdcIixcbiAgICAgICAgICAgIGxpbms6IFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGpvYnNhdmVsc2Jlcmc/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCIsXG4gICAgICAgICAgICB1bnNwbGFzaDogXCJodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvRTJZNGFqdTBuOFU/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaW1nOiB0aGlyZEltZyxcbiAgICAgICAgICAgIG93bmVyOiBcIkpvYiBTYXZlbHNiZXJnXCIsXG4gICAgICAgICAgICBsaW5rOiBcImh0dHBzOi8vdW5zcGxhc2guY29tL0Bqb2JzYXZlbHNiZXJnP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiLFxuICAgICAgICAgICAgdW5zcGxhc2g6IFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL0V2c1ZSZlU5X3A0P3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGltZzogZm91cnRoSW1nLFxuICAgICAgICAgICAgb3duZXI6IFwiTWFyZWsgUGl3bmlja2lcIixcbiAgICAgICAgICAgIGxpbms6IFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQG1hcmVrcGl3bmlja2k/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCIsXG4gICAgICAgICAgICB1bnNwbGFzaDogXCJodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvcWVlOTFjLW81NnM/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaW1nOiBmaWZ0aEltZyxcbiAgICAgICAgICAgIG93bmVyOiBcIlpldG9uZyBMaVwiLFxuICAgICAgICAgICAgbGluazogXCJodHRwczovL3Vuc3BsYXNoLmNvbS9AemV0b25nP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiLFxuICAgICAgICAgICAgdW5zcGxhc2g6IFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zLzJYcFZrTHBwSF9vP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiXG4gICAgICAgIH0sXG4gICAgXVxuXG5cbiAgICByZXR1cm4geyBsZWZ0QXJyb3dJbWcsIHJpZ2h0QXJyb3dJbWcsIGJ1YmJsZUVtcHR5SW1nLCBidWJibGVGdWxsSW1nLCBnaXRJbWcsIGltZ09iaiB9O1xufSkoKTtcblxuZXhwb3J0IHsgaW1hZ2VBc3NldHMgfTsiLCJcbmNvbnN0IGRvbUVsZUdlbiA9IChmdW5jdGlvbigpIHtcblxuICAgIGNvbnN0IG1ha2VFbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGFyZ0FyciA9IFsuLi5hcmd1bWVudHNdO1xuXG4gICAgICAgIGlmICh0eXBlb2YoYXJnQXJyWzBdKSAhPSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHZhbGlkIEhUTUwgZWxlbWVudCBpbiBzdHJpbmcgZm9ybWF0LiBFeGFtcGxlOiAnZGl2JyBcIik7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mKGFyZ0FyclsxXSkgIT0gXCJzdHJpbmdcIiAmJiBhcmdBcnIubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoXCJJbnZhbGlkIEFyZ3VtZW50IFR5cGUuIFRoZSBzZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZ1wiKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YoYXJnQXJyWzJdKSAhPSBcIm9iamVjdFwiICYmIGFyZ0Fyci5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgIHJldHVybiBhbGVydChcIkludmFsaWQgQXJnLiBUaGlyZCBhcmd1bWVudCBhY2NlcHRzIGFuIGFycmF5IG9yIGEgbmVzdGVkIGFycmF5IG9mIGFycmF5cy5cIik7XG4gICAgICAgIH0gZWxzZSBpZiAoYXJnQXJyLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgICAgIHJldHVybiBhbGVydChcIlRvbyBtYW55IGFyZ3VtZW50cy5cIilcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBuZXdFbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke2FyZ0FyclswXX1gKTtcbiAgICAgICAgbmV3RWxlLnRleHRDb250ZW50ID0gYXJnQXJyWzFdO1xuICAgICAgICBcbiAgICAgICAgaWYgKGFyZ0Fyci5sZW5ndGggPT09IDMgJiYgdHlwZW9mKGFyZ0FyclsyXVswXSkgPT09IFwib2JqZWN0XCIpe1xuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBhcmdBcnJbMl0peyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgdGVtcEFyciA9IFsuLi5hcmdBcnJbMl1baV1dO1xuXG4gICAgICAgICAgICAgICAgbmV3RWxlLnNldEF0dHJpYnV0ZSguLi50ZW1wQXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YoYXJnQXJyWzJdKSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgbmV3RWxlLnNldEF0dHJpYnV0ZSguLi5hcmdBcnJbMl0pO1xuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIHJldHVybiBuZXdFbGU7ICAgXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgbWFrZUVsZSB9O1xufSkoKTtcblxubGV0IGdldFN0YXJ0ID0gKGVsZSkgPT4ge1xuICAgIGxldCB0YXJFbGUgPSBlbGU7XG4gICAgbGV0IHN0YXJ0aW5nUG9pbnQgPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXJFbGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZiAodGFyRWxlLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC52YWx1ZSAhPT0gXCJoaWRlXCIpe1xuICAgICAgICAgICAgc3RhcnRpbmdQb2ludCA9IGk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhcnRpbmdQb2ludDtcbn1cblxubGV0IG5leHRJbWcgPSAoKSA9PiB7XG4gICAgbGV0IGltZ0NudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW1nX2NvbnRhaW5lclwiKTtcbiAgICBsZXQgY3VySW1nTnVtID0gZ2V0U3RhcnQoaW1nQ250KTtcblxuICAgIGltZ0NudC5jaGlsZHJlbltjdXJJbWdOdW1dLmNsYXNzTGlzdCA9ICdoaWRlJztcblxuICAgIGlmIChjdXJJbWdOdW0gKyAxID49IGltZ0NudC5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgY3VySW1nTnVtID0gMDtcbiAgICAgICAgaW1nQ250LmNoaWxkcmVuW2N1ckltZ051bV0uY2xhc3NMaXN0ID0gXCJzaG93XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW1nQ250LmNoaWxkcmVuW2N1ckltZ051bSArIDFdLmNsYXNzTGlzdCA9IFwic2hvd1wiO1xuICAgIH1cblxuICAgIHJldHVybjtcbn1cblxubGV0IHByZXZJbWcgPSAoKSA9PiB7XG4gICAgbGV0IGltZ0NudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW1nX2NvbnRhaW5lclwiKTtcbiAgICBjb25zb2xlLmxvZyhpbWdDbnQpO1xuICAgIGxldCBjdXJJbWdOdW0gPSBnZXRTdGFydChpbWdDbnQpO1xuICAgIGNvbnNvbGUubG9nKGN1ckltZ051bSk7XG5cbiAgICBpbWdDbnQuY2hpbGRyZW5bY3VySW1nTnVtXS5jbGFzc0xpc3QgPSAnaGlkZSc7XG5cbiAgICBpZiAoY3VySW1nTnVtIC0gMSA9PT0gLTEpIHtcbiAgICAgICAgY3VySW1nTnVtID0gNDtcbiAgICAgICAgaW1nQ250LmNoaWxkcmVuW2N1ckltZ051bV0uY2xhc3NMaXN0ID0gXCJzaG93XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW1nQ250LmNoaWxkcmVuW2N1ckltZ051bSAtIDFdLmNsYXNzTGlzdCA9IFwic2hvd1wiO1xuICAgIH1cblxuICAgIHJldHVybjtcbn1cblxuZXhwb3J0IHsgZG9tRWxlR2VuLCBuZXh0SW1nLCBwcmV2SW1nIH0iLCJpbXBvcnQgY3NzIGZyb20gXCIuL3N0eWxlLmNzc1wiXG5pbXBvcnQgeyBpbWFnZUFzc2V0cyB9IGZyb20gXCIuL2Fzc2V0cy5qc1wiXG5pbXBvcnQgeyBkb21FbGVHZW4sIG5leHRJbWcsIHByZXZJbWcgfSBmcm9tIFwiLi9mdW5jcy5qc1wiO1xuXG5sZXQgcGFnZVJlbmRlciA9ICgpID0+IHtcbiAgICBsZXQgYm9keUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbiAgICBuYXZSZW5kZXIoYm9keUVsKTtcbiAgICBzbGlkZXJFbGUoYm9keUVsKTtcblxuICAgIHJldHVybiBib2R5RWw7XG59XG5cbmxldCBuYXZSZW5kZXIgPSAoZWxlKSA9PiB7XG4gICAgbGV0IG5hdkVsID0gZG9tRWxlR2VuLm1ha2VFbGUoXCJuYXZcIiwgXCJcIiwgW1wiY2xhc3NcIiwgXCJtYWluX25hdlwiXSk7XG4gICAgZWxlLmFwcGVuZENoaWxkKG5hdkVsKTtcblxuICAgIGxldCBwVGl0bGVFbGUgPSBkb21FbGVHZW4ubWFrZUVsZShcImRpdlwiLCBcIlwiLCBbXCJjbGFzc1wiLCBcInBhZ2VfdGl0bGVcIl0pO1xuICAgIG5hdkVsLmFwcGVuZENoaWxkKHBUaXRsZUVsZSk7XG5cbiAgICBsZXQgcEhvbmVFbGUgPSBkb21FbGVHZW4ubWFrZUVsZShcImgxXCIsIFwiSW1hZ2UgU2xpZGVyIC0gVGhlIE9kaW4gUHJvamVjdFwiLCBbXCJjbGFzc1wiLCBcInRpdGxlX3RleHRcIl0pO1xuICAgIHBUaXRsZUVsZS5hcHBlbmRDaGlsZChwSG9uZUVsZSk7XG5cbiAgICBsZXQgZ2l0SW1nV3JhcCA9IGRvbUVsZUdlbi5tYWtlRWxlKFwiZGl2XCIsIFwiXCIsIFtcImNsYXNzXCIsIFwiZ2l0X2ltZ193cmFwXCJdKTtcbiAgICBuYXZFbC5hcHBlbmRDaGlsZChnaXRJbWdXcmFwKTtcblxuICAgIGxldCBnaXRBbmNBdHIgPSBbW1wiaHJlZlwiLCBcImh0dHBzOi8vZ2l0aHViLmNvbS9Kb3NoRFQ5MDBcIl0sIFtcInRhcmdldFwiLCBcIl9ibGFua1wiXV07XG4gICAgbGV0IGdpdEltZ0VsZSA9IGRvbUVsZUdlbi5tYWtlRWxlKFwiYVwiLCBcIlwiLCBnaXRBbmNBdHIpO1xuICAgIGdpdEltZ1dyYXAuYXBwZW5kQ2hpbGQoZ2l0SW1nRWxlKTtcblxuICAgIGxldCBnaXRMb2dvQXRyID0gW1tcInNyY1wiLCBpbWFnZUFzc2V0cy5naXRJbWddLCBbXCJhbHRcIiwgXCJnaXRodWIgbG9nb1wiXSwgW1wiY2xhc3NcIiwgXCJnaXRfaW1nXCJdXVxuICAgIGxldCBnaXRMb2dvRWxlID0gZG9tRWxlR2VuLm1ha2VFbGUoXCJpbWdcIiwgXCJcIiwgZ2l0TG9nb0F0cik7XG4gICAgbGV0IGdpdFRleHRFbGUgPSBkb21FbGVHZW4ubWFrZUVsZShcInBcIiwgXCJDcmVhdGVkIGJ5IC0gRGF2aWQgVC5cIilcbiAgICBnaXRJbWdFbGUuYXBwZW5kQ2hpbGQoZ2l0VGV4dEVsZSk7XG4gICAgZ2l0SW1nRWxlLmFwcGVuZENoaWxkKGdpdExvZ29FbGUpO1xuXG4gICAgcmV0dXJuIGVsZTtcbn1cblxubGV0IHNsaWRlckVsZSA9IChlbGUpID0+IHtcbiAgICBsZXQgc2xpZGVXcmFwID0gZG9tRWxlR2VuLm1ha2VFbGUoXCJkaXZcIiwgXCJcIiwgW1wiY2xhc3NcIiwgXCJzbGlkZXJfd3JhcFwiXSk7XG4gICAgZWxlLmFwcGVuZENoaWxkKHNsaWRlV3JhcCk7XG5cbiAgICBsZXQgbEFycm93ID0gZG9tRWxlR2VuLm1ha2VFbGUoXCJkaXZcIiwgXCJcIiwgW1wiY2xhc3NcIiwgXCJsZWZ0X2Fycm93XCJdKTtcbiAgICBzbGlkZVdyYXAuYXBwZW5kQ2hpbGQobEFycm93KTtcblxuICAgIGxldCBsQXJyb3dBcnIgPSBbW1wic3JjXCIsIGltYWdlQXNzZXRzLmxlZnRBcnJvd0ltZ10sIFtcImFsdFwiLCBcImxlZnQgYXJyb3cgaWNvblwiXV07XG4gICAgbGV0IGxBcnJJbWcgPSBkb21FbGVHZW4ubWFrZUVsZShcImltZ1wiLCBcIlwiLCBsQXJyb3dBcnIpO1xuICAgIGxBcnJvdy5hcHBlbmRDaGlsZChsQXJySW1nKTtcblxuICAgIFxuICAgIGxldCBpbWdDbnRFbGUgPSBkb21FbGVHZW4ubWFrZUVsZShcImRpdlwiLCBcIlwiLCBbXCJjbGFzc1wiLCBcImltZ19jb250YWluZXJcIl0pO1xuICAgIHNsaWRlV3JhcC5hcHBlbmRDaGlsZChpbWdDbnRFbGUpO1xuICAgIFxuICAgIGxldCBpbWFnZU9iakFyciA9IFsuLi5pbWFnZUFzc2V0cy5pbWdPYmpdO1xuICAgIGdlbkltZyhpbWFnZU9iakFyciwgaW1nQ250RWxlKTtcbiAgICBcbiAgICBsZXQgckFycm93ID0gZG9tRWxlR2VuLm1ha2VFbGUoXCJkaXZcIiwgXCJcIiwgW1wiY2xhc3NcIiwgXCJyaWdodF9hcnJvd1wiXSk7XG4gICAgc2xpZGVXcmFwLmFwcGVuZENoaWxkKHJBcnJvdyk7XG4gICAgXG4gICAgbGV0IHJBcnJvd0FyciA9IFtbXCJzcmNcIiwgaW1hZ2VBc3NldHMucmlnaHRBcnJvd0ltZ10sIFtcImFsdFwiLCBcInJpZ2h0IGFycm93IGljb25cIl1dO1xuICAgIGxldCByQXJySW1nID0gZG9tRWxlR2VuLm1ha2VFbGUoXCJpbWdcIiwgXCJcIiwgckFycm93QXJyKTtcbiAgICByQXJyb3cuYXBwZW5kQ2hpbGQockFyckltZyk7XG4gICAgXG4gICAgbEFyckltZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJldkltZyk7XG4gICAgckFyckltZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV4dEltZyk7XG5cbiAgICAvLyBzZXRJbnRlcnZhbChuZXh0SW1nLCA1MDAwKVxuXG4gICAgZ2VuQnViKHNsaWRlV3JhcCk7XG5cbiAgICByZXR1cm4gc2xpZGVXcmFwO1xufVxuXG5sZXQgZ2VuSW1nID0gKGFyciwgZWxlKSA9PiB7XG4gICAgZm9yIChsZXQgaSBpbiBhcnIpe1xuICAgICAgICBsZXQgZGl2QXJyID0gW107XG5cbiAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgZGl2QXJyID0gW1tcImNsYXNzXCIsIGBzaG93YF1dO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGl2QXJyID0gW1tcImNsYXNzXCIsIGBoaWRlYF1dO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5ld0RpdiA9IGRvbUVsZUdlbi5tYWtlRWxlKFwiZGl2XCIsIFwiXCIsIGRpdkFycik7XG5cbiAgICAgICAgbGV0IGRpdkltZ0FyciA9IFtbXCJzcmNcIiwgYXJyW2ldLmltZ11dO1xuICAgICAgICBsZXQgZGl2SW1nID0gZG9tRWxlR2VuLm1ha2VFbGUoXCJpbWdcIiwgXCJcIiwgZGl2SW1nQXJyKTtcbiAgICAgICAgbmV3RGl2LmFwcGVuZENoaWxkKGRpdkltZyk7XG5cbiAgICAgICAgbGV0IHBBbmNBcnJPbmUgPSBbW1widGFyZ2V0XCIsIFwiX2JsYW5rXCJdLCBbXCJocmVmXCIsIGFycltpXS5saW5rXV1cbiAgICAgICAgbGV0IHBBbmNBcnJUd28gPSBbW1widGFyZ2V0XCIsIFwiX2JsYW5rXCJdLCBbXCJocmVmXCIsIGFycltpXS51bnNwbGFzaF1dXG4gICAgICAgIGxldCBwQW5jT25lID0gZG9tRWxlR2VuLm1ha2VFbGUoXCJhXCIsIGFycltpXS5vd25lciwgcEFuY0Fyck9uZSlcbiAgICAgICAgbGV0IHBBbmNUd28gPSBkb21FbGVHZW4ubWFrZUVsZShcImFcIiwgXCJVbnNwbGFzaFwiLCBwQW5jQXJyVHdvKVxuICAgICAgICBsZXQgcEVsZSA9IGRvbUVsZUdlbi5tYWtlRWxlKFwicFwiLCBcIlBob3RvIEJ5IFwiKTtcbiAgICAgICAgcEVsZS5hcHBlbmRDaGlsZChwQW5jT25lKTtcbiAgICAgICAgcEVsZS5hcHBlbmQoXCIgb24gXCIpO1xuICAgICAgICBwRWxlLmFwcGVuZENoaWxkKHBBbmNUd28pO1xuICAgICAgICBuZXdEaXYuYXBwZW5kQ2hpbGQocEVsZSlcblxuICAgICAgICBlbGUuYXBwZW5kQ2hpbGQobmV3RGl2KTtcbiAgICB9XG5cbiAgICByZXR1cm47XG59XG5cbmxldCBnZW5CdWIgPSAoZWxlKSA9PiB7XG4gICAgbGV0IGJ1YkVsZSA9IGRvbUVsZUdlbi5tYWtlRWxlKFwiZGl2XCIsIFwiXCIsIFtcImNsYXNzXCIsIFwiaW1nX2J1YmJsZXNcIl0pO1xuICAgIGVsZS5hcHBlbmRDaGlsZChidWJFbGUpO1xuXG4gICAgbGV0IGltZ0NvbnRpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbWdfY29udGFpbmVyXCIpXG4gICAgbGV0IGltZ0NvdW50ID0gaW1nQ29udGluZXIuY2hpbGROb2Rlcy5sZW5ndGg7XG4gICAgY29uc29sZS5sb2coXCJUaGUgaW1hZ2UgY291bnQgaXNcIiwgaW1nQ291bnQpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWdDb3VudDsgaSsrKXtcbiAgICAgICAgbGV0IGltZ1NyYyA9IGltYWdlQXNzZXRzLmJ1YmJsZUZ1bGxJbWc7XG4gICAgICAgIFxuICAgICAgICBpZiAoaSA+IDApe1xuICAgICAgICAgICAgaW1nU3JjID0gaW1hZ2VBc3NldHMuYnViYmxlRW1wdHlJbWc7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCBpbWdFbGUgPSBkb21FbGVHZW4ubWFrZUVsZShcImltZ1wiLCBcIlwiLCBbW1wic3JjXCIsIGltZ1NyY10sIFtcImFsdFwiLCBcImJ1YmJsZSBmb3Igc3dpdGNoaW5nIGltYWdlc1wiXV0pXG4gICAgICAgIGJ1YkVsZS5hcHBlbmRDaGlsZChpbWdFbGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1YkVsZTtcbn1cblxuKCgpID0+IHtcbiAgICBwYWdlUmVuZGVyKCk7XG59KSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==