(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _math = __webpack_require__(4);

Object.keys(_math).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _math[key];
    }
  });
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _gaffney = __webpack_require__(2);

var _gaffney2 = _interopRequireDefault(_gaffney);

var _utils = __webpack_require__(0);

var _svg = __webpack_require__(6);

var _date = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gaffney = new _gaffney2.default();

var today = new Date();
var year = today.getFullYear();
var month = today.getMonth();
var date = today.getDate();
var day = today.getDay();
var phase = gaffney.trig2(year, month, date);
var svg = (0, _svg.svgString)((0, _svg.crescentShape)({ radius: phase, size: 120 }));
var $mountPoint = document.getElementById('mount-point');

var animation = (0, _svg.svgElement)((0, _svg.crescentShape)({ radius: 0, size: 60 }));

var th = (0, _utils.parseInteger)(('' + date).split('').reverse()[0]);
$mountPoint.innerHTML = '\n<style>\n:root {--gaffney-svg-moon-fill-1: #24223a; --gaffney-svg-moon-fill-2: #fd7a34}\nh1 {display: flex; width: 100%}\nsvg {height: 1em; overflow: visible}\n</style>\n<h1><span id="animation"></span> Gaffney</h1>\n<div>\n  ' + svg + ' ' + _date.days.long[day] + ' ' + _date.months.long[month] + '\n  ' + date + (th === 1 ? 'st' : th === 2 ? 'nd' : th === 3 ? 'rd' : 'th') + '\n  ' + year + '\n</div>\n';
var animationBox = document.getElementById('animation');

var draw = function draw() {
  var counter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  (0, _svg.setAttributeNS)(animation.path, 'd', (0, _svg.crescentShape)({ radius: counter }).d);
  setTimeout(function () {
    requestAnimationFrame(draw.bind(undefined, ++counter % 30));
  }, 100);
};

animationBox.appendChild(animation.svg);

draw();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _trig2 = __webpack_require__(3);

var _trig3 = _interopRequireDefault(_trig2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var defaultOptions = {};

var Gaffney = function () {
  function Gaffney() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Gaffney);

    this.options = _extends({}, defaultOptions, options);
  }

  _createClass(Gaffney, [{
    key: 'trig2',
    value: function trig2() {
      return _trig3.default.apply(undefined, arguments);
    }
  }]);

  return Gaffney;
}();

exports.default = Gaffney;
//# sourceMappingURL=index.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

var _julianDay = __webpack_require__(5);

var _julianDay2 = _interopRequireDefault(_julianDay);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var trig2 = function trig2(year, month, day) {
  var JULIAN_DAY = (0, _julianDay2.default)(year, month, day);
  var n = (0, _utils.floor)(12.37 * (year - 1900 + (month - 0.5) / 12));
  var t = n / 1236.85;
  var t2 = t * t;
  var aS = 359.2242 + 29.105356 * n;
  var aM = 306.0253 + 385.816918 * n + 0.01073 * t2;
  var extra = 0.75933 + 1.53058868 * n + (1.178e-4 - 1.55e-7 * t) * t2 + (0.1734 - 3.93e-4 * t) * (0, _utils.sin)((0, _utils.degreeToRadians)(aS)) - 0.4068 * (0, _utils.sin)((0, _utils.degreeToRadians)(aM));
  var i = extra > 0 ? (0, _utils.floor)(extra) : (0, _utils.ceil)(extra - 1);
  var jD = 2415020 + 28 * n + i;
  return (JULIAN_DAY - jD + 30) % 30;
};

exports.default = trig2;
//# sourceMappingURL=index.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var PI = Math.PI,
    cos = Math.cos,
    sin = Math.sin,
    floor = Math.floor,
    ceil = Math.ceil,
    round = Math.round,
    min = Math.min,
    max = Math.max,
    abs = Math.abs;

var getFraction = function getFraction(number) {
  return number - floor(number);
};

var degreeToRadians = function degreeToRadians(degree) {
  return PI / 180 * degree;
};

var parseInteger = function parseInteger(number) {
  var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  return parseInt(number, radix);
};

var leftPad = function leftPad(num, len) {
  return ('00000000' + num).substr(len * -1);
};

var math = {
  PI: PI,
  cos: cos,
  sin: sin,
  floor: floor,
  ceil: ceil,
  round: round,
  min: min,
  max: max,
  abs: abs,
  leftPad: leftPad,
  degreeToRadians: degreeToRadians,
  getFraction: getFraction,
  parseInteger: parseInteger
};

exports.PI = PI;
exports.cos = cos;
exports.sin = sin;
exports.floor = floor;
exports.ceil = ceil;
exports.round = round;
exports.min = min;
exports.max = max;
exports.abs = abs;
exports.leftPad = leftPad;
exports.degreeToRadians = degreeToRadians;
exports.getFraction = getFraction;
exports.parseInteger = parseInteger;
exports.default = math;
//# sourceMappingURL=math.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

var julianDay = function julianDay(year, month, day) {
  var y = year;
  if (y < 0) {
    y++;
  }
  var jy = (0, _utils.parseInteger)(y);
  var jm = (0, _utils.parseInteger)(month) + 1;
  if (month <= 2) {
    jy--;
    jm += 12;
  }
  var jul = (0, _utils.floor)(365.25 * jy) + (0, _utils.floor)(30.6001 * jm) + (0, _utils.parseInteger)(day) + 1720995;
  if (day + 31 * (month + 12 * y) >= 15 + 31 * (0 + 12 * 1582)) {
    var ja = (0, _utils.floor)(0.01 * jy);
    jul = jul + 2 - ja + (0, _utils.floor)(0.25 * ja);
  }
  return jul;
};

exports.default = julianDay;
//# sourceMappingURL=index.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var xmlns = 'http://www.w3.org/2000/svg';

var crescentShape = function crescentShape(_ref) {
  var radius = _ref.radius,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 60 : _ref$size;

  var r2 = radius * 2;
  var sH = size / 2;
  var sQ = size / 4;
  var r = Math.abs(sH - r2);
  // prettier-ignore
  var d = ['M', sH, 0, 'A', r2 < sQ * 3 ? r - sQ : sQ - r, sQ, 0, 1, Math.floor(r2 / sQ) % 2, sH, size, sQ, sQ, 0, 1, 1 - Math.floor(r2 / sH), sH, 0].join(' ');

  return {
    size: size,
    d: d
  };
};

var svgString = function svgString(_ref2) {
  var d = _ref2.d,
      _ref2$size = _ref2.size,
      size = _ref2$size === undefined ? 60 : _ref2$size;
  return '\n<svg xmlns="' + xmlns + '" viewBox="0 0 ' + size + ' ' + size + '">\n  <g stroke="var(--gaffney-svg-moon-fill-0, #000)"\n     stroke-width="1"\n     stroke-location="inside">\n    <circle cx="' + size / 2 + '"\n            cy="' + size / 2 + '"\n            r="' + size / 2 + '"\n            fill="var(--gaffney-svg-moon-fill-1, #000)"\n            vector-effect="non-scaling-stroke">\n    </circle>\n    <path d="' + d + '"\n          fill="var(--gaffney-svg-moon-fill-2, #ff0)"\n          vector-effect="non-scaling-stroke">\n    </path>\n  </g>\n</svg>\n';
};

var setAttributeNS = function setAttributeNS(el, k, v) {
  return el.setAttributeNS(null, k, v);
};
var createElementNS = function createElementNS(el) {
  return document.createElementNS(xmlns, el);
};

var svgElement = function svgElement(_ref3) {
  var _ref3$d = _ref3.d,
      d = _ref3$d === undefined ? '' : _ref3$d,
      _ref3$size = _ref3.size,
      size = _ref3$size === undefined ? 60 : _ref3$size;

  var svg = createElementNS('svg');
  var g = createElementNS('g');
  var circle = createElementNS('circle');
  var path = createElementNS('path');
  // SVG
  setAttributeNS(svg, 'viewBox', '0 0 ' + size + ' ' + size);
  // Cirle
  setAttributeNS(g, 'stroke', 'var(--gaffney-svg-moon-fill-0, #000)');
  setAttributeNS(g, 'stroke-width', 1);
  setAttributeNS(g, 'stroke-location', 'inside');
  // Cirle
  setAttributeNS(circle, 'cx', size / 2);
  setAttributeNS(circle, 'cy', size / 2);
  setAttributeNS(circle, 'r', size / 2);
  setAttributeNS(circle, 'fill', 'var(--gaffney-svg-moon-fill-1, #000)');
  setAttributeNS(circle, 'vector-effect', 'non-scaling-stroke');
  // Path
  setAttributeNS(path, 'd', d);
  setAttributeNS(path, 'fill', 'var(--gaffney-svg-moon-fill-2, #ff0)');
  setAttributeNS(path, 'vector-effect', 'non-scaling-stroke');

  svg.appendChild(g);
  g.appendChild(circle);
  g.appendChild(path);
  return {
    svg: svg,
    path: path
  };
};

exports.svgString = svgString;
exports.svgElement = svgElement;
exports.crescentShape = crescentShape;
exports.setAttributeNS = setAttributeNS;
//# sourceMappingURL=index.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Septmber', 'October', 'November', 'December'];
var dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

var months = {
  long: monthNames,
  short: monthNames.map(function (x) {
    return x.substr(0, 3);
  }),
  initial: monthNames.map(function (x) {
    return x[0];
  })
};

var days = {
  long: dayNames,
  short: dayNames.map(function (x) {
    return x.substr(0, 3);
  }),
  initial: dayNames.map(function (x) {
    return x[0];
  })
};

var date = function date() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Date, [null].concat(args)))();
};
var getTime = function getTime() {
  return date.apply(undefined, arguments).getTime;
};
var getDate = function getDate() {
  return date.apply(undefined, arguments).getDate;
};
var getMonth = function getMonth() {
  return date.apply(undefined, arguments).getMonth;
};
var getYear = function getYear() {
  return date.apply(undefined, arguments).getYear;
};
var getDay = function getDay() {
  return date.apply(undefined, arguments).getDay;
};

exports.date = date;
exports.getDate = getDate;
exports.getDay = getDay;
exports.getMonth = getMonth;
exports.getYear = getYear;
exports.months = months;
exports.days = days;
//# sourceMappingURL=index.js.map

/***/ })
/******/ ]);
});
//# sourceMappingURL=gh-pages.js.map