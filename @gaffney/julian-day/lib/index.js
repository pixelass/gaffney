'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('@gaffney/utils');

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