/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/tavern2x.jpg */ \"./src/images/tavern2x.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n    --accent-color: #F2794E;\n    --text-color: /*#025948*/ #24A68C;\n    --border-color: #A64724;\n    --background-color: #59200B;\n}\n\nhtml {\n    height: 100%;\n    padding: 0;\n    margin: 0;\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    min-height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 40px;\n} \n\nheader {\n    position: relative;\n}\n\n.tabContainer {\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n    left: 50%;\n    top: 0;\n    transform: translateX(-50%);\n}\n\n.navButton {\n    font-size: 1.5em;\n    border: none;\n    background-color: var(--background-color);\n    transition: transform 0.3s;\n    height: 85px;\n    width: 7vw;\n    padding: 0;\n    font-weight: 800;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border-radius: 0px 0px 4px 4px;\n    color: var(--accent-color);\n    border: 2px solid var(--border-color);\n    border-top: none;\n}\n\n.navButton:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n}\n\nheader img {\n    position: absolute;\n    top: 90%;\n    width: 7vw;\n}\n\n#content {\n    margin-top: 100px;\n    display: flex;\n    width: 50%;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--background-color);\n    border-radius: 5px 5px 5px 5px;\n    border: 2px solid var(--border-color);\n    margin-bottom: 50px;\n    flex-direction: column;\n    padding: 20px;\n    gap: 20px;\n}\n\n.sub-header {\n    font-size: 50px;\n    width: 100%;\n    padding: 20px;\n    text-align: center;\n    color: var(--accent-color);\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n}\n\n.image-container {\n    display: flex;\n    justify-content: space-around;\n}\n\n.image-container img{\n    width: 35%;\n    height: auto;\n    border-radius: 7px 7px 7px 7px;\n    border: 1px solid var(--border-color);\n}\n\n.image {\n    width: 50%;\n    height: auto;\n}\n\n.sub-section {\n    font-size: 20px;\n    text-align: left;\n    border: 2px solid var(--border-color);\n    border-radius: 5px;\n    padding: 10px;\n}\n\n.menu {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 20px;\n    column-gap: 75px;\n}\n\n.food-container {\n    border: 2px solid var(--border-color);\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n    border-radius: 5px;\n}\n\n.food-name {\n    color: var(--accent-color);\n    font-size: 1.6em;\n}\n\n.menu p {\n    color: var(--text-color);\n    font-size: 1.2em;\n}\n\n.menu p span {\n    font-weight: 900;\n}\n\n\n@media only screen and (max-width: 600px) {\n    .tabContainer button  {\n        width: 20vw;\n    }\n\n    .navButton img {\n        width: 20vw;\n    }\n\n    .navButton {font-size: 1.4em;}\n\n    #content {\n        width: 80%;\n    }\n\n    body {\n        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n        background-position: center;\n    }\n  }`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_Zug_Zug_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/Zug-Zug.jpg */ \"./src/images/Zug-Zug.jpg\");\n/* harmony import */ var _images_robby_flay_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/robby-flay.jpg */ \"./src/images/robby-flay.jpg\");\n/* harmony import */ var _paragraphHolder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paragraphHolder */ \"./src/paragraphHolder.js\");\n/* harmony import */ var _imageCreater__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imageCreater */ \"./src/imageCreater.js\");\n/* harmony import */ var _subsection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subsection */ \"./src/subsection.js\");\n\n\n\n\n\n\nconst string1 = `In the lively port town of Booty Bay, Chef Zug, a burly orc with a passion for transforming wild game into soulful dishes, met Chef Robby Flay, a human with an innate flair for innovative culinary creations. Despite their diverse backgrounds, they bonded over their shared love for cooking. Zug, raised in the harsh wilderness of Durotar, developed a reputation among his tribe for his hearty and rustic dishes, while Robby honed his skills in Stormwind, blending flavors with finesse.`;\nconst string2 = `Tasting each other's creations, they realized the potential of their combined talents. Together, they opened a dynamic restaurant that celebrated the best of both their culinary worlds. Chef Zug's signature \"Zug's Wild Stew,\" featuring tender game meat and aromatic herbs, harmoniously complemented Chef Robby Flay's \"Flay's Fusion Medley,\" a delightful blend of Eastern Kingdoms' flavors with an innovative touch.`;\nconst string3 = `Their restaurant in Booty Bay became a melting pot of tastes, drawing patrons from all corners of Azeroth. As word spread of their unique alliance and culinary harmony, Zug and Flay earned fame as ambassadors of culinary unity, bringing together the Horde and the Alliance through the language of food.`;\n\nconst subheading = 'Meet the Cooks!'\n\nfunction homePage() {\n    const greetingDiv = (0,_subsection__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('div', 'sub-header', subheading);\n    const imageContainer = (0,_imageCreater__WEBPACK_IMPORTED_MODULE_3__.containerDiv)('div', 'image-container');\n    const orcImage = (0,_imageCreater__WEBPACK_IMPORTED_MODULE_3__.imageCreater)('image', _images_Zug_Zug_jpg__WEBPACK_IMPORTED_MODULE_0__);\n    const humanImage = (0,_imageCreater__WEBPACK_IMPORTED_MODULE_3__.imageCreater)('image', _images_robby_flay_jpg__WEBPACK_IMPORTED_MODULE_1__);\n    const introduction = (0,_subsection__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('div', 'sub-section', null)\n\n    document.querySelector('#content').appendChild(greetingDiv);\n    imageContainer.append(humanImage, orcImage);\n    greetingDiv.append(imageContainer, introduction);\n    introduction.append((0,_paragraphHolder__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(string1), (0,_paragraphHolder__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(string2), (0,_paragraphHolder__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(string3));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/imageCreater.js":
/*!*****************************!*\
  !*** ./src/imageCreater.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   containerDiv: () => (/* binding */ containerDiv),\n/* harmony export */   imageCreater: () => (/* binding */ imageCreater)\n/* harmony export */ });\nfunction imageCreater(classList, imgSource) {\n    const img = document.createElement('img');\n    img.classList.add(classList);\n    img.src = imgSource\n\n    return img\n}\n\n\nfunction containerDiv(element, className) {\n    const div = document.createElement(element);\n    div.classList.add(className);\n    return div\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/imageCreater.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _startup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startup */ \"./src/startup.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\n\n(0,_startup__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n//homePage()\n(0,_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _paragraphHolder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paragraphHolder */ \"./src/paragraphHolder.js\");\n/* harmony import */ var _tabCreater__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabCreater */ \"./src/tabCreater.js\");\n/* harmony import */ var _imageCreater__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imageCreater */ \"./src/imageCreater.js\");\n/* harmony import */ var _subsection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subsection */ \"./src/subsection.js\");\n/* harmony import */ var _images_Zug_Zug_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/Zug-Zug.jpg */ \"./src/images/Zug-Zug.jpg\");\n\n\n\n\n\n\n// paragraph(string) <-- requires string argument but appends paragraph element\n// createTabsWithImage(element, text, classList, ImageSrc) <-- element to be created with inner text, class name and image appended to it\n// subSectionCreater(element, className, subSect)\n// containerDiv(element, className)\n// imageCreater(classList, imgSource)\n\nconst menu1Description = `<span>Description:</span> A strong and energizing brew crafted by the resourceful Goblins. This potent concoction blends aromatic coffee beans with hints of caramel and vanilla, creating a flavorful pick-me-up for weary travelers.`\n\nconst menu2Description = `<span>Description:</span> A whimsical and delightful dessert straight from the inventive minds of Gnomish engineers. This sweet creation features layers of sponge cake, creamy vanilla custard, and colorful raspberry jam, topped with a dollop of whipped cream and garnished with a tiny edible gear.`\n\n\nclass newMenuItem{\n    constructor(foodName, foodPic, description) {\n        this.foodName = foodName;\n        this.foodPic = foodPic;\n        this.description = description;\n    }\n    menu() {\n        const foodContainer = (0,_imageCreater__WEBPACK_IMPORTED_MODULE_2__.containerDiv)('div', 'food-container');\n        const foodLabel = (0,_subsection__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('h2', 'food-name', this.foodName);\n        const foodimage = (0,_imageCreater__WEBPACK_IMPORTED_MODULE_2__.imageCreater)('image', this.foodPic);\n        const foodDescription = (0,_paragraphHolder__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.description);\n        foodContainer.append(foodLabel, foodimage, foodDescription);\n        return foodContainer\n    }\n\n}\n\nconst menu1 = new newMenuItem('Goblin Rocket Fuel', _images_Zug_Zug_jpg__WEBPACK_IMPORTED_MODULE_4__, menu1Description);\nconst menu2 = new newMenuItem('Gnomish Delight Dessert', _images_Zug_Zug_jpg__WEBPACK_IMPORTED_MODULE_4__, menu2Description)\nconst menu3 = new newMenuItem('peepoo', _images_Zug_Zug_jpg__WEBPACK_IMPORTED_MODULE_4__, 'I poop my pants')\n\nfunction createMenu() {\n    const menuContainer = (0,_imageCreater__WEBPACK_IMPORTED_MODULE_2__.containerDiv)('div', 'menu');\n    document.querySelector('#content').appendChild(menuContainer);\n    menuContainer.append(menu1.menu(), menu2.menu())\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/paragraphHolder.js":
/*!********************************!*\
  !*** ./src/paragraphHolder.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction paragraph(string) {\n    const pContent = document.createElement('p');\n    pContent.innerHTML = string;\n    return pContent\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (paragraph);\n\n//# sourceURL=webpack://restaurant-page/./src/paragraphHolder.js?");

/***/ }),

/***/ "./src/startup.js":
/*!************************!*\
  !*** ./src/startup.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tabCreater__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabCreater */ \"./src/tabCreater.js\");\n/* harmony import */ var _src_images_banner2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/images/banner2.png */ \"./src/images/banner2.png\");\n/* harmony import */ var _imageCreater__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imageCreater */ \"./src/imageCreater.js\");\n\n\n\n\n// createTabsWithImage takes 3 arguments (inner text of button, class of button, and image src)\n// page load module\n\nfunction tabDisplay() {\n    const content = document.querySelector('#content');\n\n    let navHeader = document.createElement('header');\n    const tabContainer = (0,_imageCreater__WEBPACK_IMPORTED_MODULE_2__.containerDiv)('nav', 'tabContainer');\n    \n    document.body.prepend(navHeader)\n    document.querySelector('header').appendChild(tabContainer);\n\n    const menuBtn = (0,_tabCreater__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button', 'Menu', 'navButton', _src_images_banner2_png__WEBPACK_IMPORTED_MODULE_1__);\n    const homeBtn = (0,_tabCreater__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button', 'Home', 'navButton', _src_images_banner2_png__WEBPACK_IMPORTED_MODULE_1__);\n    const contactBtn = (0,_tabCreater__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button', 'Contact Us', 'navButton', _src_images_banner2_png__WEBPACK_IMPORTED_MODULE_1__);\n\n    tabContainer.append(menuBtn, homeBtn, contactBtn);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabDisplay);\n\n//# sourceURL=webpack://restaurant-page/./src/startup.js?");

/***/ }),

/***/ "./src/subsection.js":
/*!***************************!*\
  !*** ./src/subsection.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction subSectionCreater(element, className, subSect) {\n    const subSection = document.createElement(element);\n    subSection.classList.add(className);\n    subSection.innerHTML = subSect;\n    return subSection\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (subSectionCreater);\n\n//# sourceURL=webpack://restaurant-page/./src/subsection.js?");

/***/ }),

/***/ "./src/tabCreater.js":
/*!***************************!*\
  !*** ./src/tabCreater.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createTabsWithImage(element, text, classList, ImageSrc) {\n    const tab = document.createElement(element);\n    tab.innerHTML = text;\n    tab.classList.add(classList);\n\n    const image = document.createElement('img');\n    image.src = ImageSrc;\n\n    tab.appendChild(image);\n    return tab\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTabsWithImage);\n\n//# sourceURL=webpack://restaurant-page/./src/tabCreater.js?");

/***/ }),

/***/ "./src/images/Zug-Zug.jpg":
/*!********************************!*\
  !*** ./src/images/Zug-Zug.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3a049c9269d7c4051edc.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/Zug-Zug.jpg?");

/***/ }),

/***/ "./src/images/banner2.png":
/*!********************************!*\
  !*** ./src/images/banner2.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d4abad7376b31447825e.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/banner2.png?");

/***/ }),

/***/ "./src/images/robby-flay.jpg":
/*!***********************************!*\
  !*** ./src/images/robby-flay.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c4ba296b9978053c9c74.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/robby-flay.jpg?");

/***/ }),

/***/ "./src/images/tavern2x.jpg":
/*!*********************************!*\
  !*** ./src/images/tavern2x.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"288d1cbf9fbe69356d93.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/tavern2x.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;