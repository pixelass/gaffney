'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('@gaffney/utils');

var _julianDay = require('@gaffney/julian-day');

var _julianDay2 = _interopRequireDefault(_julianDay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var trig1 = function trig1(year, month, day) {
  var JULIAN_DAY = (0, _julianDay2.default)(year, month, day);
  var K0 = (0, _utils.floor)((year - 1900) * 12.3685);
  var T = (year - 1899.5) / 100;
  var T2 = T * T;
  T3 = T * T * T;
  var J0 = 2415020 + 29 * K0;
  var F0 = 0.0001178 * T2 - 0.000000155 * T3 + (0.75933 + 0.53058868 * K0) - (0.000837 * T + 0.000335 * T2);
  var M0 = 360 * (0, _utils.getFraction)(K0 * 0.08084821133) + 359.2242 - 0.0000333 * T2 - 0.00000347 * T3;
  var M1 = 360 * (0, _utils.getFraction)(K0 * 0.07171366128) + 306.0253 + 0.0107306 * T2 + 0.00001236 * T3;
  var B1 = 360 * (0, _utils.getFraction)(K0 * 0.08519585128) + 21.2964 - 0.0016528 * T2 - 0.00000239 * T3;
  var oldJ = void 0;
  var jDay = 0;
  var phase = 0;
  while (jDay < JULIAN_DAY) {
    var f = F0 + 1.530588 * phase;
    var M5 = (0, _utils.degreeToRadians)(M0 + phase * 29.10535608);
    var M6 = (0, _utils.degreeToRadians)(M1 + phase * 385.81691806);
    var B6 = (0, _utils.degreeToRadians)(B1 + phase * 390.67050646);
    f -= 0.4068 * (0, _utils.sin)(M6) + (0.1734 - 0.000393 * T) * (0, _utils.sin)(M5);
    f += 0.0161 * (0, _utils.sin)(2 * M6) + 0.0104 * (0, _utils.sin)(2 * B6);
    f -= 0.0074 * (0, _utils.sin)(M5 - M6) - 0.0051 * (0, _utils.sin)(M5 + M6);
    f += 0.0021 * (0, _utils.sin)(2 * M5) + 0.001 * (0, _utils.sin)(2 * B6 - M6);
    f += 0.5 / 1440;
    oldJ = jDay;
    jDay = J0 + 28 * phase + (0, _utils.floor)(f);
    phase++;
  }
  return (JULIAN_DAY - oldJ) % 30;
};

exports.default = trig1;
//# sourceMappingURL=index.js.map