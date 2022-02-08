"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var translateMonth = function translateMonth(month) {
  var months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
  return months[month];
};
/* eslint-disable no-param-reassign */


var _default = function _default(date) {
  date = new Date(date);
  return "".concat("0".concat(date.getDate()).substr(-2), " ").concat(translateMonth(date.getMonth()), " ").concat(date.getFullYear());
};

exports["default"] = _default;