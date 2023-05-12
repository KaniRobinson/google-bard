/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Tray.js":
/*!*********************!*\
  !*** ./src/Tray.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _default)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\nvar _default = /*#__PURE__*/function () {\n  function _default(application) {\n    _classCallCheck(this, _default);\n    this.application = application;\n  }\n  _createClass(_default, [{\n    key: \"getBounds\",\n    value: function getBounds() {\n      if (!this.tray) return;\n      return this.tray.getBounds();\n    }\n  }, {\n    key: \"create\",\n    value: function create() {\n      var _this = this;\n      this.tray = new electron__WEBPACK_IMPORTED_MODULE_1__.Tray(path__WEBPACK_IMPORTED_MODULE_0___default().join(__dirname, 'icon.png'), 'Google Bard');\n      this.tray.on('click', function () {\n        return _this.application.getBrowser().toggle();\n      });\n      return this;\n    }\n  }]);\n  return _default;\n}();\n\n\n//# sourceURL=webpack://bard-mac/./src/Tray.js?");

/***/ }),

/***/ "./src/application.js":
/*!****************************!*\
  !*** ./src/application.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _default)\n/* harmony export */ });\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser */ \"./src/browser.js\");\n/* harmony import */ var _Tray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tray */ \"./src/Tray.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\n\nvar _default = /*#__PURE__*/function () {\n  function _default(app) {\n    _classCallCheck(this, _default);\n    this.app = app;\n    this.browser = null;\n    this.tray = null;\n  }\n  _createClass(_default, [{\n    key: \"onReady\",\n    value: function onReady() {\n      this.tray = new _Tray__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this).create();\n      this.browser = new _browser__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this).setUrl(\"file://\".concat(__dirname, \"/index.html\")).create();\n    }\n  }, {\n    key: \"onWindowAllClosed\",\n    value: function onWindowAllClosed() {\n      if (process.platform === 'darwin') return;\n      return this.app.quit();\n    }\n  }, {\n    key: \"onActivate\",\n    value: function onActivate() {\n      if (electron__WEBPACK_IMPORTED_MODULE_0__.BrowserWindow.getAllWindows().length) return;\n      this.onReady();\n    }\n  }, {\n    key: \"getBrowser\",\n    value: function getBrowser() {\n      return this.browser;\n    }\n  }, {\n    key: \"getTray\",\n    value: function getTray() {\n      return this.tray;\n    }\n  }, {\n    key: \"create\",\n    value: function create() {\n      this.app.dock.hide();\n      this.app.on('ready', this.onReady.bind(this));\n      this.app.on('window-all-closed', this.onWindowAllClosed.bind(this));\n      this.app.on('activate', this.onActivate.bind(this));\n    }\n  }]);\n  return _default;\n}();\n\n\n//# sourceURL=webpack://bard-mac/./src/application.js?");

/***/ }),

/***/ "./src/browser.js":
/*!************************!*\
  !*** ./src/browser.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _default)\n/* harmony export */ });\n/* harmony import */ var electron_traywindow_positioner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron-traywindow-positioner */ \"./node_modules/electron-traywindow-positioner/index.js\");\n/* harmony import */ var electron_traywindow_positioner__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron_traywindow_positioner__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\nvar _default = /*#__PURE__*/function () {\n  function _default(application) {\n    _classCallCheck(this, _default);\n    this.application = application;\n    this.mainWindow = null;\n    this.devtools = false;\n    this.url = \"file://\".concat(__dirname, \"/index.html\");\n    this.options = {\n      width: 450,\n      height: 650,\n      title: 'Google Bard',\n      type: 'overlay',\n      showOnAllWorkspaces: true,\n      preloadWindow: true,\n      alwaysOnTop: true,\n      transparent: true,\n      showDockIcon: false,\n      resizable: false,\n      frame: false,\n      show: false,\n      webPreferences: {\n        backgroundThrottling: false,\n        nodeIntegration: true,\n        webviewTag: true\n      }\n    };\n  }\n  _createClass(_default, [{\n    key: \"setOptions\",\n    value: function setOptions() {\n      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n      this.options = _objectSpread(_objectSpread({}, this.options), options);\n      return this;\n    }\n  }, {\n    key: \"setUrl\",\n    value: function setUrl() {\n      var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n      this.url = url || this.url;\n      return this;\n    }\n  }, {\n    key: \"toggle\",\n    value: function toggle() {\n      if (this.mainWindow.isVisible()) return this.mainWindow.hide();\n      electron_traywindow_positioner__WEBPACK_IMPORTED_MODULE_0___default().position(this.mainWindow, this.application.getTray().getBounds());\n      return this.mainWindow.show();\n    }\n  }, {\n    key: \"withDevtools\",\n    value: function withDevtools() {\n      this.devtools = true;\n      return this;\n    }\n  }, {\n    key: \"create\",\n    value: function create() {\n      var _this = this;\n      this.mainWindow = new electron__WEBPACK_IMPORTED_MODULE_1__.BrowserWindow(this.options);\n      this.mainWindow.loadURL(this.url);\n      if (this.devtools) this.mainWindow.webContents.openDevTools();\n      this.mainWindow.on('blur', function () {\n        return _this.toggle();\n      });\n      return this;\n    }\n  }]);\n  return _default;\n}();\n\n\n//# sourceURL=webpack://bard-mac/./src/browser.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./application */ \"./src/application.js\");\n\n\nnew _application__WEBPACK_IMPORTED_MODULE_1__[\"default\"](electron__WEBPACK_IMPORTED_MODULE_0__.app).create();\n\n//# sourceURL=webpack://bard-mac/./src/index.js?");

/***/ }),

/***/ "./node_modules/electron-traywindow-positioner/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/electron-traywindow-positioner/index.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const positioner = {\n  /**\n   * Calculates the position of the tray window\n   *\n   * @param {Rectangle} trayBounds - tray bounds from electron Tray\n   * @return {string} - the position of the taskbar (top|right|bottom|left)\n   */\n  getTaskbarPosition(trayBounds) {\n    const display = this._getDisplay(trayBounds);\n\n    if (display.workArea.y > display.bounds.y) {\n      return 'top';\n    }\n\n    if (display.workArea.x > display.bounds.x) {\n      return 'left';\n    }\n\n    if (display.workArea.width === display.bounds.width) {\n      return 'bottom';\n    }\n\n    return 'right';\n  },\n\n  /**\n   * Calculates the position of the tray window\n   *\n   * @param {Rectangle} windowBounds - electron BrowserWindow bounds of tray window to position\n   * @param {Rectangle} trayBounds - tray bounds from electron Tray\n   * @param {Object} [alignment] - alignment of window to tray\n   * @param {string} [alignment.x] - x align if tray bar is on top or bottom (left|center|right),\n      default: center\n   * @param {string} [alignment.y] - y align if tray bar is left or right (up|middle|down),\n      default: down\n   * @return {Point} - Calculated point {x, y} where the window should be positioned\n   */\n  calculate(windowBounds, trayBounds, alignment) {\n    let tb;\n    if (this._getPlatform() === 'linux') {\n      tb = { width: 0, height: 0, ...this._getCursorPosition() };\n    } else {\n      tb = trayBounds;\n    }\n\n    const _alignment = alignment || {};\n    const taskbarPosition = this.getTaskbarPosition(tb);\n    const display = this._getDisplay(tb);\n    let x;\n    let y;\n\n    switch (taskbarPosition) {\n      case 'left':\n        x = display.workArea.x;\n        y = this._calculateYAlign(windowBounds, tb, _alignment.y);\n        break;\n      case 'right':\n        x = display.workArea.width - windowBounds.width;\n        y = this._calculateYAlign(windowBounds, tb, _alignment.y);\n        break;\n      case 'bottom':\n        x = this._calculateXAlign(windowBounds, tb, _alignment.x);\n        y = display.workArea.height - windowBounds.height;\n        break;\n      case 'top':\n      default:\n        x = this._calculateXAlign(windowBounds, tb, _alignment.x);\n        y = display.workArea.y;\n    }\n\n    return { x, y };\n  },\n\n  /**\n   * Calculates the position of the tray window\n   *\n   * @param {BrowserWindow} window - window to position\n   * @param {Rectangle} trayBounds - tray bounds from electron Tray\n   * @param {Object} [alignment] - alignment of window to tray\n   * @param {string} [alignment.x] - x align if tray bar is on top or bottom (left|center|right),\n      default: center\n   * @param {string} [alignment.y] - y align if tray bar is left or right (up|middle|down),\n      default: down\n   * @return {Void}\n   */\n  position(window, trayBounds, alignment) {\n    const position = this.calculate(window.getBounds(), trayBounds, alignment);\n    window.setPosition(position.x, position.y, false);\n  },\n\n  /**\n   * Calculates the x position of the tray window\n   *\n   * @param {Rectangle} windowBounds - electron BrowserWindow bounds of tray window to position\n   * @param {Rectangle} trayBounds - tray bounds from electron Tray.getBounds()\n   * @param {string} [align] - align left|center|right, default: center\n   * @return {integer} - calculated x position\n   */\n  _calculateXAlign(windowBounds, trayBounds, align) {\n    const display = this._getDisplay(trayBounds);\n    let x;\n\n    function alignLeft() {\n      return trayBounds.x + trayBounds.width - windowBounds.width;\n    }\n\n    function alignRight() {\n      return trayBounds.x;\n    }\n\n    switch (align) {\n      case 'right':\n        x = alignRight();\n        break;\n      case 'left':\n        x = alignLeft();\n        break;\n      case 'center':\n      default:\n        x = Math.round(trayBounds.x + (trayBounds.width / 2) - (windowBounds.width / 2));\n    }\n\n    if ((x + windowBounds.width) > (display.bounds.width + display.bounds.x) && align !== 'left') {\n      // if window would overlap on right side align it left\n      x = alignLeft();\n    } else if (x < display.bounds.x && align !== 'right') {\n      // if window would overlap on the left side align it right\n      x = alignRight();\n    }\n\n    return x;\n  },\n\n  /**\n   * Calculates the y position of the tray window\n   *\n   * @param {Rectangle} windowBounds - electron BrowserWindow bounds\n   * @param {Rectangle} trayBounds - tray bounds from electron Tray.getBounds()\n   * @param {string} [align] - align up|middle|down, default: down\n   * @return {integer} - calculated y position\n   */\n  _calculateYAlign(windowBounds, trayBounds, align) {\n    const display = this._getDisplay(trayBounds);\n    let y;\n\n    function alignUp() {\n      return trayBounds.y + trayBounds.height - windowBounds.height;\n    }\n\n    function alignDown() {\n      return trayBounds.y;\n    }\n\n    switch (align) {\n      case 'up':\n        y = alignUp();\n        break;\n      case 'center':\n        y = Math.round((trayBounds.y + (trayBounds.height / 2)) - (windowBounds.height / 2));\n        break;\n      case 'down':\n      default:\n        y = alignDown();\n    }\n\n    if (y + windowBounds.height > display.bounds.height && align !== 'up') {\n      y = alignUp();\n    } else if (y < 0 && align !== 'down') {\n      y = alignDown();\n    }\n\n    return y;\n  },\n\n  /**\n   * Calculates the position of the tray window based on current cursor position\n   * This method is used on linux where trayBounds are not available\n   *\n   * @param {Rectangle} windowBounds - electron BrowserWindow bounds of tray window to position\n   * @param {Eelectron.Display} display - display on which the cursor is currently\n   * @param {Point} cursor - current cursor position\n   * @return {Point} - Calculated point {x, y} where the window should be positioned\n   */\n  _calculateByCursorPosition(windowBounds, display, cursor) {\n    // TODO pixtron - this method seems to not be used anymore\n    let { x, y } = cursor;\n\n    if (x + windowBounds.width > display.bounds.width) {\n      // if window would overlap on right side of screen, align it to the left of the cursor\n      x -= windowBounds.width;\n    }\n\n    if (y + windowBounds.height > display.bounds.height) {\n      // if window would overlap at bottom of screen, align it up from cursor position\n      y -= windowBounds.height;\n    }\n\n    return { x, y };\n  },\n\n  /**\n   * Returns `process.platform`\n   *\n   * @return {string} - the platform electron is running on\n   */\n  _getPlatform() {\n    return process.platform;\n  },\n\n  _getScreen() {\n    if (this.screen) return this.screen;\n\n    // requireing electron.screen here so this dependency can be mocked easily\n    /* eslint-disable global-require,import/no-unresolved,import/no-extraneous-dependencies */\n    this.screen = (__webpack_require__(/*! electron */ \"electron\").screen);\n    /* eslint-enable global-require,import/no-unresolved,import/no-extraneous-dependencies */\n    return this.screen;\n  },\n\n  _getCursorPosition() {\n    const screen = this._getScreen();\n    return screen.getCursorScreenPoint();\n  },\n\n  /**\n   * Get the display nearest the current cursor position\n   *\n   * @param {Rectangle} trayBounds - tray bounds from electron Tray\n   * @return {Electron.Display} - the display closest to the current cursor position\n   */\n  _getDisplay(trayBounds) {\n    const screen = this._getScreen();\n    return screen.getDisplayNearestPoint((({ x, y }) => ({ x, y }))(trayBounds));\n  },\n};\n\nmodule.exports = positioner;\n\n\n//# sourceURL=webpack://bard-mac/./node_modules/electron-traywindow-positioner/index.js?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("electron");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;