'use strict';
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self['webpackChunkcapstone_project_2'] = self['webpackChunkcapstone_project_2'] || []).push([
  ['main'],
  {
    /***/ './node_modules/css-loader/dist/cjs.js!./src/styles.css':
      /*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Poppins:wght@300;400;600;800&display=swap);"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, "*,\\r\\n*::after,\\r\\n*::before {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: \'Poppins\', sans-serif;\\r\\n}\\r\\n\\r\\nimg {\\r\\n  max-width: 100%;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  max-width: 85%;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  padding: 20px 0;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  font-size: 70px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nnav ul {\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n}\\r\\n\\r\\nnav li {\\r\\n  display: inline-block;\\r\\n  margin-left: 100px;\\r\\n}\\r\\n\\r\\n.genres {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.movies-list {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\\r\\n  gap: 40px 20px;\\r\\n  width: 100%;\\r\\n  margin-top: 50px;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.movie-item {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  row-gap: 15px;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.image-container {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.movie-title-container {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  margin-bottom: 15px;\\r\\n}\\r\\n\\r\\n.movie-title-container h2 {\\r\\n  font-size: 1rem;\\r\\n}\\r\\n\\r\\n.like-btn {\\r\\n  background-color: transparent;\\r\\n  border: none;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  column-gap: 5px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.comments-btn {\\r\\n  padding: 7px;\\r\\n  background-color: transparent;\\r\\n  border: 1px solid #000;\\r\\n  cursor: pointer;\\r\\n  transition: all 0.3s;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.comments-btn:hover {\\r\\n  background-color: #000;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  font-size: 2.5rem;\\r\\n}\\r\\n\\r\\n.popup-wrapper {\\r\\n  position: fixed;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  background-color: rgba(95, 95, 114, 0.9);\\r\\n  overflow: scroll;\\r\\n}\\r\\n\\r\\n.popup {\\r\\n  background-color: white;\\r\\n  width: 500px;\\r\\n  max-width: 80%;\\r\\n  margin: 10px auto;\\r\\n  padding: 30px;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n.popup-img {\\r\\n  width: 100%;\\r\\n  text-align: center;\\r\\n  height: 400px;\\r\\n  max-width: 100%;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n.popup-close {\\r\\n  text-align: right;\\r\\n  width: 500px;\\r\\n  max-width: 80%;\\r\\n  margin: 30px auto 0 auto;\\r\\n  color: white;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.popup-img img {\\r\\n  width: 100%;\\r\\n  height: inherit;\\r\\n}\\r\\n\\r\\n.rate {\\r\\n  color: gold;\\r\\n}\\r\\n\\r\\n.rating {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.rating span {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.hide {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n/* -------------------- Footer -------------------- */\\r\\nfooter {\\r\\n  background-color: black;\\r\\n  width: 100%;\\r\\n  padding: 50px 0;\\r\\n  margin-top: 20px;\\r\\n}\\r\\n\\r\\nfooter p {\\r\\n  font-size: 1rem;\\r\\n  font-weight: 700;\\r\\n  color: white;\\r\\n}\\r\\n", ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capstone-project-2/./src/styles.css?./node_modules/css-loader/dist/cjs.js'
        );

        /***/
      },

    /***/ './node_modules/css-loader/dist/runtime/api.js':
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
        eval(
          '\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += "}";\n      }\n      if (item[2]) {\n        content += "}";\n      }\n      if (item[4]) {\n        content += "}";\n      }\n      return content;\n    }).join("");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://capstone-project-2/./node_modules/css-loader/dist/runtime/api.js?'
        );

        /***/
      },

    /***/ './node_modules/css-loader/dist/runtime/noSourceMaps.js':
      /*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
      /***/ (module) => {
        eval(
          '\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://capstone-project-2/./node_modules/css-loader/dist/runtime/noSourceMaps.js?'
        );

        /***/
      },

    /***/ './src/styles.css':
      /*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://capstone-project-2/./src/styles.css?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js':
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://capstone-project-2/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/insertBySelector.js':
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://capstone-project-2/./node_modules/style-loader/dist/runtime/insertBySelector.js?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/insertStyleElement.js':
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://capstone-project-2/./node_modules/style-loader/dist/runtime/insertStyleElement.js?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js':
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://capstone-project-2/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/styleDomAPI.js':
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n\n  var needLayer = typeof obj.layer !== "undefined";\n\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += "}";\n  }\n\n  if (obj.media) {\n    css += "}";\n  }\n\n  if (obj.supports) {\n    css += "}";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://capstone-project-2/./node_modules/style-loader/dist/runtime/styleDomAPI.js?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/styleTagTransform.js':
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://capstone-project-2/./node_modules/style-loader/dist/runtime/styleTagTransform.js?'
        );

        /***/
      },

    /***/ './src/index.js':
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_moviesApi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/moviesApi.js */ \"./src/modules/moviesApi.js\");\n/* harmony import */ var _modules_likesManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/likesManager.js */ \"./src/modules/likesManager.js\");\n/* harmony import */ var _modules_popup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/popup.js */ \"./src/modules/popup.js\");\n/* harmony import */ var _modules_CreateElements_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/CreateElements.js */ \"./src/modules/CreateElements.js\");\n\n\n\n\n\n\n\nconst genres = document.querySelectorAll('.genres');\nconst logo = document.querySelector('.logo');\nconst moviesList = document.querySelector('.movies-list');\nconst popupElement = document.querySelector('.popup-wrapper');\n\nconst displayMovies = async (list, title = '') => {\n  const categoryTitle = document.querySelector('.title');\n  categoryTitle.innerHTML = title;\n  moviesList.innerHTML = '';\n  const data = await list;\n  const likesDataObject = await _modules_likesManager_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getMovielikesData();\n\n  data.forEach((movie) => {\n    const li = document.createElement('li');\n    li.classList.add('movie-item');\n    li.id = movie.id;\n\n    const div = document.createElement('div');\n    const button = document.createElement('button');\n    button.type = 'button';\n    button.className = 'comments-btn';\n    button.textContent = 'Comments';\n    button.id = movie.id;\n    div.appendChild(button);\n    button.addEventListener('click', () => {\n      (0,_modules_popup_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(button.id);\n    });\n\n    li.innerHTML = `\n      <div class=\"image-container\">\n        <img src=\"https://image.tmdb.org/t/p/w500${movie.poster_path}\" alt=\"poster\" />\n      </div>`;\n\n    const movieTitleContainer = _modules_CreateElements_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].createmovieTitleContainer(likesDataObject, movie);\n    li.appendChild(movieTitleContainer);\n    moviesList.appendChild(li);\n  });\n\n  const likeBtn = document.querySelectorAll('.like-btn');\n  likeBtn.forEach((btn) => {\n    btn.addEventListener('click', () => {\n      console.log('btn clicked');\n    });\n  });\n};\n\ndocument.addEventListener('DOMContentLoaded', async () => {\n  displayMovies((0,_modules_moviesApi_js__WEBPACK_IMPORTED_MODULE_1__.getTrendingMovies)(), 'Trending');\n});\n\ngenres.forEach((item) => {\n  item.addEventListener('click', () => {\n    switch (item.id) {\n      case 'action':\n        displayMovies((0,_modules_moviesApi_js__WEBPACK_IMPORTED_MODULE_1__.getGenres)(28), 'Action Movies');\n        break;\n      case 'comedy':\n        displayMovies((0,_modules_moviesApi_js__WEBPACK_IMPORTED_MODULE_1__.getGenres)(35), 'Comedy Movies');\n        break;\n      case 'animation':\n        displayMovies((0,_modules_moviesApi_js__WEBPACK_IMPORTED_MODULE_1__.getGenres)(16), 'Animations');\n        break;\n      default:\n        displayMovies((0,_modules_moviesApi_js__WEBPACK_IMPORTED_MODULE_1__.getTrendingMovies)(), 'Trending');\n    }\n  });\n});\n\nlogo.addEventListener('click', () => {\n  displayMovies((0,_modules_moviesApi_js__WEBPACK_IMPORTED_MODULE_1__.getTrendingMovies)(), 'Trending');\n});\n\npopupElement.addEventListener('click', (e) => {\n  if (\n    e.target.classList.contains('material-symbols-outlined') ||\n    e.target.classList.contains('popup-wrapper')\n  ) {\n    popupElement.classList.add('hide');\n  }\n});\n\n\n//# sourceURL=webpack://capstone-project-2/./src/index.js?"
        );

        /***/
      },

    /***/ './src/modules/CreateElementManager.js':
      /*!*********************************************!*\
  !*** ./src/modules/CreateElementManager.js ***!
  \*********************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass CreateElementManager {\n  static addClassesToElement = ({ element, classList }) => {\n    if (!classList || (Array.isArray(classList) && !classList.length)) {\n      return;\n    }\n    element.classList.add(...classList);\n  };\n\n  static addBodyToElement = ({ element, children }) => {\n    if (!children || (Array.isArray(children) && !children.length)) {\n      return;\n    }\n    element.append(...children);\n  };\n\n  static addAttributesToElement = ({ element, attributes }) => {\n    Object.keys(attributes).forEach((key) => {\n      element.setAttribute(key, attributes[key]);\n    });\n  };\n\n  static createElement = ({ tagName, children, classList, text, attributes = {} }) => {\n    const element = document.createElement(tagName);\n    CreateElementManager.addClassesToElement({ element, classList });\n    CreateElementManager.addBodyToElement({ element, children });\n    CreateElementManager.addAttributesToElement({ element, attributes });\n    if (text) {\n      element.innerHTML = text;\n    }\n    return element;\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateElementManager);\n\n\n//# sourceURL=webpack://capstone-project-2/./src/modules/CreateElementManager.js?'
        );

        /***/
      },

    /***/ './src/modules/CreateElements.js':
      /*!***************************************!*\
  !*** ./src/modules/CreateElements.js ***!
  \***************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _CreateElementManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateElementManager.js */ \"./src/modules/CreateElementManager.js\");\n\n\nclass CreateElements {\n  static createLikeBtn = (likes, movie) => {\n    const heartSvg = createElement({\n      tagName: 'span',\n      classList: ['material-symbols-outlined'],\n      text: 'favorite',\n    });\n\n    const likesCountSpan = _CreateElementManager_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n      tagName: 'span',\n      text: `${likes[movie.id]?.likes || 0} likes`,\n    });\n\n    return _CreateElementManager_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n      tagName: 'button',\n      classList: ['like-btn'],\n      children: [heartSvg, likesCountSpan],\n    });\n  };\n\n  static createmovieTitleContainer = (likes, movie) => {\n    const movieTitle = _CreateElementManager_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n      tagName: 'h2',\n      text: `${movie.name || movie.title}`,\n    });\n\n    const likeBtn = _CreateElementManager_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createLikeBtn(likes, movie);\n\n    return _CreateElementManager_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement({\n      tagName: 'div',\n      classList: ['movie-title-container'],\n      children: [movieTitle, likeBtn],\n    });\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateElements);\n\n\n//# sourceURL=webpack://capstone-project-2/./src/modules/CreateElements.js?"
        );

        /***/
      },

    /***/ './src/modules/involvementAPI.js':
      /*!***************************************!*\
  !*** ./src/modules/involvementAPI.js ***!
  \***************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createLikes\": () => (/* binding */ createLikes),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes)\n/* harmony export */ });\nconst baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';\nconst likesListId = 'd7vELbAR59v1NLTIl9t7';\n\nconst getLikes = async () => {\n  try {\n    const data = await fetch(`${baseUrl}/apps/${likesListId}/likes/`);\n    const response = await data.json();\n    return response;\n  } catch (error) {\n    return error;\n  }\n};\n\nconst createLikes = async (id) => {\n  try {\n    const response = await fetch(`${baseUrl}/apps/${likesListId}/likes/`, {\n      method: 'POST',\n      body: JSON.stringify({ item_id: id }),\n      headers: {\n        'Content-Type': 'application/json; charset=utf-8',\n      },\n    });\n\n    return response.text();\n  } catch (error) {\n    return error;\n  }\n};\n\n\n//# sourceURL=webpack://capstone-project-2/./src/modules/involvementAPI.js?"
        );

        /***/
      },

    /***/ './src/modules/likesManager.js':
      /*!*************************************!*\
  !*** ./src/modules/likesManager.js ***!
  \*************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _involvementAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involvementAPI.js */ "./src/modules/involvementAPI.js");\n\n\nclass LikesManager {\n  static getMovielikesData = async () => {\n    const likesData = await (0,_involvementAPI_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)();\n    return likesData.reduce((prev, curr) => ({ ...prev, [curr.item_id]: curr }), {});\n  };\n\n  static createMovieLikes = async (id) => {\n    const response = await (0,_involvementAPI_js__WEBPACK_IMPORTED_MODULE_0__.createLikes)(id);\n    return response;\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LikesManager);\n\n\n//# sourceURL=webpack://capstone-project-2/./src/modules/likesManager.js?'
        );

        /***/
      },

    /***/ './src/modules/moviesApi.js':
      /*!**********************************!*\
  !*** ./src/modules/moviesApi.js ***!
  \**********************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "getGenres": () => (/* binding */ getGenres),\n/* harmony export */   "getMovieWithId": () => (/* binding */ getMovieWithId),\n/* harmony export */   "getTrendingMovies": () => (/* binding */ getTrendingMovies)\n/* harmony export */ });\nconst apiKey = \'4de7975ef400d300ae019f76c489bf9f\';\nconst baseUrl = \'https://api.themoviedb.org/3\';\n\nconst getTrendingMovies = async () => {\n  try {\n    const data = await fetch(`${baseUrl}/trending/all/day?api_key=${apiKey}`);\n    const dataParsed = await data.json();\n    return dataParsed.results;\n  } catch (error) {\n    return error;\n  }\n};\n\nconst getGenres = async (id) => {\n  try {\n    const data = await fetch(\n      `https://api.themoviedb.org/3/discover/movie?api_key=4de7975ef400d300ae019f76c489bf9f&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`,\n    );\n    const res = await data.json();\n    return res.results;\n  } catch (error) {\n    return error;\n  }\n};\n\nconst getMovieWithId = async (id) => {\n  try {\n    const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4de7975ef400d300ae019f76c489bf9f&language=en-US`);\n    const response = await data.json();\n    return response;\n  } catch (error) {\n    return error;\n  }\n};\n\n\n//# sourceURL=webpack://capstone-project-2/./src/modules/moviesApi.js?'
        );

        /***/
      },

    /***/ './src/modules/popup.js':
      /*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _moviesApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moviesApi.js */ "./src/modules/moviesApi.js");\n\n\nconst popupElement = document.querySelector(\'.popup-wrapper\');\nconst popup = async (id) => {\n  const data = await (0,_moviesApi_js__WEBPACK_IMPORTED_MODULE_0__.getMovieWithId)(id);\n  popupElement.innerHTML = \'\';\n  popupElement.classList.remove(\'hide\');\n\n  const closePopup = document.createElement(\'div\');\n  closePopup.className = \'popup-close\';\n  closePopup.innerHTML = \'<span class="material-symbols-outlined">close</span>\';\n  popupElement.appendChild(closePopup);\n\n  const mainPopup = document.createElement(\'div\');\n  mainPopup.classList = \'popup\';\n  mainPopup.innerHTML = `<div class="popup-img">\n    <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="poster" />\n  </div>\n  <h1 class="popup-title">${data.original_title}</h1>\n  <div>\n    <p class="description">\n      ${data.overview}\n    </p>\n    <p>Release Date: ${data.release_date}</p>\n    <div class="rating">\n      <span class="material-symbols-outlined rate">grade</span>\n      <span>${data.vote_average}</span>\n    </div>\n  </div>`;\n\n  popupElement.appendChild(mainPopup);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popup);\n\n\n//# sourceURL=webpack://capstone-project-2/./src/modules/popup.js?'
        );

        /***/
      },
  },
  /******/ (__webpack_require__) => {
    // webpackRuntimeModules
    /******/ var __webpack_exec__ = (moduleId) =>
      __webpack_require__((__webpack_require__.s = moduleId));
    /******/ var __webpack_exports__ = __webpack_exec__('./src/index.js');
    /******/
  },
]);
