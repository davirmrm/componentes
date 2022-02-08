"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* eslint-disable no-param-reassign */
var _default = function _default(date) {
  date = date.replace(/[^\d]/g, '');
  date = date.substring(0, 8);

  if (date.length > 2) {
    date = date.replace(/^(\d{2})(\d*)/, '$1/$2');
  }

  if (date.length > 5) {
    date = date.replace(/(.{5})(\d*)/, '$1/$2');
  }

  return date;
}; // format('00000123456')
// format('0000000000')
// format('000000000000000')
// format('123456')
// format('000321700')
// format('000846600')


exports["default"] = _default;