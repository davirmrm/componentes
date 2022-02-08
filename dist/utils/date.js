"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.amdToDate = void 0;

var amdToDate = function amdToDate(v) {
  if (!v) {
    return null;
  }

  var parts = v.split('-');
  return "".concat(parts[2], "/").concat(parts[1], "/").concat(parts[0]);
};

exports.amdToDate = amdToDate;