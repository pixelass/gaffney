'use strict';

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