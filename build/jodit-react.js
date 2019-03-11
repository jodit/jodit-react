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

var _jodit2 = _interopRequireDefault(_jodit);

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
            this.editor = new _jodit2.default(this.refs.element, this.props.config);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzZTVmMmVmZTI4NmJmZjgyNjIyYSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pvZGl0RWRpdG9yLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCBcImpvZGl0XCIiXSwibmFtZXMiOlsiSm9kaXRFZGl0b3IiLCJwcm9wcyIsIm9sZENvbmZpZyIsImNoYW5nZUxpc3RlbmVyIiwidmFsdWUiLCJzdGF0ZSIsIm9uQ2hhbmdlIiwiY29uZmlnIiwiY3JlYXRlRWRpdG9yIiwiZWRpdG9yIiwiZGVzdHJ1Y3QiLCJKb2RpdCIsInJlZnMiLCJlbGVtZW50IiwiZWRpdG9yUmVmIiwiZXZlbnRzIiwib24iLCJKU09OIiwic3RyaW5naWZ5IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdEQTs7Ozs7O2tCQUVlQSxxQjs7Ozs7Ozs7Ozs7Ozs7O0FDRmY7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxXOzs7QUFDakI7Ozs7OztBQVNBLHlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEhBQ1RBLEtBRFM7O0FBQUEsY0FGbkJDLFNBRW1CLEdBRlAsRUFFTzs7QUFBQSxjQVluQkMsY0FabUIsR0FZRixVQUFDQyxLQUFELEVBQVc7QUFDeEIsa0JBQUtDLEtBQUwsQ0FBV0QsS0FBWCxHQUFtQkEsS0FBbkI7QUFDQSxnQkFBSSxPQUFPLE1BQUtDLEtBQUwsQ0FBV0MsUUFBbEIsS0FBK0IsVUFBbkMsRUFBK0M7QUFDM0Msc0JBQUtELEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkYsS0FBcEI7QUFDSDtBQUNKLFNBakJrQjs7QUFHZixjQUFLQyxLQUFMLEdBQWE7QUFDVEQsbUJBQU9ILE1BQU1HLEtBQU4sSUFBZSxFQURiO0FBRVRHLG9CQUFRTixNQUFNTSxNQUFOLElBQWdCLEVBRmY7QUFHVEQsc0JBQVVMLE1BQU1LO0FBSFAsU0FBYjs7QUFNQSxjQUFLSixTQUFMLEdBQWlCLE1BQUtHLEtBQUwsQ0FBV0UsTUFBNUI7QUFUZTtBQVVsQjs7Ozs0Q0FTb0I7QUFDakIsaUJBQUtDLFlBQUw7QUFDSDs7O3VDQUVjO0FBQ1gsaUJBQUtDLE1BQUwsSUFBZSxLQUFLQSxNQUFMLENBQVlDLFFBQVosRUFBZjtBQUNBLGlCQUFLRCxNQUFMLEdBQWMsSUFBSUUsZUFBSixDQUFVLEtBQUtDLElBQUwsQ0FBVUMsT0FBcEIsRUFBNkIsS0FBS1osS0FBTCxDQUFXTSxNQUF4QyxDQUFkOztBQUVBLGdCQUFJLEtBQUtOLEtBQUwsQ0FBV2EsU0FBWCxJQUF3QixPQUFPLEtBQUtiLEtBQUwsQ0FBV2EsU0FBbEIsS0FBZ0MsVUFBNUQsRUFBd0U7QUFDcEUscUJBQUtiLEtBQUwsQ0FBV2EsU0FBWCxDQUFxQixLQUFLTCxNQUExQjtBQUNIOztBQUVELGlCQUFLQSxNQUFMLENBQVlMLEtBQVosR0FBb0IsS0FBS0MsS0FBTCxDQUFXRCxLQUEvQjtBQUNBLGlCQUFLSyxNQUFMLENBQVlNLE1BQVosQ0FBbUJDLEVBQW5CLENBQXNCLFFBQXRCLEVBQWdDLEtBQUtiLGNBQXJDO0FBQ0g7OzsrQ0FFdUI7QUFDcEIsaUJBQUtNLE1BQUwsSUFBZSxLQUFLQSxNQUFMLENBQVlDLFFBQVosRUFBZjtBQUNIOzs7NkNBRXFCO0FBQ2xCLGdCQUFJLEtBQUtSLFNBQUwsS0FBbUIsS0FBS0QsS0FBTCxDQUFXTSxNQUFsQyxFQUEwQztBQUN0QyxxQkFBS0wsU0FBTCxHQUFpQixLQUFLRCxLQUFMLENBQVdNLE1BQTVCO0FBQ0EscUJBQUtDLFlBQUw7QUFDSDs7QUFFRCxnQkFBSVMsS0FBS0MsU0FBTCxDQUFlLEtBQUtULE1BQUwsQ0FBWUwsS0FBM0IsTUFBc0NhLEtBQUtDLFNBQUwsQ0FBZSxLQUFLakIsS0FBTCxDQUFXRyxLQUExQixDQUExQyxFQUE0RTtBQUN4RTtBQUNIOztBQUVELGlCQUFLSyxNQUFMLENBQVlMLEtBQVosR0FBb0IsS0FBS0gsS0FBTCxDQUFXRyxLQUEvQjtBQUNIOzs7aUNBRVE7QUFDTCxtQkFBTyw0Q0FBVSxLQUFJLFNBQWQsR0FBUDtBQUNIOzs7O0VBaEVvQ2UsZ0I7O2tCQUFwQm5CLFc7Ozs7OztBQ0hyQiwrQzs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoiam9kaXQtcmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcImpvZGl0XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCIsIFwiam9kaXRcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSm9kaXRFZGl0b3JcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcImpvZGl0XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJKb2RpdEVkaXRvclwiXSA9IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdLCByb290W1wiam9kaXRcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzZTVmMmVmZTI4NmJmZjgyNjIyYSIsImltcG9ydCBKb2RpdEVkaXRvciBmcm9tICcuL0pvZGl0RWRpdG9yJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEpvZGl0RWRpdG9yO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBKb2RpdCBmcm9tICdqb2RpdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpvZGl0RWRpdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIC8qKlxyXG4gICAgICpKb2RpdCBlZGl0b3JcclxuICAgICAqXHJcbiAgICAgKiBAbmFtZSBKb2RpdEVkaXRvciNlZGl0b3JcclxuICAgICAqIEB0eXBlIEpvZGl0XHJcbiAgICAgKi9cclxuICAgIGVkaXRvcjtcclxuICAgIG9sZENvbmZpZyA9IHt9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogcHJvcHMudmFsdWUgfHwgJycsXHJcbiAgICAgICAgICAgIGNvbmZpZzogcHJvcHMuY29uZmlnIHx8IHt9LFxyXG4gICAgICAgICAgICBvbkNoYW5nZTogcHJvcHMub25DaGFuZ2VcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLm9sZENvbmZpZyA9IHRoaXMuc3RhdGUuY29uZmlnO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUxpc3RlbmVyID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5zdGF0ZS5vbkNoYW5nZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLm9uQ2hhbmdlKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50ICgpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZUVkaXRvcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUVkaXRvcigpIHtcclxuICAgICAgICB0aGlzLmVkaXRvciAmJiB0aGlzLmVkaXRvci5kZXN0cnVjdCgpO1xyXG4gICAgICAgIHRoaXMuZWRpdG9yID0gbmV3IEpvZGl0KHRoaXMucmVmcy5lbGVtZW50LCB0aGlzLnByb3BzLmNvbmZpZyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmVkaXRvclJlZiAmJiB0eXBlb2YgdGhpcy5wcm9wcy5lZGl0b3JSZWYgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5lZGl0b3JSZWYodGhpcy5lZGl0b3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5lZGl0b3IudmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuZWRpdG9yLmV2ZW50cy5vbignY2hhbmdlJywgdGhpcy5jaGFuZ2VMaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xyXG4gICAgICAgIHRoaXMuZWRpdG9yICYmIHRoaXMuZWRpdG9yLmRlc3RydWN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlICgpIHtcclxuICAgICAgICBpZiAodGhpcy5vbGRDb25maWcgIT09IHRoaXMucHJvcHMuY29uZmlnKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2xkQ29uZmlnID0gdGhpcy5wcm9wcy5jb25maWc7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRWRpdG9yKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkodGhpcy5lZGl0b3IudmFsdWUpID09PSBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLnZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmVkaXRvci52YWx1ZSA9IHRoaXMucHJvcHMudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8dGV4dGFyZWEgcmVmPVwiZWxlbWVudFwiPjwvdGV4dGFyZWE+XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0pvZGl0RWRpdG9yLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9XG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJqb2RpdFwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=