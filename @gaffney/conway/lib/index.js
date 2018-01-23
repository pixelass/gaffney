'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('@gaffney/utils');

var conway = function conway(year, month, day) {
  var r = year % 100;
  r %= 19;
  if (r > 9) {
    r -= 19;
  }
  r = r * 11 % 30 + (0, _utils.parseInteger)(month) + (0, _utils.parseInteger)(day);
  if (month < 3) {
    r += 2;
  }
  r -= year < 2000 ? 4 : 8.3;
  r = (0, _utils.floor)(r + 0.5) % 30;
  return r < 0 ? r + 30 : r;
};

exports.default = conway;
//# sourceMappingURL=index.js.map