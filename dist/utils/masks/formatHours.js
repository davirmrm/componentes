"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* eslint-disable no-param-reassign */
var _default = function _default(time) {
  time = time.replace(/[^\d]/g, '');
  time = time.substring(0, 4);

  if (time.length > 2) {
    time = time.replace(/^(\d{2})(\d*)/, '$1:$2');
  }

  return time;
}; // format('00000123456')
// format('0000000000')
// format('000000000000000')
// format('123456')
// format('000321700')
// format('000846600')


exports["default"] = _default;