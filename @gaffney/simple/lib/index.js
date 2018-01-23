'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('@gaffney/utils');

var _date = require('@gaffney/date');

var _date2 = _interopRequireDefault(_date);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var simple = function simple(year, month, day) {
  var lunarPhase = 2551443;
  var now = (0, _date2.default)(year, month, day, 20, 35, 0);
  var newMoon = (0, _date2.default)(1970, 0, 7, 20, 35, 0);
  var phase = (now.getTime() - newMoon.getTime()) / 1000 % lunarPhase;
  return (0, _utils.floor)(phase / 86400);
};

exports.default = simple;
//# sourceMappingURL=index.js.map