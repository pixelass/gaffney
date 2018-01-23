'use strict';

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