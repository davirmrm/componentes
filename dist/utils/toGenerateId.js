"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(str) {
  var bool = true;
  var tmp;

  while (bool) {
    tmp = "".concat(str).concat(Math.random());

    if (document.getElementById(tmp) === null) {
      bool = false;
    }
  }

  return tmp;
};

exports["default"] = _default;