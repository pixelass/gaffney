'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('@gaffney/utils');

var _julianDay = require('@gaffney/julian-day');

var _julianDay2 = _interopRequireDefault(_julianDay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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