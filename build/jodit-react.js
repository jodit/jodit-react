(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("jodit"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "jodit"], factory);
	else if(typeof exports === 'object')
		exports["JoditEditor"] = factory(require("react"), require("jodit"));
	else
		root["JoditEditor"] = factory(root["React"], root["jodit"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _JoditEditor = __webpack_require__(1);

var _JoditEditor2 = _interopRequireDefault(_JoditEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _JoditEditor2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _jodit = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JoditEditor = function (_Component) {
    _inherits(JoditEditor, _Component);

    /**
     *Jodit editor
     *
     * @name JoditEditor#editor
     * @type Jodit
     */
    function JoditEditor(props) {
        _classCallCheck(this, JoditEditor);

        var _this = _possibleConstructorReturn(this, (JoditEditor.__proto__ || Object.getPrototypeOf(JoditEditor)).call(this, props));

        _this.oldConfig = {};

        _this.changeListener = function (value) {
            _this.state.value = value;
            if (typeof _this.state.onChange === 'function') {
                _this.state.onChange(value);
            }
        };

        _this.state = {
            value: props.value || '',
            config: props.config || {},
            onChange: props.onChange
        };

        _this.oldConfig = _this.state.config;
        return _this;
    }

    _createClass(JoditEditor, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.createEditor();
        }
    }, {
        key: 'createEditor',
        value: function createEditor() {
            this.editor && this.editor.destruct();
            this.editor = new _jodit.Jodit(this.refs.element, this.props.config);

            if (this.props.editorRef && typeof this.props.editorRef === 'function') {
                this.props.editorRef(this.editor);
            }

            this.editor.value = this.state.value;
            this.editor.events.on('change', this.changeListener);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.editor && this.editor.destruct();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (this.oldConfig !== this.props.config) {
                this.oldConfig = this.props.config;
                this.createEditor();
            }

            if (JSON.stringify(this.editor.value) === JSON.stringify(this.props.value)) {
                return;
            }

            this.editor.value = this.props.value;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('textarea', { ref: 'element' });
        }
    }]);

    return JoditEditor;
}(_react.Component);

exports.default = JoditEditor;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyOTMwZTRmNTM0MGUxZGI2NGU5NSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pvZGl0RWRpdG9yLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCBcImpvZGl0XCIiXSwibmFtZXMiOlsiSm9kaXRFZGl0b3IiLCJwcm9wcyIsIm9sZENvbmZpZyIsImNoYW5nZUxpc3RlbmVyIiwidmFsdWUiLCJzdGF0ZSIsIm9uQ2hhbmdlIiwiY29uZmlnIiwiY3JlYXRlRWRpdG9yIiwiZWRpdG9yIiwiZGVzdHJ1Y3QiLCJKb2RpdCIsInJlZnMiLCJlbGVtZW50IiwiZWRpdG9yUmVmIiwiZXZlbnRzIiwib24iLCJKU09OIiwic3RyaW5naWZ5IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdEQTs7Ozs7O2tCQUVlQSxxQjs7Ozs7Ozs7Ozs7Ozs7O0FDRmY7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsVzs7O0FBQ2pCOzs7Ozs7QUFTQSx5QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhIQUNUQSxLQURTOztBQUFBLGNBRm5CQyxTQUVtQixHQUZQLEVBRU87O0FBQUEsY0FZbkJDLGNBWm1CLEdBWUYsVUFBQ0MsS0FBRCxFQUFXO0FBQ3hCLGtCQUFLQyxLQUFMLENBQVdELEtBQVgsR0FBbUJBLEtBQW5CO0FBQ0EsZ0JBQUksT0FBTyxNQUFLQyxLQUFMLENBQVdDLFFBQWxCLEtBQStCLFVBQW5DLEVBQStDO0FBQzNDLHNCQUFLRCxLQUFMLENBQVdDLFFBQVgsQ0FBb0JGLEtBQXBCO0FBQ0g7QUFDSixTQWpCa0I7O0FBR2YsY0FBS0MsS0FBTCxHQUFhO0FBQ1RELG1CQUFPSCxNQUFNRyxLQUFOLElBQWUsRUFEYjtBQUVURyxvQkFBUU4sTUFBTU0sTUFBTixJQUFnQixFQUZmO0FBR1RELHNCQUFVTCxNQUFNSztBQUhQLFNBQWI7O0FBTUEsY0FBS0osU0FBTCxHQUFpQixNQUFLRyxLQUFMLENBQVdFLE1BQTVCO0FBVGU7QUFVbEI7Ozs7NENBU29CO0FBQ2pCLGlCQUFLQyxZQUFMO0FBQ0g7Ozt1Q0FFYztBQUNYLGlCQUFLQyxNQUFMLElBQWUsS0FBS0EsTUFBTCxDQUFZQyxRQUFaLEVBQWY7QUFDQSxpQkFBS0QsTUFBTCxHQUFjLElBQUlFLFlBQUosQ0FBVSxLQUFLQyxJQUFMLENBQVVDLE9BQXBCLEVBQTZCLEtBQUtaLEtBQUwsQ0FBV00sTUFBeEMsQ0FBZDs7QUFFQSxnQkFBSSxLQUFLTixLQUFMLENBQVdhLFNBQVgsSUFBd0IsT0FBTyxLQUFLYixLQUFMLENBQVdhLFNBQWxCLEtBQWdDLFVBQTVELEVBQXdFO0FBQ3BFLHFCQUFLYixLQUFMLENBQVdhLFNBQVgsQ0FBcUIsS0FBS0wsTUFBMUI7QUFDSDs7QUFFRCxpQkFBS0EsTUFBTCxDQUFZTCxLQUFaLEdBQW9CLEtBQUtDLEtBQUwsQ0FBV0QsS0FBL0I7QUFDQSxpQkFBS0ssTUFBTCxDQUFZTSxNQUFaLENBQW1CQyxFQUFuQixDQUFzQixRQUF0QixFQUFnQyxLQUFLYixjQUFyQztBQUNIOzs7K0NBRXVCO0FBQ3BCLGlCQUFLTSxNQUFMLElBQWUsS0FBS0EsTUFBTCxDQUFZQyxRQUFaLEVBQWY7QUFDSDs7OzZDQUVxQjtBQUNsQixnQkFBSSxLQUFLUixTQUFMLEtBQW1CLEtBQUtELEtBQUwsQ0FBV00sTUFBbEMsRUFBMEM7QUFDdEMscUJBQUtMLFNBQUwsR0FBaUIsS0FBS0QsS0FBTCxDQUFXTSxNQUE1QjtBQUNBLHFCQUFLQyxZQUFMO0FBQ0g7O0FBRUQsZ0JBQUlTLEtBQUtDLFNBQUwsQ0FBZSxLQUFLVCxNQUFMLENBQVlMLEtBQTNCLE1BQXNDYSxLQUFLQyxTQUFMLENBQWUsS0FBS2pCLEtBQUwsQ0FBV0csS0FBMUIsQ0FBMUMsRUFBNEU7QUFDeEU7QUFDSDs7QUFFRCxpQkFBS0ssTUFBTCxDQUFZTCxLQUFaLEdBQW9CLEtBQUtILEtBQUwsQ0FBV0csS0FBL0I7QUFDSDs7O2lDQUVRO0FBQ0wsbUJBQU8sNENBQVUsS0FBSSxTQUFkLEdBQVA7QUFDSDs7OztFQWhFb0NlLGdCOztrQkFBcEJuQixXOzs7Ozs7QUNIckIsK0M7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6ImpvZGl0LXJlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJqb2RpdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiLCBcImpvZGl0XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkpvZGl0RWRpdG9yXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJqb2RpdFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiSm9kaXRFZGl0b3JcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSwgcm9vdFtcImpvZGl0XCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMjkzMGU0ZjUzNDBlMWRiNjRlOTUiLCJpbXBvcnQgSm9kaXRFZGl0b3IgZnJvbSAnLi9Kb2RpdEVkaXRvcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBKb2RpdEVkaXRvcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBKb2RpdCB9IGZyb20gJ2pvZGl0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSm9kaXRFZGl0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLyoqXHJcbiAgICAgKkpvZGl0IGVkaXRvclxyXG4gICAgICpcclxuICAgICAqIEBuYW1lIEpvZGl0RWRpdG9yI2VkaXRvclxyXG4gICAgICogQHR5cGUgSm9kaXRcclxuICAgICAqL1xyXG4gICAgZWRpdG9yO1xyXG4gICAgb2xkQ29uZmlnID0ge307XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBwcm9wcy52YWx1ZSB8fCAnJyxcclxuICAgICAgICAgICAgY29uZmlnOiBwcm9wcy5jb25maWcgfHwge30sXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBwcm9wcy5vbkNoYW5nZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMub2xkQ29uZmlnID0gdGhpcy5zdGF0ZS5jb25maWc7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlTGlzdGVuZXIgPSAodmFsdWUpID0+IHtcclxuICAgICAgICB0aGlzLnN0YXRlLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnN0YXRlLm9uQ2hhbmdlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUub25DaGFuZ2UodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQgKCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlRWRpdG9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRWRpdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZWRpdG9yICYmIHRoaXMuZWRpdG9yLmRlc3RydWN0KCk7XHJcbiAgICAgICAgdGhpcy5lZGl0b3IgPSBuZXcgSm9kaXQodGhpcy5yZWZzLmVsZW1lbnQsIHRoaXMucHJvcHMuY29uZmlnKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZWRpdG9yUmVmICYmIHR5cGVvZiB0aGlzLnByb3BzLmVkaXRvclJlZiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmVkaXRvclJlZih0aGlzLmVkaXRvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmVkaXRvci52YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XHJcbiAgICAgICAgdGhpcy5lZGl0b3IuZXZlbnRzLm9uKCdjaGFuZ2UnLCB0aGlzLmNoYW5nZUxpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0b3IgJiYgdGhpcy5lZGl0b3IuZGVzdHJ1Y3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUgKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm9sZENvbmZpZyAhPT0gdGhpcy5wcm9wcy5jb25maWcpIHtcclxuICAgICAgICAgICAgdGhpcy5vbGRDb25maWcgPSB0aGlzLnByb3BzLmNvbmZpZztcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVFZGl0b3IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChKU09OLnN0cmluZ2lmeSh0aGlzLmVkaXRvci52YWx1ZSkgPT09IEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZWRpdG9yLnZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDx0ZXh0YXJlYSByZWY9XCJlbGVtZW50XCI+PC90ZXh0YXJlYT5cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvSm9kaXRFZGl0b3IuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJjb21tb25qc1wiOlwicmVhY3RcIixcImFtZFwiOlwicmVhY3RcIn1cbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImpvZGl0XCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==