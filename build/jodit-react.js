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

        _this.setElementRef = function (ref) {
            _this.element = ref;
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
            this.editor = new _jodit.Jodit(this.element, this.props.config);

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
            return _react2.default.createElement('textarea', { ref: this.setElementRef });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2NWEzY2Q4NGJhNzhiMjQ3Njk2ZSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pvZGl0RWRpdG9yLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCBcImpvZGl0XCIiXSwibmFtZXMiOlsiSm9kaXRFZGl0b3IiLCJwcm9wcyIsIm9sZENvbmZpZyIsImNoYW5nZUxpc3RlbmVyIiwidmFsdWUiLCJzdGF0ZSIsIm9uQ2hhbmdlIiwic2V0RWxlbWVudFJlZiIsInJlZiIsImVsZW1lbnQiLCJjb25maWciLCJjcmVhdGVFZGl0b3IiLCJlZGl0b3IiLCJkZXN0cnVjdCIsIkpvZGl0IiwiZWRpdG9yUmVmIiwiZXZlbnRzIiwib24iLCJKU09OIiwic3RyaW5naWZ5IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdEQTs7Ozs7O2tCQUVlQSxxQjs7Ozs7Ozs7Ozs7Ozs7O0FDRmY7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsVzs7O0FBQ2pCOzs7Ozs7QUFTQSx5QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhIQUNUQSxLQURTOztBQUFBLGNBRm5CQyxTQUVtQixHQUZQLEVBRU87O0FBQUEsY0FZbkJDLGNBWm1CLEdBWUYsVUFBQ0MsS0FBRCxFQUFXO0FBQ3hCLGtCQUFLQyxLQUFMLENBQVdELEtBQVgsR0FBbUJBLEtBQW5CO0FBQ0EsZ0JBQUksT0FBTyxNQUFLQyxLQUFMLENBQVdDLFFBQWxCLEtBQStCLFVBQW5DLEVBQStDO0FBQzNDLHNCQUFLRCxLQUFMLENBQVdDLFFBQVgsQ0FBb0JGLEtBQXBCO0FBQ0g7QUFDSixTQWpCa0I7O0FBQUEsY0F1Qm5CRyxhQXZCbUIsR0F1QkgsVUFBQ0MsR0FBRCxFQUFTO0FBQ3JCLGtCQUFLQyxPQUFMLEdBQWVELEdBQWY7QUFDSCxTQXpCa0I7O0FBR2YsY0FBS0gsS0FBTCxHQUFhO0FBQ1RELG1CQUFPSCxNQUFNRyxLQUFOLElBQWUsRUFEYjtBQUVUTSxvQkFBUVQsTUFBTVMsTUFBTixJQUFnQixFQUZmO0FBR1RKLHNCQUFVTCxNQUFNSztBQUhQLFNBQWI7O0FBTUEsY0FBS0osU0FBTCxHQUFpQixNQUFLRyxLQUFMLENBQVdLLE1BQTVCO0FBVGU7QUFVbEI7Ozs7NENBU29CO0FBQ2pCLGlCQUFLQyxZQUFMO0FBQ0g7Ozt1Q0FNYztBQUNYLGlCQUFLQyxNQUFMLElBQWUsS0FBS0EsTUFBTCxDQUFZQyxRQUFaLEVBQWY7QUFDQSxpQkFBS0QsTUFBTCxHQUFjLElBQUlFLFlBQUosQ0FBVSxLQUFLTCxPQUFmLEVBQXdCLEtBQUtSLEtBQUwsQ0FBV1MsTUFBbkMsQ0FBZDs7QUFFQSxnQkFBSSxLQUFLVCxLQUFMLENBQVdjLFNBQVgsSUFBd0IsT0FBTyxLQUFLZCxLQUFMLENBQVdjLFNBQWxCLEtBQWdDLFVBQTVELEVBQXdFO0FBQ3BFLHFCQUFLZCxLQUFMLENBQVdjLFNBQVgsQ0FBcUIsS0FBS0gsTUFBMUI7QUFDSDs7QUFFRCxpQkFBS0EsTUFBTCxDQUFZUixLQUFaLEdBQW9CLEtBQUtDLEtBQUwsQ0FBV0QsS0FBL0I7QUFDQSxpQkFBS1EsTUFBTCxDQUFZSSxNQUFaLENBQW1CQyxFQUFuQixDQUFzQixRQUF0QixFQUFnQyxLQUFLZCxjQUFyQztBQUNIOzs7K0NBRXVCO0FBQ3BCLGlCQUFLUyxNQUFMLElBQWUsS0FBS0EsTUFBTCxDQUFZQyxRQUFaLEVBQWY7QUFDSDs7OzZDQUVxQjtBQUNsQixnQkFBSSxLQUFLWCxTQUFMLEtBQW1CLEtBQUtELEtBQUwsQ0FBV1MsTUFBbEMsRUFBMEM7QUFDdEMscUJBQUtSLFNBQUwsR0FBaUIsS0FBS0QsS0FBTCxDQUFXUyxNQUE1QjtBQUNBLHFCQUFLQyxZQUFMO0FBQ0g7O0FBRUQsZ0JBQUlPLEtBQUtDLFNBQUwsQ0FBZSxLQUFLUCxNQUFMLENBQVlSLEtBQTNCLE1BQXNDYyxLQUFLQyxTQUFMLENBQWUsS0FBS2xCLEtBQUwsQ0FBV0csS0FBMUIsQ0FBMUMsRUFBNEU7QUFDeEU7QUFDSDs7QUFFRCxpQkFBS1EsTUFBTCxDQUFZUixLQUFaLEdBQW9CLEtBQUtILEtBQUwsQ0FBV0csS0FBL0I7QUFDSDs7O2lDQUVRO0FBQ0wsbUJBQU8sNENBQVUsS0FBSyxLQUFLRyxhQUFwQixHQUFQO0FBQ0g7Ozs7RUFwRW9DYSxnQjs7a0JBQXBCcEIsVzs7Ozs7O0FDSHJCLCtDOzs7Ozs7QUNBQSwrQyIsImZpbGUiOiJqb2RpdC1yZWFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwiam9kaXRcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIiwgXCJqb2RpdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJKb2RpdEVkaXRvclwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwiam9kaXRcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkpvZGl0RWRpdG9yXCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0sIHJvb3RbXCJqb2RpdFwiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDY1YTNjZDg0YmE3OGIyNDc2OTZlIiwiaW1wb3J0IEpvZGl0RWRpdG9yIGZyb20gJy4vSm9kaXRFZGl0b3InO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSm9kaXRFZGl0b3I7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSm9kaXQgfSBmcm9tICdqb2RpdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpvZGl0RWRpdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIC8qKlxyXG4gICAgICpKb2RpdCBlZGl0b3JcclxuICAgICAqXHJcbiAgICAgKiBAbmFtZSBKb2RpdEVkaXRvciNlZGl0b3JcclxuICAgICAqIEB0eXBlIEpvZGl0XHJcbiAgICAgKi9cclxuICAgIGVkaXRvcjtcclxuICAgIG9sZENvbmZpZyA9IHt9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogcHJvcHMudmFsdWUgfHwgJycsXHJcbiAgICAgICAgICAgIGNvbmZpZzogcHJvcHMuY29uZmlnIHx8IHt9LFxyXG4gICAgICAgICAgICBvbkNoYW5nZTogcHJvcHMub25DaGFuZ2VcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLm9sZENvbmZpZyA9IHRoaXMuc3RhdGUuY29uZmlnO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUxpc3RlbmVyID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5zdGF0ZS5vbkNoYW5nZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLm9uQ2hhbmdlKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50ICgpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZUVkaXRvcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEVsZW1lbnRSZWYgPSAocmVmKSA9PiB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gcmVmO1xyXG4gICAgfTtcclxuXHJcbiAgICBjcmVhdGVFZGl0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0b3IgJiYgdGhpcy5lZGl0b3IuZGVzdHJ1Y3QoKTtcclxuICAgICAgICB0aGlzLmVkaXRvciA9IG5ldyBKb2RpdCh0aGlzLmVsZW1lbnQsIHRoaXMucHJvcHMuY29uZmlnKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZWRpdG9yUmVmICYmIHR5cGVvZiB0aGlzLnByb3BzLmVkaXRvclJlZiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmVkaXRvclJlZih0aGlzLmVkaXRvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmVkaXRvci52YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XHJcbiAgICAgICAgdGhpcy5lZGl0b3IuZXZlbnRzLm9uKCdjaGFuZ2UnLCB0aGlzLmNoYW5nZUxpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0b3IgJiYgdGhpcy5lZGl0b3IuZGVzdHJ1Y3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUgKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm9sZENvbmZpZyAhPT0gdGhpcy5wcm9wcy5jb25maWcpIHtcclxuICAgICAgICAgICAgdGhpcy5vbGRDb25maWcgPSB0aGlzLnByb3BzLmNvbmZpZztcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVFZGl0b3IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChKU09OLnN0cmluZ2lmeSh0aGlzLmVkaXRvci52YWx1ZSkgPT09IEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZWRpdG9yLnZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDx0ZXh0YXJlYSByZWY9e3RoaXMuc2V0RWxlbWVudFJlZn0+PC90ZXh0YXJlYT5cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvSm9kaXRFZGl0b3IuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJjb21tb25qc1wiOlwicmVhY3RcIixcImFtZFwiOlwicmVhY3RcIn1cbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImpvZGl0XCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==