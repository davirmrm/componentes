"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _real = require("../real");

var _default = function _default(v) {
  return v === '' ? '' : (0, _real.int2Brl)((0, _real.brl2Int)(v));
}; // format('00000123456')
// format('0000000000')
// format('000000000000000')
// format('123456')
// format('000321700')
// format('000846600')


exports["default"] = _default;