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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: \"SinkinSansBold\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"opentype\");\n    font-weight: 600;\n}\n\n@font-face {\n    font-family: \"SinkinSans\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"opentype\");\n    font-weight: 400;\n}\n\n* {\n    padding: 0px;\n    margin: 0px;\n    text-decoration: none;\n    font-family: 'SinkinSans', 'Courier New', Courier, monospace;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n    background-color: #A5C9CA;\n    display: flex;\n    flex-direction: column;\n}\n\n.main_nav {\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    background-color: #395B64;\n    border-bottom: 5px solid #2C3333;\n}\n\n.title_text {\n    font-family:  'SinkinSansBold', 'Courier New', Courier, monospace;\n    font-size: 24px;\n    color: #E7F6F2;\n}\n\n.page_title {\n    padding: 15px;\n}\n\n.git_img_wrap a {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    padding: 15px;\n}\n\n.git_img_wrap a > p {\n    font-family: 'SinkinSans', 'Courier New', Courier, monospace;\n    font-size: 12px;\n    color: #E7F6F2;\n}\n\n.git_img {\n    width: 45px;\n}\n\n.slider_wrap {\n    display: grid;\n    grid-template-columns: 1fr 3fr 1fr;\n    grid-template-rows: 9fr 1fr;\n    align-items: center;\n    justify-items: center;\n    height: 550px;\n    margin-top: 90px;\n}\n\n.img_bubbles {\n    grid-column: 1/4;\n    grid-row: 2/3;\n}\n\n.img_bubbles img {\n    width: 20px;\n    padding: 5px;\n}\n\n.left_arrow {\n    justify-self: flex-end;\n}\n\n.right_arrow {\n    justify-self: flex-start;\n}\n\n.img_container {\n    display: grid;\n}\n\n.img_container div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n    margin: 15px;\n}\n\n.img_container div img {\n    width: 750px;\n    height: 500px;\n    border: 4px solid #2C3333;\n}\n\n.img_container div.hide,\n.img_container div.hide > img,\n.img_container div.hide > p,\n.img_container div.hide > p a{\n    grid-row: 2/3;\n    grid-column: 1/2;\n    opacity: 0;\n    width: 0px;\n    height: 0px;\n}\n\n.img_container div.show {\n    grid-row: 1/2;\n    grid-column: 1/2;\n    opacity: 1;\n    transition: opacity 0.75s linear;\n    animation-delay: 250ms;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,6BAA6B;IAC7B,+DAA8G;IAC9G,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;IACzB,+DAA6G;IAC7G,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,qBAAqB;IACrB,4DAA4D;AAChE;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,yBAAyB;IACzB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,yBAAyB;IACzB,gCAAgC;AACpC;;AAEA;IACI,iEAAiE;IACjE,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,4DAA4D;IAC5D,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,2BAA2B;IAC3B,mBAAmB;IACnB,qBAAqB;IACrB,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,yBAAyB;AAC7B;;AAEA;;;;IAII,aAAa;IACb,gBAAgB;IAChB,UAAU;IACV,UAAU;IACV,WAAW;AACf;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,UAAU;IACV,gCAAgC;IAChC,sBAAsB;AAC1B","sourcesContent":["@font-face {\n    font-family: \"SinkinSansBold\";\n    src: url(\"/home/josh/Documents/repos/TOP_ImageSlider/src/fonts/SinkinSans-600SemiBold.otf\") format(\"opentype\");\n    font-weight: 600;\n}\n\n@font-face {\n    font-family: \"SinkinSans\";\n    src: url(\"/home/josh/Documents/repos/TOP_ImageSlider/src/fonts/SinkinSans-400Regular.otf\") format(\"opentype\");\n    font-weight: 400;\n}\n\n* {\n    padding: 0px;\n    margin: 0px;\n    text-decoration: none;\n    font-family: 'SinkinSans', 'Courier New', Courier, monospace;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n    background-color: #A5C9CA;\n    display: flex;\n    flex-direction: column;\n}\n\n.main_nav {\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    background-color: #395B64;\n    border-bottom: 5px solid #2C3333;\n}\n\n.title_text {\n    font-family:  'SinkinSansBold', 'Courier New', Courier, monospace;\n    font-size: 24px;\n    color: #E7F6F2;\n}\n\n.page_title {\n    padding: 15px;\n}\n\n.git_img_wrap a {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    padding: 15px;\n}\n\n.git_img_wrap a > p {\n    font-family: 'SinkinSans', 'Courier New', Courier, monospace;\n    font-size: 12px;\n    color: #E7F6F2;\n}\n\n.git_img {\n    width: 45px;\n}\n\n.slider_wrap {\n    display: grid;\n    grid-template-columns: 1fr 3fr 1fr;\n    grid-template-rows: 9fr 1fr;\n    align-items: center;\n    justify-items: center;\n    height: 550px;\n    margin-top: 90px;\n}\n\n.img_bubbles {\n    grid-column: 1/4;\n    grid-row: 2/3;\n}\n\n.img_bubbles img {\n    width: 20px;\n    padding: 5px;\n}\n\n.left_arrow {\n    justify-self: flex-end;\n}\n\n.right_arrow {\n    justify-self: flex-start;\n}\n\n.img_container {\n    display: grid;\n}\n\n.img_container div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n    margin: 15px;\n}\n\n.img_container div img {\n    width: 750px;\n    height: 500px;\n    border: 4px solid #2C3333;\n}\n\n.img_container div.hide,\n.img_container div.hide > img,\n.img_container div.hide > p,\n.img_container div.hide > p a{\n    grid-row: 2/3;\n    grid-column: 1/2;\n    opacity: 0;\n    width: 0px;\n    height: 0px;\n}\n\n.img_container div.show {\n    grid-row: 1/2;\n    grid-column: 1/2;\n    opacity: 1;\n    transition: opacity 0.75s linear;\n    animation-delay: 250ms;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "bubImgSwitch": () => (/* binding */ bubImgSwitch),
/* harmony export */   "bubPicSwitch": () => (/* binding */ bubPicSwitch),
/* harmony export */   "domEleGen": () => (/* binding */ domEleGen),
/* harmony export */   "nextImg": () => (/* binding */ nextImg),
/* harmony export */   "prevImg": () => (/* binding */ prevImg)
/* harmony export */ });
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets */ "./src/assets.js");


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
            return alert("Too many arguments.");
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
    let bubMain = document.querySelector(".img_bubbles");
    let curImgNum = getStart(imgCnt);

    imgCnt.children[curImgNum].classList = 'hide';
    bubMain.children[curImgNum].src = _assets__WEBPACK_IMPORTED_MODULE_0__.imageAssets.bubbleEmptyImg;

    if (curImgNum + 1 >= imgCnt.children.length) {
        curImgNum = 0;
        bubMain.children[curImgNum].src = _assets__WEBPACK_IMPORTED_MODULE_0__.imageAssets.bubbleFullImg;
        imgCnt.children[curImgNum].classList = "show";
    } else {
        bubMain.children[curImgNum + 1].src = _assets__WEBPACK_IMPORTED_MODULE_0__.imageAssets.bubbleFullImg;
        imgCnt.children[curImgNum + 1].classList = "show";
    }

    return;
}

let prevImg = () => {
    let imgCnt = document.querySelector(".img_container");
    let bubMain = document.querySelector(".img_bubbles");
    let curImgNum = getStart(imgCnt);

    imgCnt.children[curImgNum].classList = 'hide';
    bubMain.children[curImgNum].src = _assets__WEBPACK_IMPORTED_MODULE_0__.imageAssets.bubbleEmptyImg;

    if (curImgNum - 1 === -1) {
        curImgNum = 4;
        bubMain.children[curImgNum].src = _assets__WEBPACK_IMPORTED_MODULE_0__.imageAssets.bubbleFullImg;
        imgCnt.children[curImgNum].classList = "show";
    } else {
        imgCnt.children[curImgNum - 1].classList = "show";
        bubMain.children[curImgNum - 1].src = _assets__WEBPACK_IMPORTED_MODULE_0__.imageAssets.bubbleFullImg;
    }

    return;
}

let bubImgSwitch = (e) => {
    let bubMain = document.querySelector(".img_bubbles");

    for (let i = 0; i < bubMain.children.length; i++){
        bubMain.childNodes[i].src = _assets__WEBPACK_IMPORTED_MODULE_0__.imageAssets.bubbleEmptyImg;
    }

    e.target.src = _assets__WEBPACK_IMPORTED_MODULE_0__.imageAssets.bubbleFullImg;
         
    return;
}

let bubPicSwitch = (e) => {
    let bubMain = document.querySelector(".img_bubbles");
    let imagesEle = document.querySelector(".img_container");

    for (let i = 0; i < bubMain.children.length; i++){
        if (e.target.classList[0] === `item_${i}`){            
            imagesEle.children[i].classList = "show";
        } else {
            imagesEle.children[i].classList = "hide";
        }
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
        
        let imgEle = _funcs_js__WEBPACK_IMPORTED_MODULE_2__.domEleGen.makeEle("img", "", [["src", imgSrc], ["alt", "bubble for switching images"], ["class", `item_${i}`]])

        imgEle.addEventListener("click", (e) => {
            ;(0,_funcs_js__WEBPACK_IMPORTED_MODULE_2__.bubImgSwitch)(e);
            (0,_funcs_js__WEBPACK_IMPORTED_MODULE_2__.bubPicSwitch)(e);
        })

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxzQ0FBc0MsOENBQU87O0FBRTdDLGdCQUFnQiw4Q0FBTzs7QUFFdkI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBLHFCQUFxQix3REFBaUI7O0FBRXRDO0FBQ0EscUJBQXFCLHdEQUFpQjtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLHdEQUFpQjtBQUN2QyxzQkFBc0Isd0RBQWlCO0FBQ3ZDLG1CQUFtQix3REFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHdEQUFpQjtBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLGNBQWM7QUFDbEMscUJBQXFCLGlFQUF5QjtBQUM5QztBQUNBO0FBQ0EscUJBQXFCLGtFQUEwQjtBQUMvQztBQUNBO0FBQ0EscUJBQXFCLHdEQUFpQix3RkFBd0YsRUFBRTs7QUFFaEk7QUFDQSxZQUFZLHdEQUFZO0FBQ3hCLFlBQVksdURBQVk7QUFDeEIsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3BfaW1hZ2VzbGlkZXIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvcF9pbWFnZXNsaWRlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9wX2ltYWdlc2xpZGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b3BfaW1hZ2VzbGlkZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b3BfaW1hZ2VzbGlkZXIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9wX2ltYWdlc2xpZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvcF9pbWFnZXNsaWRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wX2ltYWdlc2xpZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvcF9pbWFnZXNsaWRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b3BfaW1hZ2VzbGlkZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b3BfaW1hZ2VzbGlkZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b3BfaW1hZ2VzbGlkZXIvLi9zcmMvYXNzZXRzLmpzIiwid2VicGFjazovL3RvcF9pbWFnZXNsaWRlci8uL3NyYy9mdW5jcy5qcyIsIndlYnBhY2s6Ly90b3BfaW1hZ2VzbGlkZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9ob21lL2pvc2gvRG9jdW1lbnRzL3JlcG9zL1RPUF9JbWFnZVNsaWRlci9zcmMvZm9udHMvU2lua2luU2Fucy02MDBTZW1pQm9sZC5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvaG9tZS9qb3NoL0RvY3VtZW50cy9yZXBvcy9UT1BfSW1hZ2VTbGlkZXIvc3JjL2ZvbnRzL1NpbmtpblNhbnMtNDAwUmVndWxhci5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2lua2luU2Fuc0JvbGRcXFwiO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJvcGVudHlwZVxcXCIpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTaW5raW5TYW5zXFxcIjtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdChcXFwib3BlbnR5cGVcXFwiKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6ICdTaW5raW5TYW5zJywgJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTVDOUNBO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubWFpbl9uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5NUI2NDtcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICMyQzMzMzM7XFxufVxcblxcbi50aXRsZV90ZXh0IHtcXG4gICAgZm9udC1mYW1pbHk6ICAnU2lua2luU2Fuc0JvbGQnLCAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgY29sb3I6ICNFN0Y2RjI7XFxufVxcblxcbi5wYWdlX3RpdGxlIHtcXG4gICAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuLmdpdF9pbWdfd3JhcCBhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4uZ2l0X2ltZ193cmFwIGEgPiBwIHtcXG4gICAgZm9udC1mYW1pbHk6ICdTaW5raW5TYW5zJywgJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGNvbG9yOiAjRTdGNkYyO1xcbn1cXG5cXG4uZ2l0X2ltZyB7XFxuICAgIHdpZHRoOiA0NXB4O1xcbn1cXG5cXG4uc2xpZGVyX3dyYXAge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDlmciAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA1NTBweDtcXG4gICAgbWFyZ2luLXRvcDogOTBweDtcXG59XFxuXFxuLmltZ19idWJibGVzIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLmltZ19idWJibGVzIGltZyB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5sZWZ0X2Fycm93IHtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLnJpZ2h0X2Fycm93IHtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uaW1nX2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5pbWdfY29udGFpbmVyIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG1hcmdpbjogMTVweDtcXG59XFxuXFxuLmltZ19jb250YWluZXIgZGl2IGltZyB7XFxuICAgIHdpZHRoOiA3NTBweDtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgIzJDMzMzMztcXG59XFxuXFxuLmltZ19jb250YWluZXIgZGl2LmhpZGUsXFxuLmltZ19jb250YWluZXIgZGl2LmhpZGUgPiBpbWcsXFxuLmltZ19jb250YWluZXIgZGl2LmhpZGUgPiBwLFxcbi5pbWdfY29udGFpbmVyIGRpdi5oaWRlID4gcCBhe1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB3aWR0aDogMHB4O1xcbiAgICBoZWlnaHQ6IDBweDtcXG59XFxuXFxuLmltZ19jb250YWluZXIgZGl2LnNob3cge1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNzVzIGxpbmVhcjtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAyNTBtcztcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDZCQUE2QjtJQUM3QiwrREFBOEc7SUFDOUcsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLCtEQUE2RztJQUM3RyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHFCQUFxQjtJQUNyQiw0REFBNEQ7QUFDaEU7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGlFQUFpRTtJQUNqRSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksNERBQTREO0lBQzVELGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQywyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsU0FBUztJQUNULFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtBQUM3Qjs7QUFFQTs7OztJQUlJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixnQ0FBZ0M7SUFDaEMsc0JBQXNCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIlNpbmtpblNhbnNCb2xkXFxcIjtcXG4gICAgc3JjOiB1cmwoXFxcIi9ob21lL2pvc2gvRG9jdW1lbnRzL3JlcG9zL1RPUF9JbWFnZVNsaWRlci9zcmMvZm9udHMvU2lua2luU2Fucy02MDBTZW1pQm9sZC5vdGZcXFwiKSBmb3JtYXQoXFxcIm9wZW50eXBlXFxcIik7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIlNpbmtpblNhbnNcXFwiO1xcbiAgICBzcmM6IHVybChcXFwiL2hvbWUvam9zaC9Eb2N1bWVudHMvcmVwb3MvVE9QX0ltYWdlU2xpZGVyL3NyYy9mb250cy9TaW5raW5TYW5zLTQwMFJlZ3VsYXIub3RmXFxcIikgZm9ybWF0KFxcXCJvcGVudHlwZVxcXCIpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4qIHtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBmb250LWZhbWlseTogJ1NpbmtpblNhbnMnLCAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBNUM5Q0E7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5tYWluX25hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk1QjY0O1xcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgIzJDMzMzMztcXG59XFxuXFxuLnRpdGxlX3RleHQge1xcbiAgICBmb250LWZhbWlseTogICdTaW5raW5TYW5zQm9sZCcsICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBjb2xvcjogI0U3RjZGMjtcXG59XFxuXFxuLnBhZ2VfdGl0bGUge1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4uZ2l0X2ltZ193cmFwIGEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi5naXRfaW1nX3dyYXAgYSA+IHAge1xcbiAgICBmb250LWZhbWlseTogJ1NpbmtpblNhbnMnLCAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgY29sb3I6ICNFN0Y2RjI7XFxufVxcblxcbi5naXRfaW1nIHtcXG4gICAgd2lkdGg6IDQ1cHg7XFxufVxcblxcbi5zbGlkZXJfd3JhcCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogOWZyIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDU1MHB4O1xcbiAgICBtYXJnaW4tdG9wOiA5MHB4O1xcbn1cXG5cXG4uaW1nX2J1YmJsZXMge1xcbiAgICBncmlkLWNvbHVtbjogMS80O1xcbiAgICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4uaW1nX2J1YmJsZXMgaW1nIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmxlZnRfYXJyb3cge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4ucmlnaHRfYXJyb3cge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5pbWdfY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmltZ19jb250YWluZXIgZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgbWFyZ2luOiAxNXB4O1xcbn1cXG5cXG4uaW1nX2NvbnRhaW5lciBkaXYgaW1nIHtcXG4gICAgd2lkdGg6IDc1MHB4O1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjMkMzMzMzO1xcbn1cXG5cXG4uaW1nX2NvbnRhaW5lciBkaXYuaGlkZSxcXG4uaW1nX2NvbnRhaW5lciBkaXYuaGlkZSA+IGltZyxcXG4uaW1nX2NvbnRhaW5lciBkaXYuaGlkZSA+IHAsXFxuLmltZ19jb250YWluZXIgZGl2LmhpZGUgPiBwIGF7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHdpZHRoOiAwcHg7XFxuICAgIGhlaWdodDogMHB4O1xcbn1cXG5cXG4uaW1nX2NvbnRhaW5lciBkaXYuc2hvdyB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC43NXMgbGluZWFyO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDI1MG1zO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGxlZnRBcnJvdyBmcm9tICcvaG9tZS9qb3NoL0RvY3VtZW50cy9yZXBvcy9UT1BfSW1hZ2VTbGlkZXIvc3JjL2ltYWdlcy9hcnJvd19iYWNrX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQ4LnN2Zyc7XG5pbXBvcnQgcmlnaHRBcnJvdyBmcm9tICcvaG9tZS9qb3NoL0RvY3VtZW50cy9yZXBvcy9UT1BfSW1hZ2VTbGlkZXIvc3JjL2ltYWdlcy9hcnJvd19mb3J3YXJkX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQ4LnN2Zyc7XG5pbXBvcnQgYnViYmxlRnVsbCBmcm9tICcvaG9tZS9qb3NoL0RvY3VtZW50cy9yZXBvcy9UT1BfSW1hZ2VTbGlkZXIvc3JjL2ltYWdlcy9maWJlcl9tYW51YWxfcmVjb3JkX0ZJTEwxX3dnaHQ0MDBfR1JBRDBfb3BzejQ4LnN2Zyc7XG5pbXBvcnQgYnViYmxlRW1wdHkgZnJvbSAnL2hvbWUvam9zaC9Eb2N1bWVudHMvcmVwb3MvVE9QX0ltYWdlU2xpZGVyL3NyYy9pbWFnZXMvZmliZXJfbWFudWFsX3JlY29yZF9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3o0OC5zdmcnO1xuaW1wb3J0IGdpdExvZ28gZnJvbSAnL2hvbWUvam9zaC9Eb2N1bWVudHMvcmVwb3MvVE9QX0ltYWdlU2xpZGVyL3NyYy9pbWFnZXMvR2l0SHViLU1hcmstMTIwcHgtcGx1cy5wbmcnO1xuaW1wb3J0IGZpcnN0SW1nIGZyb20gJy4uL3NyYy9pbWFnZXMvaXNtYWVsLXJvZHJpZ3Vlei1Yak1yVXNRdFh4Yy11bnNwbGFzaC5qcGcnXG5pbXBvcnQgc2Vjb25kSW1nIGZyb20gJy4uL3NyYy9pbWFnZXMvam9iLXNhdmVsc2JlcmctRTJZNGFqdTBuOFUtdW5zcGxhc2guanBnJ1xuaW1wb3J0IHRoaXJkSW1nIGZyb20gJy4uL3NyYy9pbWFnZXMvam9iLXNhdmVsc2JlcmctRXZzVlJmVTlfcDQtdW5zcGxhc2guanBnJ1xuaW1wb3J0IGZvdXJ0aEltZyBmcm9tICcuLi9zcmMvaW1hZ2VzL21hcmVrLXBpd25pY2tpLXFlZTkxYy1vNTZzLXVuc3BsYXNoLmpwZydcbmltcG9ydCBmaWZ0aEltZyBmcm9tICcuLi9zcmMvaW1hZ2VzL3pldG9uZy1saS0yWHBWa0xwcEhfby11bnNwbGFzaC5qcGcnXG5cbmNvbnN0IGltYWdlQXNzZXRzID0gKGZ1bmN0aW9uKCkge1xuICAgIGxldCBsZWZ0QXJyb3dJbWcgPSBsZWZ0QXJyb3c7XG4gICAgbGV0IHJpZ2h0QXJyb3dJbWcgPSByaWdodEFycm93O1xuICAgIGxldCBidWJibGVGdWxsSW1nID0gYnViYmxlRnVsbDtcbiAgICBsZXQgYnViYmxlRW1wdHlJbWcgPSBidWJibGVFbXB0eTtcbiAgICBsZXQgZ2l0SW1nID0gZ2l0TG9nbztcblxuICAgIGxldCBpbWdPYmogPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGltZzogZmlyc3RJbWcsXG4gICAgICAgICAgICBvd25lcjogXCJJc21hZWwgUm9kcmlndWV6XCIsXG4gICAgICAgICAgICBsaW5rOiBcImh0dHBzOi8vdW5zcGxhc2guY29tL0Bpc21hZWxyZ3Vlej91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIixcbiAgICAgICAgICAgIHVuc3BsYXNoOiBcImh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9Yak1yVXNRdFh4Yz91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpbWc6IHNlY29uZEltZyxcbiAgICAgICAgICAgIG93bmVyOiBcIkpvYiBTYXZlbHNiZXJnXCIsXG4gICAgICAgICAgICBsaW5rOiBcImh0dHBzOi8vdW5zcGxhc2guY29tL0Bqb2JzYXZlbHNiZXJnP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiLFxuICAgICAgICAgICAgdW5zcGxhc2g6IFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL0UyWTRhanUwbjhVP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGltZzogdGhpcmRJbWcsXG4gICAgICAgICAgICBvd25lcjogXCJKb2IgU2F2ZWxzYmVyZ1wiLFxuICAgICAgICAgICAgbGluazogXCJodHRwczovL3Vuc3BsYXNoLmNvbS9Aam9ic2F2ZWxzYmVyZz91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIixcbiAgICAgICAgICAgIHVuc3BsYXNoOiBcImh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9FdnNWUmZVOV9wND91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpbWc6IGZvdXJ0aEltZyxcbiAgICAgICAgICAgIG93bmVyOiBcIk1hcmVrIFBpd25pY2tpXCIsXG4gICAgICAgICAgICBsaW5rOiBcImh0dHBzOi8vdW5zcGxhc2guY29tL0BtYXJla3Bpd25pY2tpP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiLFxuICAgICAgICAgICAgdW5zcGxhc2g6IFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL3FlZTkxYy1vNTZzP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGltZzogZmlmdGhJbWcsXG4gICAgICAgICAgICBvd25lcjogXCJaZXRvbmcgTGlcIixcbiAgICAgICAgICAgIGxpbms6IFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQHpldG9uZz91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIixcbiAgICAgICAgICAgIHVuc3BsYXNoOiBcImh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy8yWHBWa0xwcEhfbz91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIlxuICAgICAgICB9LFxuICAgIF1cblxuXG4gICAgcmV0dXJuIHsgbGVmdEFycm93SW1nLCByaWdodEFycm93SW1nLCBidWJibGVFbXB0eUltZywgYnViYmxlRnVsbEltZywgZ2l0SW1nLCBpbWdPYmogfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGltYWdlQXNzZXRzIH07IiwiaW1wb3J0IHsgaW1hZ2VBc3NldHMgfSBmcm9tIFwiLi9hc3NldHNcIjtcblxuY29uc3QgZG9tRWxlR2VuID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgbWFrZUVsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgYXJnQXJyID0gWy4uLmFyZ3VtZW50c107XG5cbiAgICAgICAgaWYgKHR5cGVvZihhcmdBcnJbMF0pICE9ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoXCJGaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgdmFsaWQgSFRNTCBlbGVtZW50IGluIHN0cmluZyBmb3JtYXQuIEV4YW1wbGU6ICdkaXYnIFwiKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YoYXJnQXJyWzFdKSAhPSBcInN0cmluZ1wiICYmIGFyZ0Fyci5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgIHJldHVybiBhbGVydChcIkludmFsaWQgQXJndW1lbnQgVHlwZS4gVGhlIHNlY29uZCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZihhcmdBcnJbMl0pICE9IFwib2JqZWN0XCIgJiYgYXJnQXJyLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiSW52YWxpZCBBcmcuIFRoaXJkIGFyZ3VtZW50IGFjY2VwdHMgYW4gYXJyYXkgb3IgYSBuZXN0ZWQgYXJyYXkgb2YgYXJyYXlzLlwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChhcmdBcnIubGVuZ3RoID4gMykge1xuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiVG9vIG1hbnkgYXJndW1lbnRzLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBuZXdFbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke2FyZ0FyclswXX1gKTtcbiAgICAgICAgbmV3RWxlLnRleHRDb250ZW50ID0gYXJnQXJyWzFdO1xuICAgICAgICBcbiAgICAgICAgaWYgKGFyZ0Fyci5sZW5ndGggPT09IDMgJiYgdHlwZW9mKGFyZ0FyclsyXVswXSkgPT09IFwib2JqZWN0XCIpe1xuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBhcmdBcnJbMl0peyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgdGVtcEFyciA9IFsuLi5hcmdBcnJbMl1baV1dO1xuXG4gICAgICAgICAgICAgICAgbmV3RWxlLnNldEF0dHJpYnV0ZSguLi50ZW1wQXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YoYXJnQXJyWzJdKSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgbmV3RWxlLnNldEF0dHJpYnV0ZSguLi5hcmdBcnJbMl0pO1xuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIHJldHVybiBuZXdFbGU7ICAgXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgbWFrZUVsZSB9O1xufSkoKTtcblxubGV0IGdldFN0YXJ0ID0gKGVsZSkgPT4ge1xuICAgIGxldCB0YXJFbGUgPSBlbGU7XG4gICAgbGV0IHN0YXJ0aW5nUG9pbnQgPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXJFbGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZiAodGFyRWxlLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC52YWx1ZSAhPT0gXCJoaWRlXCIpe1xuICAgICAgICAgICAgc3RhcnRpbmdQb2ludCA9IGk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhcnRpbmdQb2ludDtcbn1cblxubGV0IG5leHRJbWcgPSAoKSA9PiB7XG4gICAgbGV0IGltZ0NudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW1nX2NvbnRhaW5lclwiKTtcbiAgICBsZXQgYnViTWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW1nX2J1YmJsZXNcIik7XG4gICAgbGV0IGN1ckltZ051bSA9IGdldFN0YXJ0KGltZ0NudCk7XG5cbiAgICBpbWdDbnQuY2hpbGRyZW5bY3VySW1nTnVtXS5jbGFzc0xpc3QgPSAnaGlkZSc7XG4gICAgYnViTWFpbi5jaGlsZHJlbltjdXJJbWdOdW1dLnNyYyA9IGltYWdlQXNzZXRzLmJ1YmJsZUVtcHR5SW1nO1xuXG4gICAgaWYgKGN1ckltZ051bSArIDEgPj0gaW1nQ250LmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICBjdXJJbWdOdW0gPSAwO1xuICAgICAgICBidWJNYWluLmNoaWxkcmVuW2N1ckltZ051bV0uc3JjID0gaW1hZ2VBc3NldHMuYnViYmxlRnVsbEltZztcbiAgICAgICAgaW1nQ250LmNoaWxkcmVuW2N1ckltZ051bV0uY2xhc3NMaXN0ID0gXCJzaG93XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYnViTWFpbi5jaGlsZHJlbltjdXJJbWdOdW0gKyAxXS5zcmMgPSBpbWFnZUFzc2V0cy5idWJibGVGdWxsSW1nO1xuICAgICAgICBpbWdDbnQuY2hpbGRyZW5bY3VySW1nTnVtICsgMV0uY2xhc3NMaXN0ID0gXCJzaG93XCI7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xufVxuXG5sZXQgcHJldkltZyA9ICgpID0+IHtcbiAgICBsZXQgaW1nQ250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbWdfY29udGFpbmVyXCIpO1xuICAgIGxldCBidWJNYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbWdfYnViYmxlc1wiKTtcbiAgICBsZXQgY3VySW1nTnVtID0gZ2V0U3RhcnQoaW1nQ250KTtcblxuICAgIGltZ0NudC5jaGlsZHJlbltjdXJJbWdOdW1dLmNsYXNzTGlzdCA9ICdoaWRlJztcbiAgICBidWJNYWluLmNoaWxkcmVuW2N1ckltZ051bV0uc3JjID0gaW1hZ2VBc3NldHMuYnViYmxlRW1wdHlJbWc7XG5cbiAgICBpZiAoY3VySW1nTnVtIC0gMSA9PT0gLTEpIHtcbiAgICAgICAgY3VySW1nTnVtID0gNDtcbiAgICAgICAgYnViTWFpbi5jaGlsZHJlbltjdXJJbWdOdW1dLnNyYyA9IGltYWdlQXNzZXRzLmJ1YmJsZUZ1bGxJbWc7XG4gICAgICAgIGltZ0NudC5jaGlsZHJlbltjdXJJbWdOdW1dLmNsYXNzTGlzdCA9IFwic2hvd1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGltZ0NudC5jaGlsZHJlbltjdXJJbWdOdW0gLSAxXS5jbGFzc0xpc3QgPSBcInNob3dcIjtcbiAgICAgICAgYnViTWFpbi5jaGlsZHJlbltjdXJJbWdOdW0gLSAxXS5zcmMgPSBpbWFnZUFzc2V0cy5idWJibGVGdWxsSW1nO1xuICAgIH1cblxuICAgIHJldHVybjtcbn1cblxubGV0IGJ1YkltZ1N3aXRjaCA9IChlKSA9PiB7XG4gICAgbGV0IGJ1Yk1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmltZ19idWJibGVzXCIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidWJNYWluLmNoaWxkcmVuLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgYnViTWFpbi5jaGlsZE5vZGVzW2ldLnNyYyA9IGltYWdlQXNzZXRzLmJ1YmJsZUVtcHR5SW1nO1xuICAgIH1cblxuICAgIGUudGFyZ2V0LnNyYyA9IGltYWdlQXNzZXRzLmJ1YmJsZUZ1bGxJbWc7XG4gICAgICAgICBcbiAgICByZXR1cm47XG59XG5cbmxldCBidWJQaWNTd2l0Y2ggPSAoZSkgPT4ge1xuICAgIGxldCBidWJNYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbWdfYnViYmxlc1wiKTtcbiAgICBsZXQgaW1hZ2VzRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbWdfY29udGFpbmVyXCIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidWJNYWluLmNoaWxkcmVuLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdFswXSA9PT0gYGl0ZW1fJHtpfWApeyAgICAgICAgICAgIFxuICAgICAgICAgICAgaW1hZ2VzRWxlLmNoaWxkcmVuW2ldLmNsYXNzTGlzdCA9IFwic2hvd1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW1hZ2VzRWxlLmNoaWxkcmVuW2ldLmNsYXNzTGlzdCA9IFwiaGlkZVwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuO1xufVxuXG5leHBvcnQgeyBkb21FbGVHZW4sIG5leHRJbWcsIHByZXZJbWcsIGJ1YkltZ1N3aXRjaCwgYnViUGljU3dpdGNoIH0iLCJpbXBvcnQgY3NzIGZyb20gXCIuL3N0eWxlLmNzc1wiXG5pbXBvcnQgeyBpbWFnZUFzc2V0cyB9IGZyb20gXCIuL2Fzc2V0cy5qc1wiXG5pbXBvcnQgeyBkb21FbGVHZW4sIG5leHRJbWcsIHByZXZJbWcsIGJ1YkltZ1N3aXRjaCwgYnViUGljU3dpdGNoIH0gZnJvbSBcIi4vZnVuY3MuanNcIjtcblxubGV0IHBhZ2VSZW5kZXIgPSAoKSA9PiB7XG4gICAgbGV0IGJvZHlFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG4gICAgbmF2UmVuZGVyKGJvZHlFbCk7XG4gICAgc2xpZGVyRWxlKGJvZHlFbCk7XG5cbiAgICByZXR1cm4gYm9keUVsO1xufVxuXG5sZXQgbmF2UmVuZGVyID0gKGVsZSkgPT4ge1xuICAgIGxldCBuYXZFbCA9IGRvbUVsZUdlbi5tYWtlRWxlKFwibmF2XCIsIFwiXCIsIFtcImNsYXNzXCIsIFwibWFpbl9uYXZcIl0pO1xuICAgIGVsZS5hcHBlbmRDaGlsZChuYXZFbCk7XG5cbiAgICBsZXQgcFRpdGxlRWxlID0gZG9tRWxlR2VuLm1ha2VFbGUoXCJkaXZcIiwgXCJcIiwgW1wiY2xhc3NcIiwgXCJwYWdlX3RpdGxlXCJdKTtcbiAgICBuYXZFbC5hcHBlbmRDaGlsZChwVGl0bGVFbGUpO1xuXG4gICAgbGV0IHBIb25lRWxlID0gZG9tRWxlR2VuLm1ha2VFbGUoXCJoMVwiLCBcIkltYWdlIFNsaWRlciAtIFRoZSBPZGluIFByb2plY3RcIiwgW1wiY2xhc3NcIiwgXCJ0aXRsZV90ZXh0XCJdKTtcbiAgICBwVGl0bGVFbGUuYXBwZW5kQ2hpbGQocEhvbmVFbGUpO1xuXG4gICAgbGV0IGdpdEltZ1dyYXAgPSBkb21FbGVHZW4ubWFrZUVsZShcImRpdlwiLCBcIlwiLCBbXCJjbGFzc1wiLCBcImdpdF9pbWdfd3JhcFwiXSk7XG4gICAgbmF2RWwuYXBwZW5kQ2hpbGQoZ2l0SW1nV3JhcCk7XG5cbiAgICBsZXQgZ2l0QW5jQXRyID0gW1tcImhyZWZcIiwgXCJodHRwczovL2dpdGh1Yi5jb20vSm9zaERUOTAwXCJdLCBbXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIl1dO1xuICAgIGxldCBnaXRJbWdFbGUgPSBkb21FbGVHZW4ubWFrZUVsZShcImFcIiwgXCJcIiwgZ2l0QW5jQXRyKTtcbiAgICBnaXRJbWdXcmFwLmFwcGVuZENoaWxkKGdpdEltZ0VsZSk7XG5cbiAgICBsZXQgZ2l0TG9nb0F0ciA9IFtbXCJzcmNcIiwgaW1hZ2VBc3NldHMuZ2l0SW1nXSwgW1wiYWx0XCIsIFwiZ2l0aHViIGxvZ29cIl0sIFtcImNsYXNzXCIsIFwiZ2l0X2ltZ1wiXV1cbiAgICBsZXQgZ2l0TG9nb0VsZSA9IGRvbUVsZUdlbi5tYWtlRWxlKFwiaW1nXCIsIFwiXCIsIGdpdExvZ29BdHIpO1xuICAgIGxldCBnaXRUZXh0RWxlID0gZG9tRWxlR2VuLm1ha2VFbGUoXCJwXCIsIFwiQ3JlYXRlZCBieSAtIERhdmlkIFQuXCIpXG4gICAgZ2l0SW1nRWxlLmFwcGVuZENoaWxkKGdpdFRleHRFbGUpO1xuICAgIGdpdEltZ0VsZS5hcHBlbmRDaGlsZChnaXRMb2dvRWxlKTtcblxuICAgIHJldHVybiBlbGU7XG59XG5cbmxldCBzbGlkZXJFbGUgPSAoZWxlKSA9PiB7XG4gICAgbGV0IHNsaWRlV3JhcCA9IGRvbUVsZUdlbi5tYWtlRWxlKFwiZGl2XCIsIFwiXCIsIFtcImNsYXNzXCIsIFwic2xpZGVyX3dyYXBcIl0pO1xuICAgIGVsZS5hcHBlbmRDaGlsZChzbGlkZVdyYXApO1xuXG4gICAgbGV0IGxBcnJvdyA9IGRvbUVsZUdlbi5tYWtlRWxlKFwiZGl2XCIsIFwiXCIsIFtcImNsYXNzXCIsIFwibGVmdF9hcnJvd1wiXSk7XG4gICAgc2xpZGVXcmFwLmFwcGVuZENoaWxkKGxBcnJvdyk7XG5cbiAgICBsZXQgbEFycm93QXJyID0gW1tcInNyY1wiLCBpbWFnZUFzc2V0cy5sZWZ0QXJyb3dJbWddLCBbXCJhbHRcIiwgXCJsZWZ0IGFycm93IGljb25cIl1dO1xuICAgIGxldCBsQXJySW1nID0gZG9tRWxlR2VuLm1ha2VFbGUoXCJpbWdcIiwgXCJcIiwgbEFycm93QXJyKTtcbiAgICBsQXJyb3cuYXBwZW5kQ2hpbGQobEFyckltZyk7XG5cbiAgICBcbiAgICBsZXQgaW1nQ250RWxlID0gZG9tRWxlR2VuLm1ha2VFbGUoXCJkaXZcIiwgXCJcIiwgW1wiY2xhc3NcIiwgXCJpbWdfY29udGFpbmVyXCJdKTtcbiAgICBzbGlkZVdyYXAuYXBwZW5kQ2hpbGQoaW1nQ250RWxlKTtcbiAgICBcbiAgICBsZXQgaW1hZ2VPYmpBcnIgPSBbLi4uaW1hZ2VBc3NldHMuaW1nT2JqXTtcbiAgICBnZW5JbWcoaW1hZ2VPYmpBcnIsIGltZ0NudEVsZSk7XG4gICAgXG4gICAgbGV0IHJBcnJvdyA9IGRvbUVsZUdlbi5tYWtlRWxlKFwiZGl2XCIsIFwiXCIsIFtcImNsYXNzXCIsIFwicmlnaHRfYXJyb3dcIl0pO1xuICAgIHNsaWRlV3JhcC5hcHBlbmRDaGlsZChyQXJyb3cpO1xuICAgIFxuICAgIGxldCByQXJyb3dBcnIgPSBbW1wic3JjXCIsIGltYWdlQXNzZXRzLnJpZ2h0QXJyb3dJbWddLCBbXCJhbHRcIiwgXCJyaWdodCBhcnJvdyBpY29uXCJdXTtcbiAgICBsZXQgckFyckltZyA9IGRvbUVsZUdlbi5tYWtlRWxlKFwiaW1nXCIsIFwiXCIsIHJBcnJvd0Fycik7XG4gICAgckFycm93LmFwcGVuZENoaWxkKHJBcnJJbWcpO1xuICAgIFxuICAgIGxBcnJJbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByZXZJbWcpO1xuICAgIHJBcnJJbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5leHRJbWcpO1xuXG4gICAgc2V0SW50ZXJ2YWwobmV4dEltZywgNTAwMClcblxuICAgIGdlbkJ1YihzbGlkZVdyYXApO1xuXG4gICAgcmV0dXJuIHNsaWRlV3JhcDtcbn1cblxubGV0IGdlbkltZyA9IChhcnIsIGVsZSkgPT4ge1xuICAgIGZvciAobGV0IGkgaW4gYXJyKXtcbiAgICAgICAgbGV0IGRpdkFyciA9IFtdO1xuXG4gICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgIGRpdkFyciA9IFtbXCJjbGFzc1wiLCBgc2hvd2BdXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpdkFyciA9IFtbXCJjbGFzc1wiLCBgaGlkZWBdXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBuZXdEaXYgPSBkb21FbGVHZW4ubWFrZUVsZShcImRpdlwiLCBcIlwiLCBkaXZBcnIpO1xuXG4gICAgICAgIGxldCBkaXZJbWdBcnIgPSBbW1wic3JjXCIsIGFycltpXS5pbWddXTtcbiAgICAgICAgbGV0IGRpdkltZyA9IGRvbUVsZUdlbi5tYWtlRWxlKFwiaW1nXCIsIFwiXCIsIGRpdkltZ0Fycik7XG4gICAgICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChkaXZJbWcpO1xuXG4gICAgICAgIGxldCBwQW5jQXJyT25lID0gW1tcInRhcmdldFwiLCBcIl9ibGFua1wiXSwgW1wiaHJlZlwiLCBhcnJbaV0ubGlua11dXG4gICAgICAgIGxldCBwQW5jQXJyVHdvID0gW1tcInRhcmdldFwiLCBcIl9ibGFua1wiXSwgW1wiaHJlZlwiLCBhcnJbaV0udW5zcGxhc2hdXVxuICAgICAgICBsZXQgcEFuY09uZSA9IGRvbUVsZUdlbi5tYWtlRWxlKFwiYVwiLCBhcnJbaV0ub3duZXIsIHBBbmNBcnJPbmUpXG4gICAgICAgIGxldCBwQW5jVHdvID0gZG9tRWxlR2VuLm1ha2VFbGUoXCJhXCIsIFwiVW5zcGxhc2hcIiwgcEFuY0FyclR3bylcbiAgICAgICAgbGV0IHBFbGUgPSBkb21FbGVHZW4ubWFrZUVsZShcInBcIiwgXCJQaG90byBCeSBcIik7XG4gICAgICAgIHBFbGUuYXBwZW5kQ2hpbGQocEFuY09uZSk7XG4gICAgICAgIHBFbGUuYXBwZW5kKFwiIG9uIFwiKTtcbiAgICAgICAgcEVsZS5hcHBlbmRDaGlsZChwQW5jVHdvKTtcbiAgICAgICAgbmV3RGl2LmFwcGVuZENoaWxkKHBFbGUpXG5cbiAgICAgICAgZWxlLmFwcGVuZENoaWxkKG5ld0Rpdik7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xufVxuXG5sZXQgZ2VuQnViID0gKGVsZSkgPT4ge1xuICAgIGxldCBidWJFbGUgPSBkb21FbGVHZW4ubWFrZUVsZShcImRpdlwiLCBcIlwiLCBbXCJjbGFzc1wiLCBcImltZ19idWJibGVzXCJdKTtcbiAgICBlbGUuYXBwZW5kQ2hpbGQoYnViRWxlKTtcblxuICAgIGxldCBpbWdDb250aW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW1nX2NvbnRhaW5lclwiKVxuICAgIGxldCBpbWdDb3VudCA9IGltZ0NvbnRpbmVyLmNoaWxkTm9kZXMubGVuZ3RoO1xuICAgIGNvbnNvbGUubG9nKFwiVGhlIGltYWdlIGNvdW50IGlzXCIsIGltZ0NvdW50KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1nQ291bnQ7IGkrKyl7XG4gICAgICAgIGxldCBpbWdTcmMgPSBpbWFnZUFzc2V0cy5idWJibGVGdWxsSW1nO1xuICAgICAgICBcbiAgICAgICAgaWYgKGkgPiAwKXtcbiAgICAgICAgICAgIGltZ1NyYyA9IGltYWdlQXNzZXRzLmJ1YmJsZUVtcHR5SW1nO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQgaW1nRWxlID0gZG9tRWxlR2VuLm1ha2VFbGUoXCJpbWdcIiwgXCJcIiwgW1tcInNyY1wiLCBpbWdTcmNdLCBbXCJhbHRcIiwgXCJidWJibGUgZm9yIHN3aXRjaGluZyBpbWFnZXNcIl0sIFtcImNsYXNzXCIsIGBpdGVtXyR7aX1gXV0pXG5cbiAgICAgICAgaW1nRWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgYnViSW1nU3dpdGNoKGUpO1xuICAgICAgICAgICAgYnViUGljU3dpdGNoKGUpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGJ1YkVsZS5hcHBlbmRDaGlsZChpbWdFbGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1YkVsZTtcbn1cblxuKCgpID0+IHtcbiAgICBwYWdlUmVuZGVyKCk7XG59KSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==