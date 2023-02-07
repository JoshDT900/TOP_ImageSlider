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

    setInterval(_funcs_js__WEBPACK_IMPORTED_MODULE_2__.nextImg, 5000)

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBb0IsY0FBYztBQUNsQyxxQkFBcUIsaUVBQXlCO0FBQzlDO0FBQ0E7QUFDQSxxQkFBcUIsa0VBQTBCO0FBQy9DO0FBQ0E7QUFDQSxxQkFBcUIsd0RBQWlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcF9pbWFnZXNsaWRlci8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9wX2ltYWdlc2xpZGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b3BfaW1hZ2VzbGlkZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvcF9pbWFnZXNsaWRlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvcF9pbWFnZXNsaWRlci8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b3BfaW1hZ2VzbGlkZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wX2ltYWdlc2xpZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b3BfaW1hZ2VzbGlkZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9wX2ltYWdlc2xpZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcF9pbWFnZXNsaWRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvcF9pbWFnZXNsaWRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvcF9pbWFnZXNsaWRlci8uL3NyYy9hc3NldHMuanMiLCJ3ZWJwYWNrOi8vdG9wX2ltYWdlc2xpZGVyLy4vc3JjL2Z1bmNzLmpzIiwid2VicGFjazovL3RvcF9pbWFnZXNsaWRlci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL2hvbWUvam9zaC9Eb2N1bWVudHMvcmVwb3MvVE9QX0ltYWdlU2xpZGVyL3NyYy9mb250cy9TaW5raW5TYW5zLTYwMFNlbWlCb2xkLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi9ob21lL2pvc2gvRG9jdW1lbnRzL3JlcG9zL1RPUF9JbWFnZVNsaWRlci9zcmMvZm9udHMvU2lua2luU2Fucy00MDBSZWd1bGFyLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTaW5raW5TYW5zQm9sZFxcXCI7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcIm9wZW50eXBlXFxcIik7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIlNpbmtpblNhbnNcXFwiO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KFxcXCJvcGVudHlwZVxcXCIpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4qIHtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBmb250LWZhbWlseTogJ1NpbmtpblNhbnMnLCAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBNUM5Q0E7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5tYWluX25hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk1QjY0O1xcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgIzJDMzMzMztcXG59XFxuXFxuLnRpdGxlX3RleHQge1xcbiAgICBmb250LWZhbWlseTogICdTaW5raW5TYW5zQm9sZCcsICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBjb2xvcjogI0U3RjZGMjtcXG59XFxuXFxuLnBhZ2VfdGl0bGUge1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4uZ2l0X2ltZ193cmFwIGEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi5naXRfaW1nX3dyYXAgYSA+IHAge1xcbiAgICBmb250LWZhbWlseTogJ1NpbmtpblNhbnMnLCAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgY29sb3I6ICNFN0Y2RjI7XFxufVxcblxcbi5naXRfaW1nIHtcXG4gICAgd2lkdGg6IDQ1cHg7XFxufVxcblxcbi5zbGlkZXJfd3JhcCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogOWZyIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDU1MHB4O1xcbiAgICBtYXJnaW4tdG9wOiA5MHB4O1xcbn1cXG5cXG4uaW1nX2J1YmJsZXMge1xcbiAgICBncmlkLWNvbHVtbjogMS80O1xcbiAgICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4uaW1nX2J1YmJsZXMgaW1nIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmxlZnRfYXJyb3cge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4ucmlnaHRfYXJyb3cge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5pbWdfY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmltZ19jb250YWluZXIgZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgbWFyZ2luOiAxNXB4O1xcbn1cXG5cXG4uaW1nX2NvbnRhaW5lciBkaXYgaW1nIHtcXG4gICAgd2lkdGg6IDc1MHB4O1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjMkMzMzMzO1xcbn1cXG5cXG4uaW1nX2NvbnRhaW5lciBkaXYuaGlkZSxcXG4uaW1nX2NvbnRhaW5lciBkaXYuaGlkZSA+IGltZ3tcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgd2lkdGg6IDBweDtcXG4gICAgaGVpZ2h0OiAwcHg7XFxufVxcblxcbi5pbWdfY29udGFpbmVyIGRpdi5zaG93IHtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjc1cyBsaW5lYXI7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogMjUwbXM7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw2QkFBNkI7SUFDN0IsK0RBQThHO0lBQzlHLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwrREFBNkc7SUFDN0csZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsNERBQTREO0FBQ2hFOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxpRUFBaUU7SUFDakUsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDREQUE0RDtJQUM1RCxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGdDQUFnQztJQUNoQyxzQkFBc0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2lua2luU2Fuc0JvbGRcXFwiO1xcbiAgICBzcmM6IHVybChcXFwiL2hvbWUvam9zaC9Eb2N1bWVudHMvcmVwb3MvVE9QX0ltYWdlU2xpZGVyL3NyYy9mb250cy9TaW5raW5TYW5zLTYwMFNlbWlCb2xkLm90ZlxcXCIpIGZvcm1hdChcXFwib3BlbnR5cGVcXFwiKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2lua2luU2Fuc1xcXCI7XFxuICAgIHNyYzogdXJsKFxcXCIvaG9tZS9qb3NoL0RvY3VtZW50cy9yZXBvcy9UT1BfSW1hZ2VTbGlkZXIvc3JjL2ZvbnRzL1NpbmtpblNhbnMtNDAwUmVndWxhci5vdGZcXFwiKSBmb3JtYXQoXFxcIm9wZW50eXBlXFxcIik7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbioge1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2lua2luU2FucycsICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0E1QzlDQTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1haW5fbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTVCNjQ7XFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjMkMzMzMzO1xcbn1cXG5cXG4udGl0bGVfdGV4dCB7XFxuICAgIGZvbnQtZmFtaWx5OiAgJ1NpbmtpblNhbnNCb2xkJywgJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGNvbG9yOiAjRTdGNkYyO1xcbn1cXG5cXG4ucGFnZV90aXRsZSB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi5naXRfaW1nX3dyYXAgYSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuLmdpdF9pbWdfd3JhcCBhID4gcCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2lua2luU2FucycsICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBjb2xvcjogI0U3RjZGMjtcXG59XFxuXFxuLmdpdF9pbWcge1xcbiAgICB3aWR0aDogNDVweDtcXG59XFxuXFxuLnNsaWRlcl93cmFwIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA5ZnIgMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogNTUwcHg7XFxuICAgIG1hcmdpbi10b3A6IDkwcHg7XFxufVxcblxcbi5pbWdfYnViYmxlcyB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi5pbWdfYnViYmxlcyBpbWcge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ubGVmdF9hcnJvdyB7XFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi5yaWdodF9hcnJvdyB7XFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLmltZ19jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uaW1nX2NvbnRhaW5lciBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBtYXJnaW46IDE1cHg7XFxufVxcblxcbi5pbWdfY29udGFpbmVyIGRpdiBpbWcge1xcbiAgICB3aWR0aDogNzUwcHg7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkICMyQzMzMzM7XFxufVxcblxcbi5pbWdfY29udGFpbmVyIGRpdi5oaWRlLFxcbi5pbWdfY29udGFpbmVyIGRpdi5oaWRlID4gaW1ne1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB3aWR0aDogMHB4O1xcbiAgICBoZWlnaHQ6IDBweDtcXG59XFxuXFxuLmltZ19jb250YWluZXIgZGl2LnNob3cge1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNzVzIGxpbmVhcjtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAyNTBtcztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBsZWZ0QXJyb3cgZnJvbSAnL2hvbWUvam9zaC9Eb2N1bWVudHMvcmVwb3MvVE9QX0ltYWdlU2xpZGVyL3NyYy9pbWFnZXMvYXJyb3dfYmFja19GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3o0OC5zdmcnO1xuaW1wb3J0IHJpZ2h0QXJyb3cgZnJvbSAnL2hvbWUvam9zaC9Eb2N1bWVudHMvcmVwb3MvVE9QX0ltYWdlU2xpZGVyL3NyYy9pbWFnZXMvYXJyb3dfZm9yd2FyZF9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3o0OC5zdmcnO1xuaW1wb3J0IGJ1YmJsZUZ1bGwgZnJvbSAnL2hvbWUvam9zaC9Eb2N1bWVudHMvcmVwb3MvVE9QX0ltYWdlU2xpZGVyL3NyYy9pbWFnZXMvZmliZXJfbWFudWFsX3JlY29yZF9GSUxMMV93Z2h0NDAwX0dSQUQwX29wc3o0OC5zdmcnO1xuaW1wb3J0IGJ1YmJsZUVtcHR5IGZyb20gJy9ob21lL2pvc2gvRG9jdW1lbnRzL3JlcG9zL1RPUF9JbWFnZVNsaWRlci9zcmMvaW1hZ2VzL2ZpYmVyX21hbnVhbF9yZWNvcmRfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6NDguc3ZnJztcbmltcG9ydCBnaXRMb2dvIGZyb20gJy9ob21lL2pvc2gvRG9jdW1lbnRzL3JlcG9zL1RPUF9JbWFnZVNsaWRlci9zcmMvaW1hZ2VzL0dpdEh1Yi1NYXJrLTEyMHB4LXBsdXMucG5nJztcbmltcG9ydCBmaXJzdEltZyBmcm9tICcuLi9zcmMvaW1hZ2VzL2lzbWFlbC1yb2RyaWd1ZXotWGpNclVzUXRYeGMtdW5zcGxhc2guanBnJ1xuaW1wb3J0IHNlY29uZEltZyBmcm9tICcuLi9zcmMvaW1hZ2VzL2pvYi1zYXZlbHNiZXJnLUUyWTRhanUwbjhVLXVuc3BsYXNoLmpwZydcbmltcG9ydCB0aGlyZEltZyBmcm9tICcuLi9zcmMvaW1hZ2VzL2pvYi1zYXZlbHNiZXJnLUV2c1ZSZlU5X3A0LXVuc3BsYXNoLmpwZydcbmltcG9ydCBmb3VydGhJbWcgZnJvbSAnLi4vc3JjL2ltYWdlcy9tYXJlay1waXduaWNraS1xZWU5MWMtbzU2cy11bnNwbGFzaC5qcGcnXG5pbXBvcnQgZmlmdGhJbWcgZnJvbSAnLi4vc3JjL2ltYWdlcy96ZXRvbmctbGktMlhwVmtMcHBIX28tdW5zcGxhc2guanBnJ1xuXG5jb25zdCBpbWFnZUFzc2V0cyA9IChmdW5jdGlvbigpIHtcbiAgICBsZXQgbGVmdEFycm93SW1nID0gbGVmdEFycm93O1xuICAgIGxldCByaWdodEFycm93SW1nID0gcmlnaHRBcnJvdztcbiAgICBsZXQgYnViYmxlRnVsbEltZyA9IGJ1YmJsZUZ1bGw7XG4gICAgbGV0IGJ1YmJsZUVtcHR5SW1nID0gYnViYmxlRW1wdHk7XG4gICAgbGV0IGdpdEltZyA9IGdpdExvZ287XG5cbiAgICBsZXQgaW1nT2JqID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBpbWc6IGZpcnN0SW1nLFxuICAgICAgICAgICAgb3duZXI6IFwiSXNtYWVsIFJvZHJpZ3VlelwiLFxuICAgICAgICAgICAgbGluazogXCJodHRwczovL3Vuc3BsYXNoLmNvbS9AaXNtYWVscmd1ZXo/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCIsXG4gICAgICAgICAgICB1bnNwbGFzaDogXCJodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvWGpNclVzUXRYeGM/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaW1nOiBzZWNvbmRJbWcsXG4gICAgICAgICAgICBvd25lcjogXCJKb2IgU2F2ZWxzYmVyZ1wiLFxuICAgICAgICAgICAgbGluazogXCJodHRwczovL3Vuc3BsYXNoLmNvbS9Aam9ic2F2ZWxzYmVyZz91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIixcbiAgICAgICAgICAgIHVuc3BsYXNoOiBcImh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9FMlk0YWp1MG44VT91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpbWc6IHRoaXJkSW1nLFxuICAgICAgICAgICAgb3duZXI6IFwiSm9iIFNhdmVsc2JlcmdcIixcbiAgICAgICAgICAgIGxpbms6IFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGpvYnNhdmVsc2Jlcmc/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCIsXG4gICAgICAgICAgICB1bnNwbGFzaDogXCJodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvRXZzVlJmVTlfcDQ/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaW1nOiBmb3VydGhJbWcsXG4gICAgICAgICAgICBvd25lcjogXCJNYXJlayBQaXduaWNraVwiLFxuICAgICAgICAgICAgbGluazogXCJodHRwczovL3Vuc3BsYXNoLmNvbS9AbWFyZWtwaXduaWNraT91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIixcbiAgICAgICAgICAgIHVuc3BsYXNoOiBcImh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9xZWU5MWMtbzU2cz91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpbWc6IGZpZnRoSW1nLFxuICAgICAgICAgICAgb3duZXI6IFwiWmV0b25nIExpXCIsXG4gICAgICAgICAgICBsaW5rOiBcImh0dHBzOi8vdW5zcGxhc2guY29tL0B6ZXRvbmc/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCIsXG4gICAgICAgICAgICB1bnNwbGFzaDogXCJodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvMlhwVmtMcHBIX28/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCJcbiAgICAgICAgfSxcbiAgICBdXG5cblxuICAgIHJldHVybiB7IGxlZnRBcnJvd0ltZywgcmlnaHRBcnJvd0ltZywgYnViYmxlRW1wdHlJbWcsIGJ1YmJsZUZ1bGxJbWcsIGdpdEltZywgaW1nT2JqIH07XG59KSgpO1xuXG5leHBvcnQgeyBpbWFnZUFzc2V0cyB9OyIsIlxuY29uc3QgZG9tRWxlR2VuID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgbWFrZUVsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgYXJnQXJyID0gWy4uLmFyZ3VtZW50c107XG5cbiAgICAgICAgaWYgKHR5cGVvZihhcmdBcnJbMF0pICE9ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoXCJGaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgdmFsaWQgSFRNTCBlbGVtZW50IGluIHN0cmluZyBmb3JtYXQuIEV4YW1wbGU6ICdkaXYnIFwiKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YoYXJnQXJyWzFdKSAhPSBcInN0cmluZ1wiICYmIGFyZ0Fyci5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgIHJldHVybiBhbGVydChcIkludmFsaWQgQXJndW1lbnQgVHlwZS4gVGhlIHNlY29uZCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZihhcmdBcnJbMl0pICE9IFwib2JqZWN0XCIgJiYgYXJnQXJyLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiSW52YWxpZCBBcmcuIFRoaXJkIGFyZ3VtZW50IGFjY2VwdHMgYW4gYXJyYXkgb3IgYSBuZXN0ZWQgYXJyYXkgb2YgYXJyYXlzLlwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChhcmdBcnIubGVuZ3RoID4gMykge1xuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiVG9vIG1hbnkgYXJndW1lbnRzLlwiKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5ld0VsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7YXJnQXJyWzBdfWApO1xuICAgICAgICBuZXdFbGUudGV4dENvbnRlbnQgPSBhcmdBcnJbMV07XG4gICAgICAgIFxuICAgICAgICBpZiAoYXJnQXJyLmxlbmd0aCA9PT0gMyAmJiB0eXBlb2YoYXJnQXJyWzJdWzBdKSA9PT0gXCJvYmplY3RcIil7XG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIGFyZ0FyclsyXSl7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCB0ZW1wQXJyID0gWy4uLmFyZ0FyclsyXVtpXV07XG5cbiAgICAgICAgICAgICAgICBuZXdFbGUuc2V0QXR0cmlidXRlKC4uLnRlbXBBcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZihhcmdBcnJbMl0pID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBuZXdFbGUuc2V0QXR0cmlidXRlKC4uLmFyZ0FyclsyXSk7XG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgcmV0dXJuIG5ld0VsZTsgICBcbiAgICB9XG5cbiAgICByZXR1cm4geyBtYWtlRWxlIH07XG59KSgpO1xuXG5sZXQgZ2V0U3RhcnQgPSAoZWxlKSA9PiB7XG4gICAgbGV0IHRhckVsZSA9IGVsZTtcbiAgICBsZXQgc3RhcnRpbmdQb2ludCA9IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhckVsZS5jaGlsZHJlbi5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmICh0YXJFbGUuY2hpbGRyZW5baV0uY2xhc3NMaXN0LnZhbHVlICE9PSBcImhpZGVcIil7XG4gICAgICAgICAgICBzdGFydGluZ1BvaW50ID0gaTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGFydGluZ1BvaW50O1xufVxuXG5sZXQgbmV4dEltZyA9ICgpID0+IHtcbiAgICBsZXQgaW1nQ250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbWdfY29udGFpbmVyXCIpO1xuICAgIGxldCBjdXJJbWdOdW0gPSBnZXRTdGFydChpbWdDbnQpO1xuXG4gICAgaW1nQ250LmNoaWxkcmVuW2N1ckltZ051bV0uY2xhc3NMaXN0ID0gJ2hpZGUnO1xuXG4gICAgaWYgKGN1ckltZ051bSArIDEgPj0gaW1nQ250LmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICBjdXJJbWdOdW0gPSAwO1xuICAgICAgICBpbWdDbnQuY2hpbGRyZW5bY3VySW1nTnVtXS5jbGFzc0xpc3QgPSBcInNob3dcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpbWdDbnQuY2hpbGRyZW5bY3VySW1nTnVtICsgMV0uY2xhc3NMaXN0ID0gXCJzaG93XCI7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xufVxuXG5sZXQgcHJldkltZyA9ICgpID0+IHtcbiAgICBsZXQgaW1nQ250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbWdfY29udGFpbmVyXCIpO1xuICAgIGNvbnNvbGUubG9nKGltZ0NudCk7XG4gICAgbGV0IGN1ckltZ051bSA9IGdldFN0YXJ0KGltZ0NudCk7XG4gICAgY29uc29sZS5sb2coY3VySW1nTnVtKTtcblxuICAgIGltZ0NudC5jaGlsZHJlbltjdXJJbWdOdW1dLmNsYXNzTGlzdCA9ICdoaWRlJztcblxuICAgIGlmIChjdXJJbWdOdW0gLSAxID09PSAtMSkge1xuICAgICAgICBjdXJJbWdOdW0gPSA0O1xuICAgICAgICBpbWdDbnQuY2hpbGRyZW5bY3VySW1nTnVtXS5jbGFzc0xpc3QgPSBcInNob3dcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpbWdDbnQuY2hpbGRyZW5bY3VySW1nTnVtIC0gMV0uY2xhc3NMaXN0ID0gXCJzaG93XCI7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xufVxuXG5leHBvcnQgeyBkb21FbGVHZW4sIG5leHRJbWcsIHByZXZJbWcgfSIsImltcG9ydCBjc3MgZnJvbSBcIi4vc3R5bGUuY3NzXCJcbmltcG9ydCB7IGltYWdlQXNzZXRzIH0gZnJvbSBcIi4vYXNzZXRzLmpzXCJcbmltcG9ydCB7IGRvbUVsZUdlbiwgbmV4dEltZywgcHJldkltZyB9IGZyb20gXCIuL2Z1bmNzLmpzXCI7XG5cbmxldCBwYWdlUmVuZGVyID0gKCkgPT4ge1xuICAgIGxldCBib2R5RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuICAgIG5hdlJlbmRlcihib2R5RWwpO1xuICAgIHNsaWRlckVsZShib2R5RWwpO1xuXG4gICAgcmV0dXJuIGJvZHlFbDtcbn1cblxubGV0IG5hdlJlbmRlciA9IChlbGUpID0+IHtcbiAgICBsZXQgbmF2RWwgPSBkb21FbGVHZW4ubWFrZUVsZShcIm5hdlwiLCBcIlwiLCBbXCJjbGFzc1wiLCBcIm1haW5fbmF2XCJdKTtcbiAgICBlbGUuYXBwZW5kQ2hpbGQobmF2RWwpO1xuXG4gICAgbGV0IHBUaXRsZUVsZSA9IGRvbUVsZUdlbi5tYWtlRWxlKFwiZGl2XCIsIFwiXCIsIFtcImNsYXNzXCIsIFwicGFnZV90aXRsZVwiXSk7XG4gICAgbmF2RWwuYXBwZW5kQ2hpbGQocFRpdGxlRWxlKTtcblxuICAgIGxldCBwSG9uZUVsZSA9IGRvbUVsZUdlbi5tYWtlRWxlKFwiaDFcIiwgXCJJbWFnZSBTbGlkZXIgLSBUaGUgT2RpbiBQcm9qZWN0XCIsIFtcImNsYXNzXCIsIFwidGl0bGVfdGV4dFwiXSk7XG4gICAgcFRpdGxlRWxlLmFwcGVuZENoaWxkKHBIb25lRWxlKTtcblxuICAgIGxldCBnaXRJbWdXcmFwID0gZG9tRWxlR2VuLm1ha2VFbGUoXCJkaXZcIiwgXCJcIiwgW1wiY2xhc3NcIiwgXCJnaXRfaW1nX3dyYXBcIl0pO1xuICAgIG5hdkVsLmFwcGVuZENoaWxkKGdpdEltZ1dyYXApO1xuXG4gICAgbGV0IGdpdEFuY0F0ciA9IFtbXCJocmVmXCIsIFwiaHR0cHM6Ly9naXRodWIuY29tL0pvc2hEVDkwMFwiXSwgW1widGFyZ2V0XCIsIFwiX2JsYW5rXCJdXTtcbiAgICBsZXQgZ2l0SW1nRWxlID0gZG9tRWxlR2VuLm1ha2VFbGUoXCJhXCIsIFwiXCIsIGdpdEFuY0F0cik7XG4gICAgZ2l0SW1nV3JhcC5hcHBlbmRDaGlsZChnaXRJbWdFbGUpO1xuXG4gICAgbGV0IGdpdExvZ29BdHIgPSBbW1wic3JjXCIsIGltYWdlQXNzZXRzLmdpdEltZ10sIFtcImFsdFwiLCBcImdpdGh1YiBsb2dvXCJdLCBbXCJjbGFzc1wiLCBcImdpdF9pbWdcIl1dXG4gICAgbGV0IGdpdExvZ29FbGUgPSBkb21FbGVHZW4ubWFrZUVsZShcImltZ1wiLCBcIlwiLCBnaXRMb2dvQXRyKTtcbiAgICBsZXQgZ2l0VGV4dEVsZSA9IGRvbUVsZUdlbi5tYWtlRWxlKFwicFwiLCBcIkNyZWF0ZWQgYnkgLSBEYXZpZCBULlwiKVxuICAgIGdpdEltZ0VsZS5hcHBlbmRDaGlsZChnaXRUZXh0RWxlKTtcbiAgICBnaXRJbWdFbGUuYXBwZW5kQ2hpbGQoZ2l0TG9nb0VsZSk7XG5cbiAgICByZXR1cm4gZWxlO1xufVxuXG5sZXQgc2xpZGVyRWxlID0gKGVsZSkgPT4ge1xuICAgIGxldCBzbGlkZVdyYXAgPSBkb21FbGVHZW4ubWFrZUVsZShcImRpdlwiLCBcIlwiLCBbXCJjbGFzc1wiLCBcInNsaWRlcl93cmFwXCJdKTtcbiAgICBlbGUuYXBwZW5kQ2hpbGQoc2xpZGVXcmFwKTtcblxuICAgIGxldCBsQXJyb3cgPSBkb21FbGVHZW4ubWFrZUVsZShcImRpdlwiLCBcIlwiLCBbXCJjbGFzc1wiLCBcImxlZnRfYXJyb3dcIl0pO1xuICAgIHNsaWRlV3JhcC5hcHBlbmRDaGlsZChsQXJyb3cpO1xuXG4gICAgbGV0IGxBcnJvd0FyciA9IFtbXCJzcmNcIiwgaW1hZ2VBc3NldHMubGVmdEFycm93SW1nXSwgW1wiYWx0XCIsIFwibGVmdCBhcnJvdyBpY29uXCJdXTtcbiAgICBsZXQgbEFyckltZyA9IGRvbUVsZUdlbi5tYWtlRWxlKFwiaW1nXCIsIFwiXCIsIGxBcnJvd0Fycik7XG4gICAgbEFycm93LmFwcGVuZENoaWxkKGxBcnJJbWcpO1xuXG4gICAgXG4gICAgbGV0IGltZ0NudEVsZSA9IGRvbUVsZUdlbi5tYWtlRWxlKFwiZGl2XCIsIFwiXCIsIFtcImNsYXNzXCIsIFwiaW1nX2NvbnRhaW5lclwiXSk7XG4gICAgc2xpZGVXcmFwLmFwcGVuZENoaWxkKGltZ0NudEVsZSk7XG4gICAgXG4gICAgbGV0IGltYWdlT2JqQXJyID0gWy4uLmltYWdlQXNzZXRzLmltZ09ial07XG4gICAgZ2VuSW1nKGltYWdlT2JqQXJyLCBpbWdDbnRFbGUpO1xuICAgIFxuICAgIGxldCByQXJyb3cgPSBkb21FbGVHZW4ubWFrZUVsZShcImRpdlwiLCBcIlwiLCBbXCJjbGFzc1wiLCBcInJpZ2h0X2Fycm93XCJdKTtcbiAgICBzbGlkZVdyYXAuYXBwZW5kQ2hpbGQockFycm93KTtcbiAgICBcbiAgICBsZXQgckFycm93QXJyID0gW1tcInNyY1wiLCBpbWFnZUFzc2V0cy5yaWdodEFycm93SW1nXSwgW1wiYWx0XCIsIFwicmlnaHQgYXJyb3cgaWNvblwiXV07XG4gICAgbGV0IHJBcnJJbWcgPSBkb21FbGVHZW4ubWFrZUVsZShcImltZ1wiLCBcIlwiLCByQXJyb3dBcnIpO1xuICAgIHJBcnJvdy5hcHBlbmRDaGlsZChyQXJySW1nKTtcbiAgICBcbiAgICBsQXJySW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcmV2SW1nKTtcbiAgICByQXJySW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXh0SW1nKTtcblxuICAgIHNldEludGVydmFsKG5leHRJbWcsIDUwMDApXG5cbiAgICBnZW5CdWIoc2xpZGVXcmFwKTtcblxuICAgIHJldHVybiBzbGlkZVdyYXA7XG59XG5cbmxldCBnZW5JbWcgPSAoYXJyLCBlbGUpID0+IHtcbiAgICBmb3IgKGxldCBpIGluIGFycil7XG4gICAgICAgIGxldCBkaXZBcnIgPSBbXTtcblxuICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICBkaXZBcnIgPSBbW1wiY2xhc3NcIiwgYHNob3dgXV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaXZBcnIgPSBbW1wiY2xhc3NcIiwgYGhpZGVgXV07XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbmV3RGl2ID0gZG9tRWxlR2VuLm1ha2VFbGUoXCJkaXZcIiwgXCJcIiwgZGl2QXJyKTtcblxuICAgICAgICBsZXQgZGl2SW1nQXJyID0gW1tcInNyY1wiLCBhcnJbaV0uaW1nXV07XG4gICAgICAgIGxldCBkaXZJbWcgPSBkb21FbGVHZW4ubWFrZUVsZShcImltZ1wiLCBcIlwiLCBkaXZJbWdBcnIpO1xuICAgICAgICBuZXdEaXYuYXBwZW5kQ2hpbGQoZGl2SW1nKTtcblxuICAgICAgICBsZXQgcEFuY0Fyck9uZSA9IFtbXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIl0sIFtcImhyZWZcIiwgYXJyW2ldLmxpbmtdXVxuICAgICAgICBsZXQgcEFuY0FyclR3byA9IFtbXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIl0sIFtcImhyZWZcIiwgYXJyW2ldLnVuc3BsYXNoXV1cbiAgICAgICAgbGV0IHBBbmNPbmUgPSBkb21FbGVHZW4ubWFrZUVsZShcImFcIiwgYXJyW2ldLm93bmVyLCBwQW5jQXJyT25lKVxuICAgICAgICBsZXQgcEFuY1R3byA9IGRvbUVsZUdlbi5tYWtlRWxlKFwiYVwiLCBcIlVuc3BsYXNoXCIsIHBBbmNBcnJUd28pXG4gICAgICAgIGxldCBwRWxlID0gZG9tRWxlR2VuLm1ha2VFbGUoXCJwXCIsIFwiUGhvdG8gQnkgXCIpO1xuICAgICAgICBwRWxlLmFwcGVuZENoaWxkKHBBbmNPbmUpO1xuICAgICAgICBwRWxlLmFwcGVuZChcIiBvbiBcIik7XG4gICAgICAgIHBFbGUuYXBwZW5kQ2hpbGQocEFuY1R3byk7XG4gICAgICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChwRWxlKVxuXG4gICAgICAgIGVsZS5hcHBlbmRDaGlsZChuZXdEaXYpO1xuICAgIH1cblxuICAgIHJldHVybjtcbn1cblxubGV0IGdlbkJ1YiA9IChlbGUpID0+IHtcbiAgICBsZXQgYnViRWxlID0gZG9tRWxlR2VuLm1ha2VFbGUoXCJkaXZcIiwgXCJcIiwgW1wiY2xhc3NcIiwgXCJpbWdfYnViYmxlc1wiXSk7XG4gICAgZWxlLmFwcGVuZENoaWxkKGJ1YkVsZSk7XG5cbiAgICBsZXQgaW1nQ29udGluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmltZ19jb250YWluZXJcIilcbiAgICBsZXQgaW1nQ291bnQgPSBpbWdDb250aW5lci5jaGlsZE5vZGVzLmxlbmd0aDtcbiAgICBjb25zb2xlLmxvZyhcIlRoZSBpbWFnZSBjb3VudCBpc1wiLCBpbWdDb3VudCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltZ0NvdW50OyBpKyspe1xuICAgICAgICBsZXQgaW1nU3JjID0gaW1hZ2VBc3NldHMuYnViYmxlRnVsbEltZztcbiAgICAgICAgXG4gICAgICAgIGlmIChpID4gMCl7XG4gICAgICAgICAgICBpbWdTcmMgPSBpbWFnZUFzc2V0cy5idWJibGVFbXB0eUltZztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGV0IGltZ0VsZSA9IGRvbUVsZUdlbi5tYWtlRWxlKFwiaW1nXCIsIFwiXCIsIFtbXCJzcmNcIiwgaW1nU3JjXSwgW1wiYWx0XCIsIFwiYnViYmxlIGZvciBzd2l0Y2hpbmcgaW1hZ2VzXCJdXSlcbiAgICAgICAgYnViRWxlLmFwcGVuZENoaWxkKGltZ0VsZSlcbiAgICB9XG5cbiAgICByZXR1cm4gYnViRWxlO1xufVxuXG4oKCkgPT4ge1xuICAgIHBhZ2VSZW5kZXIoKTtcbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9