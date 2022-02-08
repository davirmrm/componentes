"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(e) {
  var withHour = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return "".concat("0".concat(e.getDate()).substr(-2), "/").concat("0".concat(e.getMonth() + 1).substr(-2), "/").concat(e.getFullYear(), " ").concat(withHour ? "".concat(e.getHours() < 10 ? "0".concat(e.getHours()) : e.getHours(), ":").concat(e.getMinutes() < 10 ? "0".concat(e.getMinutes()) : e.getMinutes()) : '');
};

exports["default"] = _default;